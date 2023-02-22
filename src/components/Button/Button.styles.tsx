import { styled } from "../../stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  lineHeight: "1",
  fontWeight: "500",
  height: "35px",
  borderRadius: "4px",
  padding: "0px 15px",
  pointerEvents: "auto",

  variants: {
    color: {
      green: {
        backgroundColor: "$green100",
        color: "$green300",
        "&:hover": {
          backgroundColor: "$green200"
        },
        "&:focus-visible": {
          outline: "2px solid $purple300",
          outlineOffset: "3px"
        }
      },
      grey: {
        backgroundColor: "$grey100",
        color: "$grey300",
        "&:hover": {
          backgroundColor: "$grey200"
        },
        "&:focus-visible": {
          outline: "2px solid $purple300",
          outlineOffset: "3px"
        }
      }
    }
  },
  defaultVariants: {
    color: "grey"
  }
});
