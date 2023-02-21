import { styled } from "@stitches/react";

// TODO Update styles

export const ModalContainer = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: " translate(-50%, -50%)",
  zIndex: 700,
  width: " inherit",
  outline: 0,
  border: "1px solid red",
  borderRadius: "4px",
  backgroundColor: "white"
});

export const ModalBackDrop = styled("div", {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background: "rgba(0, 0, 0, 0.3)",
  zIndex: 500
});
