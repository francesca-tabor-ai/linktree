import { profileData } from '@/config/profile';
import GlassCard from '@/components/GlassCard';
import ContactFooter from '@/components/ContactFooter';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-14 md:py-20 space-y-10">
        
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={profileData.avatar}
                alt={profileData.name}
                fill
                className="rounded-full object-cover border-2 border-white/50 shadow-md"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                {profileData.name}
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mt-1">
                {profileData.descriptor}
              </p>
            </div>
          </div>

          {/* Primary Link as CTA */}
          <div className="flex gap-3 flex-wrap">
            {profileData.primaryLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition shadow-lg hover:shadow-xl"
              >
                {link.title}
                <span className="text-sm">→</span>
              </a>
            ))}
            <a
              href={profileData.footer.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 border border-white/50 text-slate-900 rounded-xl font-medium hover:bg-white transition shadow-md"
            >
              Website
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-900/10" />

        {/* Applied AI Section */}
        <GlassCard
          title="Applied AI — Live Systems"
          subtitle="Production-grade agents and applied GenAI systems."
        >
          <ul className="space-y-2">
            {profileData.projectSections
              .find((s) => s.id === 'applied-ai')
              ?.links.map((link) => (
                <li
                  key={link.id}
                  className="rounded-xl px-4 py-3 hover:bg-white/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-slate-900 font-medium">
                        {link.title}
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.url.includes('github.com') ? 'GitHub' : 'Live Demo'} →
                        </a>
                      </div>
                    </div>
                    {link.url.includes('github.com') ? (
                      <span className="font-mono text-[11px] tracking-widest text-slate-500">
                        GITHUB
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] tracking-widest text-slate-500">
                        LIVE
                      </span>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </GlassCard>

        {/* Platforms & Automation */}
        <GlassCard
          title="Platforms & Automation"
          subtitle="Intelligent infrastructure for enterprise operations."
        >
          <ul className="space-y-2">
            {profileData.projectSections
              .find((s) => s.id === 'platforms')
              ?.links.map((link) => (
                <li
                  key={link.id}
                  className="rounded-xl px-4 py-3 hover:bg-white/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-slate-900 font-medium">
                        {link.title}
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub →
                        </a>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-slate-500">
                      GITHUB
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </GlassCard>

        {/* Product & Workflow Tools */}
        <GlassCard
          title="Product & Workflow Tools"
          subtitle="Development acceleration and team productivity."
        >
          <ul className="space-y-2">
            {profileData.projectSections
              .find((s) => s.id === 'product-tools')
              ?.links.map((link) => (
                <li
                  key={link.id}
                  className="rounded-xl px-4 py-3 hover:bg-white/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-slate-900 font-medium">
                        {link.title}
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo →
                        </a>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-slate-500">
                      LIVE
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </GlassCard>

        {/* Prompt Engineering & Frameworks */}
        <GlassCard
          title="Prompt Engineering & Frameworks"
          subtitle="Systematic approaches to GenAI development."
        >
          <ul className="space-y-2">
            {profileData.projectSections
              .find((s) => s.id === 'prompt-engineering')
              ?.links.map((link) => (
                <li
                  key={link.id}
                  className="rounded-xl px-4 py-3 hover:bg-white/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-slate-900 font-medium">
                        {link.title}
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.url.includes('github.com') ? 'GitHub' : link.url.includes('claude.ai') ? 'View Artifact' : 'Live Demo'} →
                        </a>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-slate-500">
                      {link.url.includes('github.com') ? 'GITHUB' : 'LIVE'}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </GlassCard>

        {/* Governance & Compliance */}
        <GlassCard
          title="Governance & Compliance"
          subtitle="Automated policy validation and regulatory systems."
        >
          <ul className="space-y-2">
            {profileData.projectSections
              .find((s) => s.id === 'governance')
              ?.links.map((link) => (
                <li
                  key={link.id}
                  className="rounded-xl px-4 py-3 hover:bg-white/50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-slate-900 font-medium">
                        {link.title}
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-1"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo →
                        </a>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-slate-500">
                      LIVE
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </GlassCard>

      </div>

      {/* High-End Icon Dock Footer */}
      <ContactFooter />
    </main>
  );
}
