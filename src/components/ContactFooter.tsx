import { Mail, Phone, Linkedin, Globe, Youtube } from "lucide-react";

type Item = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

const items: Item[] = [
  {
    label: "EMAIL",
    href: "mailto:info@francescatabor.com",
    Icon: Mail,
  },
  {
    label: "UK PHONE",
    href: "tel:+447961930316",
    Icon: Phone,
  },
  {
    label: "US PHONE",
    href: "tel:+19789433744",
    Icon: Phone,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/francescatabor/",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "WEBSITE",
    href: "https://www.francescatabor.com/",
    Icon: Globe,
    external: true,
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/@francescatabor",
    Icon: Youtube,
    external: true,
  },
];

export default function ContactFooter() {
  return (
    <footer className="mt-16 md:mt-20">
      {/* subtle divider */}
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="h-px bg-slate-900/10" />
      </div>

      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
        <div
          className="
            mx-auto w-fit
            rounded-2xl
            bg-white/65
            backdrop-blur-xl
            border border-white/40
            shadow-md
            px-6 py-4
          "
        >
          <nav className="flex items-center justify-center gap-6 md:gap-8">
            {items.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={label}
                className="
                  group
                  flex flex-col items-center
                  text-slate-600
                  hover:text-blue-600
                  transition
                "
              >
                {/* icon */}
                <Icon className="h-5 w-5" />

                {/* hover label */}
                <span
                  className="
                    mt-2
                    font-mono
                    text-[10px]
                    tracking-[0.22em]
                    text-slate-500
                    opacity-0
                    translate-y-1
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition
                    select-none
                  "
                >
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

