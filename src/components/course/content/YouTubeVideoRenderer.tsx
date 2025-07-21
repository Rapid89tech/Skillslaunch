import React from 'react';

interface YouTubeVideoRendererProps {
  videoId: string;
  title?: string;
}

const YouTubeVideoRenderer = ({ videoId, title = "Educational Video" }: YouTubeVideoRendererProps) => {
  // Map video identifiers to actual YouTube video IDs
  const videoIdMap: Record<string, string> = {
    'sanded-vs-unsanded-grout': 'ZixbOMhf7cM',
    'how-to-mix-grout': 'TKqr1BEUgJw',
    'epoxy-grout-tutorial': 'kBbTBl6XHAQ',
    'how-to-properly-hold-grout-float': 'E0EzVLdLhuo',
    'grout-bag-textured-tile': 'QPiDWOx8RrY',
    'grout-haze-removal': 'NfFUYUQ4rz4',
    'how-to-seal-grout': 'DQxdTdnS9G8',
    'tile-trim-installation': 'dQw4w9WgXcQ', // Fixed: was 'default-video-id'
    'how-to-install-waterproofing-membrane': '3kTTXeArGgc',
    'understanding-tile-lippage': '8nJ7RKpQ-M4',
    'how-to-replace-cracked-tile': 'JHK-VnrQW-Q',
    'isMjVLvAIMY': 'isMjVLvAIMY',
    'installing-your-own-roof-basics': 'BqvJb7hcDzA',
    'roof-types-construction-carpentry': '4sNj4_IlyQw',
    'essential-roofing-tools-diy': 'qdBDUL6mwwI',
    'trusses-vs-rafters-pros-cons': 'TEUgGR-a8Yc',
    'everything-about-roofs-qa-pro': 'ZGC0FrL2aJw',
    'solar-cool-green-roofs-compare': 'sC1fZwHTQoQ',
    // Podcast Management Module 2 videos
    'gOqbCqgtCVg': 'gOqbCqgtCVg',
    '061Gxbzlj3s': '061Gxbzlj3s',
    'uy9Sx-OwP6M': 'uy9Sx-OwP6M',
    'YelH2Cc_iHA': 'YelH2Cc_iHA',
    'JRu83afveys': 'JRu83afveys',
    'eNzkrXIMeGk': 'eNzkrXIMeGk',
    'GpCKSrx4BSU': 'GpCKSrx4BSU',
    'gcuDOqMLFvU': 'gcuDOqMLFvU',
    'STK-u918N4o': 'STK-u918N4o',
    // Podcast Management Module 3 videos
    'whL_nS46lRQ': 'whL_nS46lRQ',
    'YiG0j6hHwcU': 'YiG0j6hHwcU',
    'GyKL9eK5I0o': 'GyKL9eK5I0o',
    'DXQ6iK-dfCQ': 'DXQ6iK-dfCQ',
    'ZlOmbWL0ZDM': 'ZlOmbWL0ZDM',
    '_4-Bfp_bQ0k': '_4-Bfp_bQ0k',
    'zBwS9oPf2BM': 'zBwS9oPf2BM',
    'cbaP6uCQnyk': 'cbaP6uCQnyk',
    'ihpbZFPwWXw': 'ihpbZFPwWXw',
    'u1kor4VPQPU': 'u1kor4VPQPU',
    'R6TZaA8-y7I': 'R6TZaA8-y7I',
    // Podcast Management Module 5 videos
    '0a8rviuua6o': '0a8rviuua6o',
    '9yt3NLJnU6w': '9yt3NLJnU6w',
    'IEWJpxq6HVI': 'IEWJpxq6HVI',
    'Tm4OkDZyCaU': 'Tm4OkDZyCaU',
    '28sfdmxukrw': '28sfdmxukrw',
    '1HZaN5fL1VY': '1HZaN5fL1VY',
    'v2QMMjDDxIw': 'v2QMMjDDxIw',
    'Qkfuz-jSDS4': 'Qkfuz-jSDS4',
    'bF-gOr8uDec': 'bF-gOr8uDec',
    'bsOh2dNm8U8': 'bsOh2dNm8U8',
    // AI and Human Relations Module 3 videos
    'jI0MZa_3wUo': 'jI0MZa_3wUo',
    'ow7vOLA0DYY': 'ow7vOLA0DYY',
    'n91Nf5ChXhs': 'n91Nf5ChXhs',
    'PIAPzioNt9Y': 'PIAPzioNt9Y',
    'KfRFClTRYVk': 'KfRFClTRYVk',
    'CcDa7c11IIw': 'CcDa7c11IIw',
    'VjtQEfINlrM': 'VjtQEfINlrM',
    'B0OHBgC11lA': 'B0OHBgC11lA',
    'wyNxnbiFA4Q': 'wyNxnbiFA4Q',
    'Va026z4dN-s': 'Va026z4dN-s',
    'fWQpb9urbpk': 'fWQpb9urbpk',
    'iPqrGRfQ1tU': 'iPqrGRfQ1tU',
    // Entrepreneurship Module 2 videos
    'gsdpvKIAah0': 'gsdpvKIAah0',
    '9DE5gBCNizA': '9DE5gBCNizA',
    'n6ecdYd8T6o': 'n6ecdYd8T6o',
    // Entrepreneurship Module 3 videos
    'gAZog3kdCyw': 'gAZog3kdCyw',
    'fZTZSA56f08': 'fZTZSA56f08',
    'm8D5HZDhcG4': 'm8D5HZDhcG4',
    'HJZyoy8cf-M': 'HJZyoy8cf-M',
    'T3FQtTCRLZw': 'T3FQtTCRLZw',
    'bbtuV2TvlEk': 'bbtuV2TvlEk',
    'gEu7LKJMJBI': 'gEu7LKJMJBI'
  };

  // Extract video ID from full YouTube URLs if needed
  const extractVideoId = (id: string): string => {
    if (id.includes('youtube.com/watch?v=')) {
      return id.split('v=')[1].split('&')[0];
    } else if (id.includes('youtu.be/')) {
      return id.split('youtu.be/')[1].split('?')[0];
    } else if (id.includes('youtube.com/embed/')) {
      return id.split('embed/')[1].split('?')[0];
    } else if (id.includes('www.youtube.com/watch?')) {
      return id.split('v=')[1].split('&')[0];
    }
    return id;
  };

  const cleanVideoId = extractVideoId(videoId);
  const actualVideoId = videoIdMap[cleanVideoId] || cleanVideoId;

  return (
      <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl group">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${actualVideoId}?rel=0&modestbranding=1&autoplay=0&fs=1&cc_load_policy=1&iv_load_policy=3&showinfo=0&controls=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full transition-all duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default YouTubeVideoRenderer;
