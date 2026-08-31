import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="container-site py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-semibold text-sm tracking-tight text-[var(--color-fg)]">
              BEN NGUYEN
            </p>
            <p className="text-[var(--color-muted)] text-sm mt-1">
              Digital Marketing & Content
            </p>
            <p className="text-[var(--color-muted-light)] text-xs mt-1">
              Melbourne, Australia
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/haminhnguyenkhac"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Nguyen on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:bennguyen112007@gmail.com"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              aria-label="Email Ben Nguyen"
            >
              Email
            </a>
            <a
              href="/documents/Ben-Nguyen-Resume.pdf"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              download="Ben-Nguyen-Resume.pdf"
              aria-label="Download resume"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[var(--color-muted-light)]">
            © 2026 Ben Nguyen. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted-light)]">
            Designed and built by Ben Nguyen with AI-assisted development.
          </p>
        </div>
      </div>
    </footer>
  );
}
