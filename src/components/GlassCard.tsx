import React from "react";

export default function GlassCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white/65 backdrop-blur-xl border border-white/40 shadow-lg p-6 md:p-8 transition hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-slate-900 text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-slate-600 mt-1 text-sm md:text-base">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

