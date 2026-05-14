import { Button as FlowBiteButton } from "flowbite-react";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  color?: string;
  type?: "button" | "submit" | "reset";
  className: string;
}

const Button = ({ children, type, className, color }: IProps) => {
  return (
    <FlowBiteButton
      type={type ? type : "button"}
      className={`${className} cursor-pointer hover:opacity-65`}
      color={color}
    >
      {children}
    </FlowBiteButton>
  );
};
export default Button;
