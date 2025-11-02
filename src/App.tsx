import { useRoute, useLocation } from 'wouter';
import { useEffect } from 'react';
import { ThemeProvider } from './utils/theme-context';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BeforeAfterToggle } from './components/BeforeAfterToggle';
import { LiveFeedPreview } from './components/LiveFeedPreview';
import { AIEcosystem } from './components/AIEcosystem';
import { TheShift } from './components/TheShift';
import { HowItWorks } from './components/HowItWorks';
import { WhyItMatters } from './components/WhyItMatters';
import { PluginPreview } from './components/PluginPreview';
import { ValueStack } from './components/ValueStack';
import { Pricing } from './components/Pricing';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
import { SectionConnector } from './components/SectionConnector';
import { Plugin } from './pages/Plugin';
import { PricingPage } from './pages/PricingPage';
import { ShowcasePage } from './pages/ShowcasePage';
import { AboutPage } from './pages/AboutPage';
import { AgenciesPage } from './pages/AgenciesPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { SesJsonPage } from './pages/SesJsonPage';
import { ProtocolPage } from './pages/ProtocolPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { FeedPreview } from './pages/dashboard/FeedPreview';
import { VisibilityReport } from './pages/dashboard/VisibilityReport';
import { AccountSettings } from './pages/dashboard/AccountSettings';
import { PricingDemo } from './pages/PricingDemo';
import AccessibilityTest from './tests/accessibility-test';

function AppContent() {
  const [location] = useLocation();
  const [isPlugin] = useRoute('/plugin');
  const [isPricing] = useRoute('/pricing');
  const [isShowcase] = useRoute('/showcase');
  const [isAbout] = useRoute('/about');
  const [isAgencies] = useRoute('/agencies');
  const [isDevelopers] = useRoute('/developers');
  const [isSesJson] = useRoute('/ses-json');
  const [isProtocol] = useRoute('/protocol');
  const [isLogin] = useRoute('/login');
  const [isSignup] = useRoute('/signup');
  const [isForgotPassword] = useRoute('/forgot-password');
  const [isDashboard] = useRoute('/dashboard');
  const [isDashboardFeed] = useRoute('/dashboard/feed');
  const [isDashboardVisibility] = useRoute('/dashboard/visibility');
  const [isDashboardSettings] = useRoute('/dashboard/settings');
  const [isPricingDemo] = useRoute('/pricing-demo');
  const [isA11yTest] = useRoute('/test/accessibility');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (isPlugin) {
    return <Plugin />;
  }

  if (isPricing) {
    return <PricingPage />;
  }

  if (isShowcase) {
    return <ShowcasePage />;
  }

  if (isAbout) {
    return <AboutPage />;
  }

  if (isAgencies) {
    return <AgenciesPage />;
  }

  if (isDevelopers) {
    return <DevelopersPage />;
  }

  if (isSesJson) {
    return <SesJsonPage />;
  }

  if (isProtocol) {
    return <ProtocolPage />;
  }

  if (isA11yTest) {
    return <AccessibilityTest />;
  }

  if (isPricingDemo) {
    return <PricingDemo />;
  }

  // Auth Pages
  if (isLogin) {
    return <LoginPage />;
  }

  if (isSignup) {
    return <SignupPage />;
  }

  if (isForgotPassword) {
    return <ForgotPasswordPage />;
  }

  // Dashboard Pages
  if (isDashboard) {
    return <DashboardHome />;
  }

  if (isDashboardFeed) {
    return <FeedPreview />;
  }

  if (isDashboardVisibility) {
    return <VisibilityReport />;
  }

  if (isDashboardSettings) {
    return <AccountSettings />;
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <Hero />
        <BeforeAfterToggle />
        <LiveFeedPreview />
        <AIEcosystem />
        <TheShift />
        <WhyItMatters />
        <HowItWorks />
        <PluginPreview />
        <ValueStack />
        <Pricing />
        <FooterCTA />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <Toaster position="bottom-right" theme="dark" />
    </ThemeProvider>
  );
}
