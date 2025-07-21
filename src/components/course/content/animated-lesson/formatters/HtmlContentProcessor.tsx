import React from 'react';

interface YouTubeMatch {
  placeholder: string;
  title: string;
  url: string;
}

export const processHtmlContent = (text: string) => {
  // Helper function to extract video ID from various YouTube URL formats
  const extractVideoId = (url: string): string => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      return url.split('embed/')[1].split('?')[0];
    } else if (url.includes('www.youtube.com/watch?')) {
      return url.split('v=')[1].split('&')[0];
    }
    return url;
  };

  // First, extract and replace YouTube links with placeholders - handle multiple formats
  const youtubeRegex = /📺\s*YOUTUBE:\s*([^-\n]+?)\s*-\s*(https?:\/\/[^\s<\n]+)/gi;
  const youtubeMatches: YouTubeMatch[] = [];
  let processedHtml = text;
  
  let match;
  let index = 0;
  while ((match = youtubeRegex.exec(text)) !== null) {
    const title = match[1].trim();
    const url = match[2].trim();
    const placeholder = `__YOUTUBE_PLACEHOLDER_${index}__`;
    youtubeMatches.push({ placeholder, title, url });
    processedHtml = processedHtml.replace(match[0], placeholder);
    index++;
  }
  
  
  return (
    <div className="lesson-html-content">
      {(() => {
        console.log('Processing HTML content:', text.substring(0, 200) + '...');
        console.log('YouTube matches found:', youtubeMatches.length);
        return processedHtml.split(/(__YOUTUBE_PLACEHOLDER_\d+__)/).map((part, partIndex) => {
          const youtubeMatch = youtubeMatches.find(yt => yt.placeholder === part);
          if (youtubeMatch) {
            // Extract video ID and render YouTube component
            const videoId = extractVideoId(youtubeMatch.url);
            
            if (videoId) {
              return (
                <div key={`youtube-${partIndex}`} className="my-8 transform translate-y-4 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
                  <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl group">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0&fs=1&cc_load_policy=1&iv_load_policy=3&showinfo=0&controls=1`}
                        title={youtubeMatch.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            }
          }
          
          // Render regular HTML content
          return (
            <div 
              key={`html-${partIndex}`}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          );
        });
      })()}
    </div>
  );
};