import React from 'react';
import { parseYouTubeRenderer, parseYouTubeLink } from './formatters/YouTubeParser';
import { formatTables } from './formatters/TableFormatter';
import { 
  formatHeaders, 
  formatEmojiPoints, 
  formatBoldLines, 
  formatBulletPoints, 
  formatRegularText 
} from './formatters/ContentTypeFormatters';
import { processHtmlContent } from './formatters/HtmlContentProcessor';
import { VisualTableRenderer, parseTableContent } from './formatters/VisualTableRenderer';

interface ContentFormatterProps {
  content: string;
}

const ContentFormatter = ({ content }: ContentFormatterProps) => {
  const formatContent = (text: string) => {
    // Check if content contains HTML tags - if so, we need to process it differently
    if (text.includes('<div') || text.includes('<h2>') || text.includes('<ul>') || 
        text.includes('<li>') || text.includes('<p>') || text.includes('class=')) {
      return processHtmlContent(text);
    }

    // Parse tables and replace with placeholders
    const tables = parseTableContent(text);
    let processedContent = text;
    
    // Replace table matches with placeholders
    tables.forEach(table => {
      processedContent = processedContent.replace(table.fullMatch, table.placeholder);
    });

    return processedContent.split('\n').map((line, lineIndex) => {
      // Check if this line is a table placeholder
      const tableMatch = tables.find(table => line.trim() === table.placeholder);
      if (tableMatch) {
        return (
          <VisualTableRenderer
            key={`table-${lineIndex}`}
            header1={tableMatch.header1}
            header2={tableMatch.header2}
            rows={tableMatch.rows}
          />
        );
      }
      
      // Check if line contains table placeholder pattern and find matching table
      const placeholderMatch = line.match(/__TABLE_PLACEHOLDER_(\d+)__/);
      if (placeholderMatch) {
        const tableIndex = parseInt(placeholderMatch[1]);
        const table = tables[tableIndex];
        if (table) {
          return (
            <VisualTableRenderer
              key={`table-placeholder-${lineIndex}`}
              header1={table.header1}
              header2={table.header2}
              rows={table.rows}
            />
          );
        }
      }
      // Check for YouTubeVideoRenderer components first
      const youtubeRendererComponent = parseYouTubeRenderer(line);
      if (youtubeRendererComponent) {
        return <div key={`youtube-renderer-${lineIndex}`}>{youtubeRendererComponent}</div>;
      }
      
      // Check for YouTube links and iframes
      const youtubeComponent = parseYouTubeLink(line);
      if (youtubeComponent) {
        return <div key={`youtube-${lineIndex}`}>{youtubeComponent}</div>;
      }
      
      // Skip rendering iframe tags and YouTubeVideoRenderer tags as they're handled above
      if ((line.includes('<iframe') && line.includes('youtube')) || 
          line.includes('<YouTubeVideoRenderer')) {
        return null;
      }
      
      // Try different formatters in order of specificity
      const headerResult = formatHeaders(line, lineIndex);
      if (headerResult) return headerResult;
      
      const emojiResult = formatEmojiPoints(line, lineIndex);
      if (emojiResult) return emojiResult;
      
      const boldResult = formatBoldLines(line, lineIndex);
      if (boldResult) return boldResult;
      
      const bulletResult = formatBulletPoints(line, lineIndex);
      if (bulletResult) return bulletResult;
      
      // Skip table lines since they're handled by placeholders
      if (line.includes('|') && (line.includes('Benefit') || line.includes('Description') || line.includes('----'))) {
        return null;
      }

      // Handle empty lines with minimal spacing
      if (line.trim() === '') {
        return <div key={`empty-${lineIndex}`} className="h-1"></div>;
      }
      
      // Default to regular text formatting
      return formatRegularText(line, lineIndex);
    });
  };

  return (
    <div className="max-w-none space-y-1 animate-fade-in">
      <div className="lesson-content-glass-card">
        {formatContent(content)}
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