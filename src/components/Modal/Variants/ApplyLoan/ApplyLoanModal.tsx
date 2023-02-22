import { useState } from "react";
import { Button } from "../../../Button/Button.styles";
import Modal from "../../Modal";
import {
  ActionWrapper,
  Field,
  Input,
  Label
} from "./ApplyLoanModal.styles";

const ApplyLoanModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      triggerText="Apply for a loan"
      heading="Apply for a loan"
      description="Enter your details for the application, click apply when you're done."
      content={
        <>
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
          </Field>
          <Field>
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" />
          </Field>
          <ActionWrapper>
            <Button color="green" onClick={() => setOpen(false)}>
              Apply
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </ActionWrapper>
        </>
      }
    />
  );
};
export default ApplyLoanModal;
