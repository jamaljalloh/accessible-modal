import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import useFocusTrap from "../../hooks/useFocusTrap";
import { ModalBackDrop, ModalContainer } from "./Modal.styles";

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
  const [containerRef, handleKeyDown] = useFocusTrap();

  useEffect(() => {
    const closeOnEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", closeOnEscapePress);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscapePress);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscapePress);
    };
  }, [isOpen]);

  // TODO Add aria tags
  // TODO Fix close on click bug

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{triggerText}</button>
      {isOpen &&
        createPortal(
          <ModalBackDrop
            data-testid="modal-backdrop"
            onClick={() => setIsOpen(false)}
          >
            <ModalContainer
              ref={containerRef}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              <h2>{heading}</h2>
              <p>{description}</p>
              {content}
            </ModalContainer>
          </ModalBackDrop>,
          document.body
        )}
    </>
  );
};

export default Modal;
