import { useEffect } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface PerformanceMetrics {
  FCP?: number;  // First Contentful Paint
  LCP?: number;  // Largest Contentful Paint
  FID?: number;  // First Input Delay
  CLS?: number;  // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser and production
    if (typeof window === 'undefined') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Observe Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metrics.FCP = entry.startTime;
            console.log(`FCP: ${entry.startTime}ms`);
          }
        }

        if (entry.entryType === 'largest-contentful-paint') {
          metrics.LCP = entry.startTime;
          console.log(`LCP: ${entry.startTime}ms`);
        }

        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          metrics.FID = fidEntry.processingStart - fidEntry.startTime;
          console.log(`FID: ${metrics.FID}ms`);
        }

        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          metrics.CLS = (metrics.CLS || 0) + (entry as any).value;
          console.log(`CLS: ${metrics.CLS}`);
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not fully supported');
    }

    // Navigation Timing
    if (window.performance && window.performance.timing) {
      window.addEventListener('load', () => {
        const timing = window.performance.timing;
        metrics.TTFB = timing.responseStart - timing.requestStart;
        
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
        const renderTime = timing.domComplete - timing.domLoading;

        console.log(`Page Load Time: ${loadTime}ms`);
        console.log(`DOM Ready Time: ${domReadyTime}ms`);
        console.log(`Render Time: ${renderTime}ms`);
        console.log(`TTFB: ${metrics.TTFB}ms`);

        // Send to analytics (if configured)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'load',
            value: loadTime,
            event_category: 'Performance'
          });
        }
      });
    }

    // Resource Timing
    if (window.performance && window.performance.getEntriesByType) {
      window.addEventListener('load', () => {
        const resources = window.performance.getEntriesByType('resource');
        let totalSize = 0;
        
        resources.forEach((resource: any) => {
          totalSize += resource.transferSize || 0;
        });

        console.log(`Total Resources: ${resources.length}`);
        console.log(`Total Transfer Size: ${(totalSize / 1024).toFixed(2)} KB`);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
}

// Utility function to report Web Vitals to analytics
export function reportWebVitals(metric: any) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (typeof window !== 'undefined') {
    console.log(metric);
  }
}
