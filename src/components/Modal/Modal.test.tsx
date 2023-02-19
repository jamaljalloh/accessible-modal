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

const TestModal = () => {
  const [open, setOpen] = useState(false);
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

test("can only see trigger button when not open", () => {
  render(<TestModal />);
  const triggerButton = screen.getByRole("button", { name: /open modal/i });
  expect(triggerButton).toBeInTheDocument();

  const modalHeading = screen.queryByRole("heading", { name: /test heading/i });
  expect(modalHeading).not.toBeInTheDocument();

  const modalContent = screen.queryByText("test content");
  expect(modalContent).not.toBeInTheDocument();
});

test("can click trigger button to open modal", () => {
  render(<TestModal />);
  const triggerButton = screen.getByRole("button", { name: /open modal/i });
  userEvent.click(triggerButton);

  const modalHeading = screen.getByRole("heading", { name: /test heading/i });
  expect(modalHeading).toBeInTheDocument();

  const modalContent = screen.getByText("test content");
  expect(modalContent).toBeInTheDocument();
});

// // TODO Investigate and fix tab focus test
// test.only("can only focus elements in modal on tab press", () => {
//   render(
//     <Modal
//       isOpen={true}
//       setIsOpen={() => null}
//       triggerText={testModalContent.triggerText}
//       heading={testModalContent.heading}
//       description={testModalContent.description}
//       content={
//         <>
//           <p>{testModalContent.content.text}</p>
//           <button>{testModalContent.content.button}</button>
//         </>
//       }
//     />
//   );

//   const modalContent = screen.getByText("test content");
//   expect(modalContent).toBeInTheDocument();

//   const modalContentButton = screen.getByRole("button", {
//     name: /test content button/i
//   });

//   fireEvent.keyDown(window, { key: "Tab", code: "Tab", charCode: 9 });
//   // userEvent.tab();

//   // screen.debug();
//   expect(modalContentButton).toHaveFocus();

//   userEvent.tab();
//   // userEvent.tab();

//   expect(modalContentButton).toHaveFocus();

//   // screen.debug();
// });
