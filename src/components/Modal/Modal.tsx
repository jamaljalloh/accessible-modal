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
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  // TODO Add escape key exit
  // TODO Add aria tags

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
