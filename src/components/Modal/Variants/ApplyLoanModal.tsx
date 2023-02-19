import { useState } from "react";
import Modal from "../Modal";

const ApplyLoanModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      triggerText="Apply for a loan"
      heading="Apply for a loan"
      description="Enter your details for the application"
      content={
        <>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue="Newton Day" />
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" />
          <button onClick={() => setOpen(false)}>Apply</button>
        </>
      }
    />
  );
};
export default ApplyLoanModal;
