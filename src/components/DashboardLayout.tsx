import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { LayoutDashboard, Rss, BarChart3, Settings, LogOut, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { PlanBadge } from './pricing/PlanBadge';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Feed', href: '/dashboard/feed', icon: Rss },
    { name: 'Visibility', href: '/dashboard/visibility', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location === '/dashboard';
    }
    return location.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17]">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="outline"
          size="icon"
          className="bg-[#1a1f2e] border-white/10 text-white hover:bg-[#1a1f2e]/80"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-[#0B0F17]/80 backdrop-blur-xl border-r border-white/10 z-40 flex flex-col"
          >
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
                  <span className="text-accent tracking-wider text-sm">SES FEED</span>
                </a>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link key={item.name} href={item.href}>
                    <a
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        active
                          ? 'bg-primary/20 text-primary shadow-lg shadow-primary/10'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action */}
            <div className="p-4 border-t border-white/10">
              <Link href="/onboarding/connect-socials">
                <a>
                  <Button className="w-full bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-xl py-6 group">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Add Platform
                  </Button>
                </a>
              </Link>
            </div>

            {/* Profile */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-sm">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">John Doe</p>
                  <p className="text-gray-500 text-xs truncate">john@example.com</p>
                </div>
              </div>
              <Link href="/login">
                <a>
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </Button>
                </a>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#0B0F17]/80 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
            <div className="lg:hidden w-12" /> {/* Spacer for mobile menu button */}
            
            {/* Plan Badge with Upgrade Link */}
            <div className="flex items-center gap-2">
              <PlanBadge tier="free" size="sm" />
              <Link href="/pricing">
                <a className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  Upgrade
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </Link>
            </div>

            {/* Generate Feed Button */}
            <Link href="/onboarding/generate-feed">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm shadow-lg shadow-primary/20 hidden md:flex">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Regenerate Feed
                </Button>
              </a>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
