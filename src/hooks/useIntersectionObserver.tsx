import { useCallback, useRef } from 'react';

type Props = {
  callback: () => void;
  index: number;
  limit: number;
  option: IntersectionObserverInit;
};

const useIntersectionObserver = ({ index, limit, callback, option }: Props) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const onIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      callback();
    }
  };

  const lastElemRef = useCallback((node: HTMLImageElement) => {
    if (index >= limit) {
      observer?.current?.disconnect();
    }
    observer.current = new IntersectionObserver(onIntersect, { ...option });
    if (node) observer.current.observe(node);
  }, []);

  return lastElemRef;
};

export default useIntersectionObserver;
