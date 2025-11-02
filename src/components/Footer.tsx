import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Showcase', href: '/showcase' },
      { name: 'For Agencies', href: '/agencies' },
      { name: 'For Developers', href: '/developers' },
      { name: 'ses.json Generator', href: '/ses-json' },
      { name: 'Plugin', href: '/plugin' },
      { name: 'Pricing', href: '/pricing' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'SES Protocol', href: '/protocol' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Status', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Two-Column Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Left: Copyright */}
          <div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} Ses Feed Protocol — Visibility for the AI Web.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors cursor-pointer">
              About
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
              Docs
            </a>
            <Link href="/pricing" className="hover:text-foreground transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors cursor-pointer">
              API Access
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
              Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
