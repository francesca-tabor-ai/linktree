interface ContactSectionProps {
  email: string;
  ukMobile: string;
  usMobile: string;
}

/**
 * ContactSection Component
 * 
 * Plain text contact information.
 * No buttons, no hover effects, just readable text.
 */
export function ContactSection({ email, ukMobile, usMobile }: ContactSectionProps) {
  return (
    <section className="mb-10 px-1">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
        Contact
      </h2>

      <div className="flex flex-col gap-2 text-sm text-neutral-700">
        <div>
          <span className="text-neutral-500">Email</span>
          <br />
          <span>{email}</span>
        </div>
        
        <div>
          <span className="text-neutral-500">UK Mobile</span>
          <br />
          <span>{ukMobile}</span>
        </div>
        
        <div>
          <span className="text-neutral-500">US Mobile</span>
          <br />
          <span>{usMobile}</span>
        </div>
      </div>
    </section>
  );
}

