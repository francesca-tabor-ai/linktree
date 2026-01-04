'use client';

import { type Link } from '@/config/profile';

interface LinkItemProps {
  link: Link;
}

/**
 * LinkItem Component
 * 
 * Editorial link button with:
 * - Left-aligned text
 * - Subtle neutral background
 * - Minimal hover/press feedback
 * - Fast, restrained transitions
 */
export function LinkItem({ link }: LinkItemProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block w-full
        px-5 py-4
        text-left
        text-base
        font-medium
        text-neutral-900
        bg-white
        border border-neutral-200
        rounded-lg
        
        hover:bg-neutral-50
        hover:border-neutral-300
        
        active:scale-[0.98]
        active:opacity-90
        
        focus:outline-none
        focus:ring-2
        focus:ring-neutral-400
        focus:ring-offset-2
        
        transition-all
        duration-150
        ease-out
      "
    >
      {link.title}
    </a>
  );
}
