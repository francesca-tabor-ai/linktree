interface FooterProps {
  website: string;
  linkedin: string;
}

/**
 * Footer Component
 * 
 * Small inline links at the bottom.
 * Minimal styling, subtle hover.
 */
export function Footer({ website, linkedin }: FooterProps) {
  return (
    <footer className="mt-12 pt-8 border-t border-neutral-200">
      <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors duration-150"
        >
          Website
        </a>
        <span className="text-neutral-300">·</span>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-900 transition-colors duration-150"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

