import { useEffect, useState } from 'react';

export const useIntersectionObserver = (elementIds: string[], options?: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options || { threshold: 0.5, rootMargin: '-10% 0% -70% 0%' });

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [elementIds, options]);

  return activeId;
};
