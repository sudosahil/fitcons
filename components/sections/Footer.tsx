import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { BRAND } from "@/lib/data";

const socials = [
  { name: "instagram" as const, href: BRAND.instagram, label: "Instagram" },
  { name: "youtube" as const, href: BRAND.youtube, label: "YouTube" },
  { name: "whatsapp" as const, href: BRAND.whatsapp, label: "WhatsApp" },
  { name: "mail" as const, href: `mailto:${BRAND.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        {/* Big editorial wordmark + CTA */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-display text-5xl leading-none text-white sm:text-7xl">
              Tushar Menath
            </p>
            <p className="mt-4 serif-italic text-xl text-accent">
              I am &gt; I was
            </p>
          </div>
          <Link href="/apply" className="btn-accent">
            Work with me
            <Icon name="arrow" className="arrow h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 py-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <p className="max-w-sm leading-relaxed text-white/55">
            Natural physique coaching for serious individuals. ICN Classic &amp;
            Men&apos;s Physique Champion 2025. Build muscle, lose fat, and create
            a physique that lasts.
          </p>

          <div>
            <p className="mono-label text-white/40">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/about", label: "Meet your coach" },
                { href: "/program", label: "The program" },
                { href: "/results", label: "Client results" },
                { href: "/faq", label: "FAQ" },
                { href: "/apply", label: "Apply" },
                { href: "/#plans", label: "Plans" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-white/40">
              Coaching inquiries
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-white/70">
                <Icon name="mail" className="h-5 w-5 text-accent" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Icon name="whatsapp" className="h-5 w-5 text-accent" />
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Message on WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-400 hover:border-white/40 hover:text-white"
                >
                  <Icon name={s.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tushar Menath Coaching. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            Natural Athlete · Results vary by individual commitment.
          </p>
        </div>
      </div>
    </footer>
  );
}
