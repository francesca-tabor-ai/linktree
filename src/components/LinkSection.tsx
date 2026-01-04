import { type LinkSection as LinkSectionType } from '@/config/profile';
import { LinkItem } from './LinkItem';

interface LinkSectionProps {
  section: LinkSectionType;
}

/**
 * LinkSection Component
 * 
 * Grouped section of links with a title.
 * Clean hierarchy with minimal spacing.
 */
export function LinkSection({ section }: LinkSectionProps) {
  return (
    <section className="mb-10">
      {/* Section Title - subtle, left-aligned */}
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4 px-1">
        {section.title}
      </h2>

      {/* Links in section */}
      <div className="flex flex-col gap-3">
        {section.links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}

