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

// Enhanced YouTube Video Component
const YouTubeVideo = ({ videoId, title }: { videoId: string; title?: string }) => (
  <div className="relative w-full my-8 group animate-fade-in-up">
    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Video Container with proper aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      
      {/* Enhanced overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          ▶ Play
        </div>
      </div>
    </div>
    
    {/* Video title or description */}
    {title && (
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
    )}
  </div>
);

// Enhanced Paragraph Component with Dynamic Styling
const DynamicParagraph = ({ children, ...props }: any) => {
  const text = typeof children === 'string' ? children : React.Children.toArray(children).join('');
  
  // Check if this is a dense paragraph that needs breaking up
  const isDenseParagraph = text.length > 200 && !text.includes('\n');
  
  if (isDenseParagraph) {
    // Split into sentences and create dynamic blocks
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    return (
      <div className="space-y-4 mb-6 animate-fade-in-up">
        {sentences.map((sentence, index) => (
          <div key={index} className="relative">
            {/* Decorative element for every other sentence */}
            {index % 2 === 0 && (
              <div className="absolute -left-6 top-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
            )}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg pl-4 border-l-2 border-transparent hover:border-blue-300 transition-all duration-300 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 rounded-r-lg py-2 -ml-2">
              {sentence.trim()}.
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  // Regular paragraph with enhanced styling
  return (
    <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg group hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 animate-fade-in-up relative pl-4 border-l-2 border-transparent hover:border-blue-300 transition-all duration-300 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 rounded-r-lg py-2 -ml-2">
      {children}
    </p>
  );
};

// Enhanced List Item Component
const DynamicListItem = ({ children, ...props }: any) => (
  <li className="mb-3 text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 relative pl-6 animate-fade-in-up">
    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
    <span className="relative z-10">{children}</span>
  </li>
);

const components = {
  h1: ({node, ...props}) => (
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 mt-8 animate-fade-in-up flex items-center">
      <span className="mr-3 text-2xl">🚀</span>
      {props.children}
    </h1>
  ),
  h2: ({node, ...props}) => (
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 border-l-4 border-blue-500 pl-4 animate-fade-in-up flex items-center">
      <span className="mr-3 text-xl">📋</span>
      {props.children}
    </h2>
  ),
  h3: ({node, ...props}) => (
    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 mt-6 animate-fade-in-up flex items-center">
      <span className="mr-2 text-lg">💡</span>
      {props.children}
    </h3>
  ),
  h4: ({node, ...props}) => (
    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2 mt-4 animate-fade-in-up flex items-center">
      <span className="mr-2">⚡</span>
      {props.children}
    </h4>
  ),
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
              return <YouTubeVideo key={i} videoId={videoId} />;
            }
          }
          return part;
        });
      }
      return child;
    });
    
    return <DynamicParagraph>{children}</DynamicParagraph>;
  },
  ul: ({node, ...props}) => (
    <ul className="list-none ml-0 mb-6 space-y-2 animate-fade-in-up bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-100/50 dark:border-blue-800/50" {...props} />
  ),
  ol: ({node, ...props}) => (
    <ol className="list-decimal ml-6 mb-6 space-y-2 animate-fade-in-up bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-green-100/50 dark:border-green-800/50" {...props} />
  ),
  li: ({node, ...props}) => <DynamicListItem {...props} />,
  a: ({node, ...props}) => {
    // If the link is a YouTube link, render as embed inline
    if (typeof props.href === 'string' && isYouTubeUrl(props.href)) {
      const videoId = getYouTubeId(props.href);
      if (videoId) {
        return <YouTubeVideo videoId={videoId} />;
      }
    }
    // Otherwise, render as normal link
    return (
      <a 
        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-medium bg-blue-50/50 dark:bg-blue-900/20 px-1 rounded" 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props} 
      />
    );
  },
  code: ({node, ...props}) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1 text-sm font-mono text-pink-600 dark:text-pink-400 border border-gray-200 dark:border-gray-700" {...props} />
  ),
  blockquote: ({node, ...props}) => (
    <blockquote className="border-l-4 border-blue-400 pl-6 italic text-gray-600 dark:text-gray-400 my-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 py-4 rounded-r-lg animate-fade-in-up relative shadow-lg">
      <div className="absolute top-2 left-2 text-2xl opacity-30">💬</div>
      <div className="relative z-10">{props.children}</div>
      <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"></div>
    </blockquote>
  ),
  table: ({node, ...props}) => (
    <div className="overflow-x-auto my-6 rounded-lg shadow-lg animate-fade-in-up bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700" {...props} />
  ),
  th: ({node, ...props}) => (
    <th className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-blue-800 dark:text-blue-300" {...props} />
  ),
  td: ({node, ...props}) => (
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300" {...props} />
  ),
  img: ({node, ...props}) => (
    <img className="rounded-xl shadow-lg max-w-full my-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" {...props} />
  ),
  div: ({node, ...props}) => {
    if (props.children && typeof props.children[0] === 'string' && props.children[0].includes('iframe')) {
      return <div className="my-6 animate-fade-in-up">{props.children}</div>;
    }
    return <div {...props} />;
  },
};

const ContentFormatter = ({ content }: ContentFormatterProps) => {
  // Check if content contains HTML and use HTML processor instead
  if (hasHtmlContent(content)) {
    return (
      <div className="max-w-none animate-fade-in">
        <div className="lesson-content-modern-card">
          {processHtmlContent(content)}
        </div>
        <style>{`
          .lesson-content-modern-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%);
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
            border-radius: 1.5rem;
            padding: 3rem 2.5rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.2);
            animation: slideInCard 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            position: relative;
            overflow: hidden;
          }
          
          .lesson-content-modern-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          }
          
          @keyframes slideInCard {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
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
      <div className="lesson-content-modern-card">
        <ReactMarkdown
          children={processedContent}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
        />
      </div>
      <style>{`
        .lesson-content-modern-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%);
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          animation: slideInCard 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          position: relative;
          overflow: hidden;
        }
        
        .lesson-content-modern-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
        }
        
        @keyframes slideInCard {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        /* Enhanced video styling */
        iframe {
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
        }
        
        iframe:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ContentFormatter;