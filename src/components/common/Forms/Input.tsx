import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export type InputProps = {
  id: string;
  name: string;
  classnames?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ classnames, id, name, ...rest }: InputProps) => {
  const { register } = useFormContext();
  return (
    <input
      id={id}
      className={`w-full px-4 py-2 bg-input rounded-lg outline-none ${classnames}`}
      {...register(name)}
      {...rest}
    />
  );
};
export default Input;
