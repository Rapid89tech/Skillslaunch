import React, { useState, useEffect, useRef } from 'react';
import AnimationControls from './animated-lesson/AnimationControls';
import ContentFormatter from './animated-lesson/ContentFormatter';
import ProgressIndicator from './animated-lesson/ProgressIndicator';
import EmptyState from './animated-lesson/EmptyState';
import { parseContent } from './animated-lesson/ContentParser';

interface AnimatedLessonContentProps {
  content: string;
  onComplete: () => void;
  lessonTitle?: string;
}

const AnimatedLessonContent = ({ content, onComplete, lessonTitle }: AnimatedLessonContentProps) => {
  const [renderedSections, setRenderedSections] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollLoading, setIsScrollLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // If the content is a markdown export (detected by a special export variable), do not split into sections
  const isFullMarkdown = content.startsWith('#') || 
                        content.startsWith('---') || 
                        content.includes('\n# ') ||
                        content.includes('## ') ||
                        content.includes('### ') ||
                        content.includes('#### ') ||
                        content.includes('**Key Features:**') ||
                        content.includes('**What You\'ll Learn:**') ||
                        content.includes('**Key Takeaways**') ||
                        content.includes('## Summary') ||
                        content.includes('## Key Takeaways') ||
                        content.includes('## Introduction') ||
                        content.includes('## What is') ||
                        content.includes('## Pre-') ||
                        content.includes('## Birth of') ||
                        content.includes('## Podcasting Goes') ||
                        content.includes('## The Podcast Boom') ||
                        content.includes('## Podcasting in the 2020s') ||
                        content.includes('## Current Trends') ||
                        content.includes('## Future Opportunities') ||
                        content.includes('## Script Format') ||
                        content.includes('## Guest Preparation') ||
                        content.includes('## Recording Day') ||
                        content.includes('## Content Calendar') ||
                        content.includes('## Recording Tools') ||
                        content.includes('## File Management') ||
                        content.includes('## Best Practices') ||
                        content.includes('## Definition') ||
                        content.includes('## Format') ||
                        content.includes('## Name Origin') ||
                        content.includes('## Radio Broadcasting') ||
                        content.includes('## Internet Radio') ||
                        content.includes('## Key Innovators') ||
                        content.includes('## First Podcasts') ||
                        content.includes('## Technical Foundations') ||
                        content.includes('## Apple\'s iTunes Integration') ||
                        content.includes('## Major Media Outlets') ||
                        content.includes('## Independent Creators') ||
                        content.includes('## Serial: A Turning Point') ||
                        content.includes('## Celebrity & Corporate Entry') ||
                        content.includes('## Platforms Expand') ||
                        content.includes('## Diversification of Content') ||
                        content.includes('## Monetization & Business Models') ||
                        content.includes('## Video Podcasting') ||
                        content.includes('## AI & Technology Integration') ||
                        content.includes('## Hyper-Niche Content') ||
                        content.includes('## Interactive Podcasts') ||
                        content.includes('## Global Reach') ||
                        content.includes('## Challenges') ||
                        content.includes('## The Future of Podcasting');
  const contentSections = isFullMarkdown ? [content] : parseContent(content);

  // Reset when content changes
  useEffect(() => {
    setRenderedSections([]);
    setCurrentIndex(0);
    setAnimationComplete(false);
    setIsAnimating(false);
    setIsPaused(false);
    setIsScrollLoading(false);
  }, [content]);

  const startAnimation = () => {
    // Auto-start scroll-based learning instead
    startScrollBasedLoading();
  };

  const startScrollBasedLoading = () => {
    setIsScrollLoading(true);
    setIsAnimating(false);
    setIsPaused(false);
    setAnimationComplete(false);
    setRenderedSections([]);
    setCurrentIndex(0);
    
    // Load first section immediately
    if (contentSections.length > 0) {
      setRenderedSections([contentSections[0]]);
      setCurrentIndex(1);
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setIsPaused(false);
    setAnimationComplete(false);
    setRenderedSections([]);
    setCurrentIndex(0);
    setIsScrollLoading(false);
  };

  // Set up intersection observer for scroll-based loading
  useEffect(() => {
    if (!isScrollLoading || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && currentIndex < contentSections.length) {
            // Load next section when user scrolls near the bottom
            setTimeout(() => {
              setRenderedSections(prev => {
                if (currentIndex < contentSections.length) {
                  const newSection = contentSections[currentIndex];
                  setCurrentIndex(prev => prev + 1);
                  return [...prev, newSection];
                }
                return prev;
              });
            }, 500); // Small delay for smooth loading
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    // Create a sentinel element at the bottom to trigger loading
    const sentinel = document.createElement('div');
    sentinel.style.height = '1px';
    containerRef.current.appendChild(sentinel);
    observer.observe(sentinel);

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, [isScrollLoading, currentIndex, contentSections.length]);

  // Auto-animation timer
  useEffect(() => {
    if (!isAnimating || isPaused || animationComplete || isScrollLoading) return;

    const timer = setTimeout(() => {
      if (currentIndex < contentSections.length) {
        const newSection = contentSections[currentIndex];
        setRenderedSections(prev => [...prev, newSection]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setAnimationComplete(true);
        setIsAnimating(false);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentIndex, isAnimating, isPaused, contentSections, animationComplete, isScrollLoading]);

  // Check if loading is complete
  useEffect(() => {
    if ((isScrollLoading || isAnimating) && currentIndex >= contentSections.length) {
      setAnimationComplete(true);
      setIsAnimating(false);
      setIsScrollLoading(false);
    }
  }, [currentIndex, contentSections.length, isScrollLoading, isAnimating]);

  const displayedContent = renderedSections.join('\n\n');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Modern Animation Controls */}
      <AnimationControls
        isAnimating={isAnimating}
        isPaused={isPaused}
        animationComplete={animationComplete}
        displayedContent={displayedContent}
        lessonTitle={lessonTitle}
        onStart={startAnimation}
        onScrollStart={startScrollBasedLoading}
        onTogglePause={togglePause}
        onReset={resetAnimation}
        onComplete={onComplete}
      />

      {/* Ultra-Modern Content Display */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-bounce [animation-delay:0s]"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce [animation-delay:2s]"></div>
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-400/10 rounded-full animate-bounce [animation-delay:4s]"></div>
          </div>
        </div>

        {/* Content Container */}
        <div ref={containerRef} className="relative z-10 p-8 md:p-12 min-h-[300px]">
          {displayedContent ? (
            <ContentFormatter content={displayedContent} />
          ) : (
            <EmptyState />
          )}
        </div>
        
        {/* Enhanced Progress Indicator */}
        <ProgressIndicator
          isAnimating={isAnimating || isScrollLoading}
          currentIndex={currentIndex}
          totalSections={contentSections.length}
        />
      </div>
    </div>
  );
};

export default AnimatedLessonContent;
