import { useCallback, useRef } from "react";

type TimerType = ReturnType<typeof setTimeout>;

export default function useDebounce(
  callback: Function,
  timeout: number = 500
): Function {
  const timeoutRef = useRef<TimerType | null>(null);

  const debounceFunction = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback();
      timeoutRef.current = null;
    }, timeout);
  }, [callback, timeout]);

  return debounceFunction;
}
