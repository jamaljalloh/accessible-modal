import { useEffect, useRef } from "react";

// TODO Remove
const useFocusTrap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
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
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement instanceof HTMLElement) {
      containerElement.setAttribute("tabIndex", "-1");
      containerElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (containerElement instanceof HTMLElement) {
        containerElement.removeAttribute("tabIndex");
        containerElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [containerRef]);

  return containerRef;
};

export default useFocusTrap;
