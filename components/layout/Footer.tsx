import Link from "next/link";

const footerLinks = [
  { href: "#work", label: "Featured Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="container-site py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-bold text-sm tracking-tight text-[var(--color-fg)]"
            >
              BEN NGUYEN
            </Link>
            <p className="text-[var(--color-muted)] text-xs mt-1">
              Digital Marketing, Content Creation & Brand Strategy
            </p>
            <p className="text-[var(--color-muted-light)] text-xs mt-1">
              Melbourne, Victoria, Australia
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
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
              className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Nguyen on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.tiktok.com/@kinhtevietnam_asean"
              className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Published TikTok"
            >
              TikTok
            </a>
            <a
              href="mailto:bennguyen112007@gmail.com"
              className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              aria-label="Email Ben Nguyen"
            >
              Email
            </a>
            <a
              href="/documents/Ben-Nguyen-Digital-Marketing-Resume.pdf"
              download
              className="text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
              aria-label="Download resume"
            >
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[var(--color-muted-light)]">
            © 2026 Ben Nguyen. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted-light)]">
            Evidence-Based Professional Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
