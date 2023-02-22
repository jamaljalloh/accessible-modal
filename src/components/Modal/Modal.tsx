import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useFocusTrap from "../../hooks/useFocusTrap";
import { Button } from "../Button/Button.styles";
import {
  Description,
  Heading,
  ModalContent,
  ModalOverlay,
  ModalWrapper
} from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerText: string;
  heading: string;
  description?: string;
  content: ReactNode;
};

const Modal = ({
  isOpen,
  setIsOpen,
  triggerText,
  heading,
  description,
  content
}: ModalProps) => {
  const [modalRef, handleKeyDown] = useFocusTrap();
  const lastFocusedElement = useRef<Element | null>(null);

  const headingId = "modal-heading";
  const descriptionId = "modal-description";

  // ENHANCEMENT Move useEffect into custom useModal hook
  useEffect(() => {
    const closeOnEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // prevent overflow
      document.body.style.overflow = "hidden";

      // add escape key listener
      document.addEventListener("keydown", closeOnEscapePress);

      // focus first valid element in modal
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        if (focusableElements.length > 0) {
          // store last focused element
          lastFocusedElement.current = document.activeElement;

          // focus first valid element in modal
          focusableElements[0].focus();
        }
      }
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscapePress);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscapePress);

      // refocus last focused element
      if (lastFocusedElement.current instanceof HTMLElement) {
        lastFocusedElement.current.focus();
      }
    };
  }, [isOpen, setIsOpen, modalRef]);

  return (
    <>
      {/* ENHANCEMENT Allow custom button be passed in */}
      <Button onClick={() => setIsOpen(true)}>{triggerText}</Button>
      {isOpen &&
        createPortal(
          <>
            <ModalOverlay
              data-testid="modal-overlay"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <ModalWrapper
              aria-modal
              aria-labelledby={headingId}
              aria-describedby={descriptionId}
              tabIndex={-1}
              role="dialog"
              ref={modalRef}
              onKeyDown={handleKeyDown}
            >
              <ModalContent>
                <Heading id={headingId}>{heading}</Heading>
                <Description id={descriptionId}>
                  {description}
                </Description>
                {/* ENHANCEMENT Add close button */}
                {content}
              </ModalContent>
            </ModalWrapper>
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
