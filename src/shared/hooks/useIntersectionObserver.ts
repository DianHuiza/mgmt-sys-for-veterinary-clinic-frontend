import { useEffect, useRef } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback()
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  },[callback])

  return { ref};
}