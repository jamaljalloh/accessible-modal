import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { useState } from "react";
import Modal from "./Modal";

expect.extend(toHaveNoViolations);

const testModalContent = {
  triggerText: "open modal",
  heading: "test heading",
  description: "test description",
  content: {
    text: "test content",
    buttonOne: "test content button 1",
    buttonTwo: "test content button 2",
    buttonThree: "test content button 3"
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
          <button>{testModalContent.content.buttonOne}</button>
          <button>{testModalContent.content.buttonTwo}</button>
          <button>{testModalContent.content.buttonThree}</button>
        </>
      }
    />
  );
};

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

test("should not violate any accessibility rules", async () => {
  const { container } = render(<TestModal open />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("focuses first valid element when opened", () => {
  render(<TestModal open />);

  const modalContentButtonOne = screen.getByRole("button", {
    name: /test content button 1/i
  });

  expect(modalContentButtonOne).toHaveFocus();
});

test("only focuses elements within the modal when tabbing", () => {
  render(<TestModal open />);

  const modalContentButtonOne = screen.getByRole("button", {
    name: /test content button 1/i
  });
  const modalContentButtonTwo = screen.getByRole("button", {
    name: /test content button 2/i
  });
  const modalContentButtonThree = screen.getByRole("button", {
    name: /test content button 3/i
  });

  userEvent.tab({ shift: true });

  expect(modalContentButtonThree).toHaveFocus();

  userEvent.tab();

  expect(modalContentButtonOne).toHaveFocus();

  userEvent.tab();

  expect(modalContentButtonTwo).toHaveFocus();

  userEvent.tab();

  expect(modalContentButtonThree).toHaveFocus();
});

test("closes modal on overlay click", () => {
  render(<TestModal open />);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).toBeInTheDocument();

  const modalOverlay = screen.getByTestId("modal-overlay");
  userEvent.click(modalOverlay);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).not.toBeInTheDocument();
});

test("closes modal on escape button click", () => {
  render(<TestModal open />);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).toBeInTheDocument();

  userEvent.type(document.body, "{esc}");

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).not.toBeInTheDocument();
});

test("focus returned to last active element on close", () => {
  render(<TestModal />);

  const triggerButton = screen.getByRole("button", {
    name: /open modal/i
  });
  triggerButton.focus();
  userEvent.click(triggerButton);

  expect(
    screen.queryByRole("heading", {
      name: /test heading/i
    })
  ).toBeInTheDocument();

  userEvent.type(document.body, "{esc}");

  expect(triggerButton).toHaveFocus();
});
