import Image from 'next/image';

interface ProfileHeaderProps {
  name: string;
  descriptor: string;
  avatar: string;
}

/**
 * ProfileHeader Component
 * 
 * Editorial, calm profile section.
 * No animations, static and confident.
 */
export function ProfileHeader({ name, descriptor, avatar }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center mb-12">
      {/* Profile Image - circular, subtle border, no animation */}
      <div className="mb-6">
        <div className="relative w-24 h-24">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover border border-neutral-300"
            priority
          />
        </div>
      </div>

      {/* Name - large, calm typography */}
      <h1 className="text-3xl font-semibold text-neutral-900 mb-2 tracking-tight">
        {name}
      </h1>

      {/* Descriptor - one line, subtle */}
      <p className="text-base text-neutral-600">
        {descriptor}
      </p>
    </header>
  );
}
