import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Good Favour Limited</span>
          <p className="footer__tagline">Your Gateway to UK Education Success</p>
        </div>
        <nav className="footer__nav">
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__copy">
          © {new Date().getFullYear()} Good Favour Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
