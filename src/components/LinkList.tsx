import { type Link } from '@/config/profile';
import { LinkItem } from './LinkItem';

interface LinkListProps {
  links: Link[];
}

/**
 * LinkList Component
 * 
 * Simple vertical list of links without section grouping.
 * Used for primary links.
 */
export function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
}
