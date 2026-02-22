'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const OFF_WHITE = '#fafafa';
const PURPLE_100 = '#f3e8ff'; // Tailwind purple-100

export default function PageBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const isCaseStudy = pathname?.startsWith('/casestudy');
    document.body.style.backgroundColor = isCaseStudy ? PURPLE_100 : OFF_WHITE;
  }, [pathname]);

  return null;
}
