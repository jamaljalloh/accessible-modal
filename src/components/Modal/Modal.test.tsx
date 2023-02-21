import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Modal from "./Modal";

const testModalContent = {
  triggerText: "open modal",
  heading: "test heading",
  description: "test description",
  content: {
    text: "test content",
    button: "test content button"
  }
};

const TestModal = ({ open: isOpen = false }: { open?: boolean }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      triggerText={testModalContent.triggerText}
      heading={testModalContent.heading}
      description={testModalContent.description}
      content={
        <>
          <p>{testModalContent.content.text}</p>
          <button>{testModalContent.content.button}</button>
        </>
      }
    />
  );
};

// TODO Add axe accessibility tests

test("only trigger button visible when not open", () => {
  render(<TestModal />);
  const triggerButton = screen.getByRole("button", {
    name: /open modal/i
  });
  expect(triggerButton).toBeInTheDocument();

  const modalHeading = screen.queryByRole("heading", {
    name: /test heading/i
  });
  expect(modalHeading).not.toBeInTheDocument();

  const modalContent = screen.queryByText("test content");
  expect(modalContent).not.toBeInTheDocument();
});

test("can click trigger button to open modal", () => {
  render(<TestModal />);
  const triggerButton = screen.getByRole("button", {
    name: /open modal/i
  });
  userEvent.click(triggerButton);

  const modalHeading = screen.getByRole("heading", {
    name: /test heading/i
  });
  expect(modalHeading).toBeInTheDocument();

  const modalContent = screen.getByText("test content");
  expect(modalContent).toBeInTheDocument();
});

test("can only focus elements in modal on tab press", () => {
  render(<TestModal open />);

  const modalContent = screen.getByText("test content");
  expect(modalContent).toBeInTheDocument();

  const modalContentButton = screen.getByRole("button", {
    name: /test content button/i
  });

  modalContentButton.focus();

  userEvent.tab();

  expect(modalContentButton).toHaveFocus();

  userEvent.tab();

  expect(modalContentButton).toHaveFocus();

  userEvent.tab({ shift: true });

  expect(modalContentButton).toHaveFocus();
});

test("closes modal on backdrop", () => {
  render(<TestModal open />);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).toBeInTheDocument();

  const modalBackdrop = screen.getByTestId("modal-backdrop");
  userEvent.click(modalBackdrop);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).not.toBeInTheDocument();
});
