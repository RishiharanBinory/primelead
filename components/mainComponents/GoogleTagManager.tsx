'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// 👇 ADD THIS — tells TypeScript that dataLayer exists on window
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function GTMRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }, [pathname, searchParams]);

  return null;
}