import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import ApplyLoanModal from "./ApplyLoanModal";

expect.extend(toHaveNoViolations);

test("can click apply for loan button to open modal", () => {
  render(<ApplyLoanModal />);
  const triggerButton = screen.getByRole("button", {
    name: /Apply for a loan/i
  });
  userEvent.click(triggerButton);

  const modalHeading = screen.getByRole("heading", {
    name: /Apply for a loan/i
  });
  expect(modalHeading).toBeInTheDocument();

  const modalDescription = screen.getByText(
    "Enter your details for the application, click apply when you're done."
  );
  expect(modalDescription).toBeInTheDocument();
});

describe("when opened", () => {
  let container: Element;

  beforeEach(() => {
    const { container: renderedContainer } = render(
      <ApplyLoanModal />
    );
    container = renderedContainer;
    const triggerButton = screen.getByRole("button", {
      name: /Apply for a loan/i
    });
    userEvent.click(triggerButton);
  });

  test("should not violate any accessibility rules", async () => {
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("should see expected fields", () => {
    expect(
      screen.getByRole("textbox", { name: "Name" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "Amount" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Apply" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cancel" })
    ).toBeInTheDocument();
  });

  test.each(["Apply", "Cancel"])(
    "should exit with %s button press",
    (buttonName: string) => {
      const actionBtn = screen.getByRole("button", {
        name: buttonName
      });
      userEvent.click(actionBtn);
      const modalHeading = screen.queryByRole("heading", {
        name: /Apply for a loan/i
      });
      expect(modalHeading).not.toBeInTheDocument();
    }
  );
});
