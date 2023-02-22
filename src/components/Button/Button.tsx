import { Button as StyledButton } from "./Button.styles";

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color?: "green";
}

export const Button = ({ color, ...rest }: ButtonProps) => (
  <StyledButton color={color} {...rest} />
);
