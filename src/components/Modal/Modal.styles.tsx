import { styled } from "../../stitches.config";

export const ModalContent = styled("div", {
  position: "relative",
  borderRadius: "6px",
  backgroundColor: "white",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "16px"
});

export const Description = styled("p", {
  color: "$grey300",
  margin: "12px 0 20px"
});

export const Heading = styled("h2", {
  margin: 0
});

export const ModalWrapper = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: " translate(-50%, -50%)",
  zIndex: 200,
  width: "inherit",
  outline: 0
});

export const ModalOverlay = styled("div", {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background: "$backgroundOverlay",
  zIndex: 100
});
