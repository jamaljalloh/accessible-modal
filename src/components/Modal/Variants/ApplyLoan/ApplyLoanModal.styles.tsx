import { styled } from "../../../../stitches.config";

export const Field = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  gap: "20px"
});

export const ActionWrapper = styled("div", {
  display: "flex",
  marginTop: "20px",
  columnGap: "12px",
  justifyContent: "flex-end"
});

export const Input = styled("input", {
  all: "unset",
  padding: "0 10px",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: 1,
  color: "$purple300",
  height: "35px",
  borderRadius: "4px",
  border: "2px solid $grey200",
  flex: "1 1 0%",
  "&:focus": {
    outline: "2px solid $purple300"
  }
});

export const Label = styled("label", {
  width: "90px",
  textAlign: "right"
});
