import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export function Navigation() {
  const [showcaseDropdownOpen, setShowcaseDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShowcaseOpen, setMobileShowcaseOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-foreground tracking-wider">SES FEED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Showcase Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowcaseDropdownOpen(true)}
              onMouseLeave={() => setShowcaseDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2">
                Showcase
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showcaseDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 -mt-2">
                  <div className="w-48 rounded-xl bg-card border border-border shadow-xl overflow-hidden">
                    <Link href="/showcase" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors">
                      Overview
                    </Link>
                    <Link href="/agencies" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors">
                      For Agencies
                    </Link>
                    <Link href="/developers" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors">
                      For Developers
                    </Link>
                    <div className="border-t border-border" />
                    <Link href="/ses-json" className="block px-4 py-3 text-accent hover:bg-muted transition-colors">
                      ses.json Generator
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/plugin" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Plugin
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Pricing
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2">
                About
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 -mt-2">
                  <div className="w-48 rounded-xl bg-card border border-border shadow-xl overflow-hidden">
                    <Link href="/about" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors">
                      Our Story
                    </Link>
                    <Link href="/protocol" className="block px-4 py-3 text-foreground hover:bg-muted transition-colors">
                      SES Protocol
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/login">
              <a>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground transition-colors rounded-full"
                >
                  Log in
                </Button>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  Get Started
                </Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-6 h-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="tracking-wider">SES FEED</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-4 mt-8">
                {/* Mobile Showcase Section */}
                <div>
                  <button 
                    onClick={() => setMobileShowcaseOpen(!mobileShowcaseOpen)}
                    className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors py-2"
                  >
                    <span>Showcase</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileShowcaseOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileShowcaseOpen && (
                    <div className="flex flex-col gap-2 ml-4 mt-2">
                      <Link 
                        href="/showcase" 
                        className="text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link 
                        href="/agencies" 
                        className="text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        For Agencies
                      </Link>
                      <Link 
                        href="/developers" 
                        className="text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        For Developers
                      </Link>
                      <Link 
                        href="/ses-json" 
                        className="text-accent hover:text-accent/80 transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        ses.json Generator
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Plugin Link */}
                <Link 
                  href="/plugin" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plugin
                </Link>

                {/* Mobile Pricing Link */}
                <Link 
                  href="/pricing" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                {/* Mobile About Section */}
                <div>
                  <button 
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors py-2"
                  >
                    <span>About</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <div className="flex flex-col gap-2 ml-4 mt-2">
                      <Link 
                        href="/about" 
                        className="text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Story
                      </Link>
                      <Link 
                        href="/protocol" 
                        className="text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SES Protocol
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-6 space-y-3">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <a>
                      <Button 
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-muted transition-colors rounded-full"
                      >
                        Log in
                      </Button>
                    </a>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <a>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
