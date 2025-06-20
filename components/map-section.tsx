// components/MapSection.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the AnimatedMap component with SSR disabled
const AnimatedMap = dynamic(
  () => import('@/components/animated-map').then((mod) => mod.AnimatedMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full bg-gray-50 h-[800px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading map...</div>
      </div>
    )
  }
);

export function MapSection() {
  return <AnimatedMap />;
}
