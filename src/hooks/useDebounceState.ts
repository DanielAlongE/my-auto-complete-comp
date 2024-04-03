import { useEffect, useRef, useState } from "react";

type TimerType = ReturnType<typeof setTimeout>;

type DebounceStateReturnType<T> = [T, (v: T) => void, (v: T) => void];

export default function useDebounceState<T>(
  value: T,
  delay: number = 500
): DebounceStateReturnType<T> {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  const timeoutRef = useRef<TimerType | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  const handleSetDebounceValue = (v: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setDebounceValue(v);
    }, delay);
  };

  return [debounceValue, handleSetDebounceValue, setDebounceValue];
}
