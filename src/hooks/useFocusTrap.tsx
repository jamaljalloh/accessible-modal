import { KeyboardEvent, RefObject, useCallback, useRef } from "react";

const useFocusTrap = (): [
  RefObject<HTMLDivElement>,
  (event: KeyboardEvent) => void
] => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Tab" && containerRef.current) {
        const focusableElements =
          containerRef.current.querySelectorAll<HTMLElement>(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
          );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          // console.log("tab pressed");
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    },
    [containerRef]
  );

  return [containerRef, handleKeyDown];
};

export default useFocusTrap;
