import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { parseYouTubeRenderer, parseYouTubeLink } from './formatters/YouTubeParser';
import { VisualTableRenderer, parseTableContent } from './formatters/VisualTableRenderer';
import { processHtmlContent } from './formatters/HtmlContentProcessor';

interface ContentFormatterProps {
  content: string;
}

function isYouTubeUrl(url: string) {
  return (
    url.includes('youtube.com/watch?v=') ||
    url.includes('youtu.be/')
  );
}

function getYouTubeId(url: string) {
  // Handles both youtu.be and youtube.com/watch?v= formats
  const ytMatch = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return ytMatch ? ytMatch[1] : null;
}

// Check if content contains HTML
function hasHtmlContent(content: string): boolean {
  return content.includes('<div') || 
         content.includes('<h2>') || 
         content.includes('<ul>') ||
         content.includes('<li>') ||
         content.includes('<p>') ||
         content.includes('class=') ||
         content.includes('<section>') ||
         content.includes('<iframe>');
}

const preprocessYouTubeEmbeds = (content: string) => {
  // Replace all custom YouTube formats with an iframe markdown block
  // We'll use a regex to find all lines that match custom YouTube patterns
  // and replace them with a standard YouTube link on its own line
  const patterns = [
    /📺\s*YOUTUBE:\s*([^-\n]+?)\s*-\s*(https?:\/\/[^\s<\n]+)/gi,
    /YOUTUBE:\s*([^-\n]+?)\s*-\s*(https?:\/\/[^\s<\n]+)/gi,
    /🎬\s*YOUTUBE\s*LINK:\s*(.+)/gi,
    /📺\s*YOUTUBE\s*LINK:\s*(.+)/gi,
    /YOUTUBE\s*LINK:\s*(.+)/gi,
    /🎥\s*(.+youtube\.com.+)/gi,
    /🎥\s*(.+youtu\.be.+)/gi
  ];
  let processed = content;
  patterns.forEach(pattern => {
    processed = processed.replace(pattern, (match, ...groups) => {
      // Try to extract the URL from the match
      const url = groups.find(g => typeof g === 'string' && g.includes('http'));
      if (url) {
        return `\n${url.trim()}\n`;
      }
      return match;
    });
  });
  return processed;
};

const components = {
  h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-blue-700 mb-4 mt-8" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-purple-700 mb-3 mt-6" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-pink-700 mb-2 mt-4" {...props} />,
  h4: ({node, ...props}) => <h4 className="text-lg font-semibold text-gray-700 mb-2 mt-3" {...props} />,
  p: ({node, ...props}) => {
    // Replace any YouTube link in the paragraph with an embedded video, inline
    const children = React.Children.map(props.children, child => {
      if (typeof child === 'string') {
        // Find all YouTube links in the string
        const parts = child.split(/(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11})/g);
        return parts.map((part, i) => {
          if (/^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/.test(part)) {
            const videoId = getYouTubeId(part);
            if (videoId) {
              return (
                <span key={i} className="inline-block align-middle">
                  <iframe
                    width="800"
                    height="450"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl shadow-lg w-full max-w-4xl min-h-[450px] my-6 mx-auto"
                  ></iframe>
                </span>
              );
            }
          }
          return part;
        });
      }
      return child;
    });
    return <p className="mb-4 text-gray-800 leading-relaxed text-lg group">{children}</p>;
  },
  ul: ({node, ...props}) => <ul className="list-disc ml-6 mb-3 space-y-1" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal ml-6 mb-3 space-y-1" {...props} />,
  li: ({node, ...props}) => <li className="mb-1" {...props} />,
  a: ({node, ...props}) => {
    // If the link is a YouTube link, render as embed inline
    if (typeof props.href === 'string' && isYouTubeUrl(props.href)) {
      const videoId = getYouTubeId(props.href);
      if (videoId) {
        return (
          <span className="inline-block align-middle">
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg w-full max-w-4xl min-h-[450px] my-6 mx-auto"
            ></iframe>
          </span>
        );
      }
    }
    // Otherwise, render as normal link
    return <a className="text-blue-600 underline hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />;
  },
  code: ({node, ...props}) => <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono text-pink-600" {...props} />,
  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4" {...props} />,
  table: ({node, ...props}) => <table className="min-w-full border border-gray-300 my-4" {...props} />,
  th: ({node, ...props}) => <th className="bg-blue-100 border border-gray-300 px-4 py-2 text-left font-semibold text-blue-800" {...props} />,
  td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2 text-gray-700" {...props} />,
  img: ({node, ...props}) => <img className="rounded-lg shadow max-w-full my-4" {...props} />,
  div: ({node, ...props}) => {
    if (props.children && typeof props.children[0] === 'string' && props.children[0].includes('iframe')) {
      return <div className="my-6">{props.children}</div>;
    }
    return <div {...props} />;
  },
};

const ContentFormatter = ({ content }: ContentFormatterProps) => {
  // Check if content contains HTML and use HTML processor instead
  if (hasHtmlContent(content)) {
    return (
      <div className="max-w-none animate-fade-in">
        <div className="lesson-content-glass-card">
          {processHtmlContent(content)}
        </div>
        <style>{`
          .lesson-content-glass-card {
            background: rgba(255,255,255,0.85);
            box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.08);
            border-radius: 1.5rem;
            padding: 2.5rem 2rem;
            margin-bottom: 1.5rem;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(200,200,255,0.10);
            animation: fadeInCard 0.7s cubic-bezier(.4,2,.3,1) forwards;
          }
          @keyframes fadeInCard {
            from {
              opacity: 0;
              transform: translateY(32px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  // Preprocess for YouTube custom formats
  let processedContent = preprocessYouTubeEmbeds(content);
  // Replace table markdown with custom table renderer if needed
  const tables = parseTableContent(processedContent);
  tables.forEach(table => {
    processedContent = processedContent.replace(table.fullMatch, table.placeholder);
  });
  tables.forEach((table, i) => {
    processedContent = processedContent.replace(
      table.placeholder,
      `\n| ${table.header1} | ${table.header2} |\n| --- | --- |\n${table.rows.map(row => `| ${row[0]} | ${row[1]} |`).join('\n')}\n`
    );
  });
  return (
    <div className="max-w-none animate-fade-in">
      <div className="lesson-content-glass-card">
        <ReactMarkdown
          children={processedContent}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
        />
      </div>
      <style>{`
        .lesson-content-glass-card {
          background: rgba(255,255,255,0.85);
          box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.08);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(200,200,255,0.10);
          animation: fadeInCard 0.7s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ContentFormatter;