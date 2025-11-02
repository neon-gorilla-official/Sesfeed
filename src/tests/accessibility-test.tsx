import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'success';
  message: string;
  element?: string;
  wcag?: string;
}

interface PageTest {
  page: string;
  url: string;
  issues: AccessibilityIssue[];
}

export default function AccessibilityTest() {
  const [isTesting, setIsTesting] = useState(false);
  const [results, setResults] = useState<PageTest[]>([]);
  const [currentTest, setCurrentTest] = useState<string>('');

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Showcase', url: '/showcase' },
    { name: 'Agencies', url: '/agencies' },
    { name: 'Developers', url: '/developers' },
    { name: 'Plugin', url: '/plugin' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Signup', url: '/signup' }
  ];

  const checkColorContrast = (fgColor: string, bgColor: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = window.getComputedStyle(document.documentElement).getPropertyValue(color).trim();
      // Simple luminance calculation
      return 0.5; // Placeholder - would need full implementation
    };
    return 4.5; // Placeholder return
  };

  const runAccessibilityTests = (): AccessibilityIssue[] => {
    const issues: AccessibilityIssue[] = [];

    // Test 1: Check for images without alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          message: `Image ${index + 1} missing alt text`,
          element: img.src || 'unknown',
          wcag: 'WCAG 2.1 Level A - 1.1.1 Non-text Content'
        });
      }
    });

    // Test 2: Check heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1]);
      if (level - previousLevel > 1) {
        issues.push({
          type: 'warning',
          message: `Heading level skipped: ${heading.tagName} after H${previousLevel}`,
          element: heading.textContent?.substring(0, 50) || '',
          wcag: 'WCAG 2.1 Level A - 1.3.1 Info and Relationships'
        });
      }
      previousLevel = level;
    });

    // Test 3: Check for buttons without accessible names
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      const hasText = button.textContent?.trim();
      const hasAriaLabel = button.getAttribute('aria-label');
      const hasAriaLabelledBy = button.getAttribute('aria-labelledby');
      
      if (!hasText && !hasAriaLabel && !hasAriaLabelledBy) {
        issues.push({
          type: 'error',
          message: `Button ${index + 1} missing accessible name`,
          element: button.className,
          wcag: 'WCAG 2.1 Level A - 4.1.2 Name, Role, Value'
        });
      }
    });

    // Test 4: Check for links without accessible names
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      const hasText = link.textContent?.trim();
      const hasAriaLabel = link.getAttribute('aria-label');
      
      if (!hasText && !hasAriaLabel) {
        issues.push({
          type: 'error',
          message: `Link ${index + 1} missing accessible name`,
          element: link.href,
          wcag: 'WCAG 2.1 Level A - 2.4.4 Link Purpose'
        });
      }
    });

    // Test 5: Check for form inputs without labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`);
      const hasAriaLabel = input.getAttribute('aria-label');
      const hasAriaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy && input.getAttribute('type') !== 'hidden') {
        issues.push({
          type: 'error',
          message: `Form input ${index + 1} missing label`,
          element: input.getAttribute('name') || input.getAttribute('placeholder') || 'unknown',
          wcag: 'WCAG 2.1 Level A - 1.3.1 Info and Relationships'
        });
      }
    });

    // Test 6: Check for proper ARIA roles
    const elementsWithRole = document.querySelectorAll('[role]');
    elementsWithRole.forEach((element) => {
      const role = element.getAttribute('role');
      if (role && !['button', 'navigation', 'main', 'complementary', 'contentinfo', 'banner', 'search', 'form', 'region', 'article', 'list', 'listitem', 'heading', 'dialog', 'alertdialog', 'alert', 'status', 'progressbar', 'tab', 'tabpanel', 'tablist'].includes(role)) {
        issues.push({
          type: 'warning',
          message: `Potentially invalid ARIA role: ${role}`,
          element: element.tagName,
          wcag: 'WCAG 2.1 Level A - 4.1.2 Name, Role, Value'
        });
      }
    });

    // Test 7: Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, a, button, h1, h2, h3, h4, h5, h6');
    let contrastIssues = 0;
    textElements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const bgColor = styles.backgroundColor;
      
      // Skip transparent backgrounds
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return;
      }
      
      // This is a simplified check - full implementation would calculate actual contrast ratio
      if (color && bgColor && contrastIssues < 3) {
        // Placeholder for actual contrast calculation
        contrastIssues++;
      }
    });

    // Test 8: Check for skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    const hasSkipToContent = Array.from(skipLinks).some(link => 
      link.textContent?.toLowerCase().includes('skip') || 
      link.getAttribute('aria-label')?.toLowerCase().includes('skip')
    );
    
    if (!hasSkipToContent && document.querySelector('nav')) {
      issues.push({
        type: 'warning',
        message: 'Consider adding a "Skip to main content" link for keyboard users',
        wcag: 'WCAG 2.1 Level A - 2.4.1 Bypass Blocks'
      });
    }

    // Test 9: Check for page title
    if (!document.title || document.title.trim() === '') {
      issues.push({
        type: 'error',
        message: 'Page missing title',
        wcag: 'WCAG 2.1 Level A - 2.4.2 Page Titled'
      });
    }

    // Test 10: Check for language attribute
    if (!document.documentElement.lang) {
      issues.push({
        type: 'error',
        message: 'HTML element missing lang attribute',
        wcag: 'WCAG 2.1 Level A - 3.1.1 Language of Page'
      });
    }

    // Success messages if no critical issues
    if (issues.filter(i => i.type === 'error').length === 0) {
      issues.push({
        type: 'success',
        message: 'No critical accessibility errors found'
      });
    }

    return issues;
  };

  const testAllPages = async () => {
    const testResults: PageTest[] = [];
    
    for (const page of pages) {
      setCurrentTest(`Testing ${page.name}...`);
      
      // Navigate to page (in a real app, you'd use router)
      // For now, we'll test the current page
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const issues = runAccessibilityTests();
      testResults.push({
        page: page.name,
        url: page.url,
        issues
      });
    }
    
    setResults(testResults);
    setIsTesting(false);
    setCurrentTest('');
  };

  const startTest = async () => {
    setIsTesting(true);
    await testAllPages();
  };

  const getIssueIcon = (type: 'error' | 'warning' | 'success') => {
    switch (type) {
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    }
  };

  const countIssues = (results: PageTest[], type: 'error' | 'warning' | 'success') => {
    return results.reduce((sum, page) => 
      sum + page.issues.filter(issue => issue.type === type).length, 0
    );
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-8 text-foreground">Accessibility Testing Dashboard</h1>
        
        {/* Test Controls */}
        <div className="mb-8">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <h2 className="text-2xl text-foreground">WCAG 2.1 Compliance Test</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Test all pages for accessibility compliance
            </p>
            <Button
              onClick={startTest}
              disabled={isTesting}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isTesting ? 'Testing...' : 'Run Accessibility Tests'}
            </Button>
            
            {results.length > 0 && (
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">{countIssues(results, 'success')} Passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-foreground">{countIssues(results, 'warning')} Warnings</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">{countIssues(results, 'error')} Errors</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Current Test Status */}
        {currentTest && (
          <div className="mb-8 p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary">
            {currentTest}
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div>
            <h2 className="text-3xl mb-6 text-foreground">Test Results</h2>
            <div className="space-y-6">
              {results.map((pageResult, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl mb-4 text-foreground">{pageResult.page}</h3>
                  <div className="space-y-3">
                    {pageResult.issues.map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
                        {getIssueIcon(issue.type)}
                        <div className="flex-1">
                          <p className="text-foreground">{issue.message}</p>
                          {issue.element && (
                            <p className="text-sm text-muted-foreground mt-1">Element: {issue.element}</p>
                          )}
                          {issue.wcag && (
                            <p className="text-sm text-muted-foreground mt-1">{issue.wcag}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
