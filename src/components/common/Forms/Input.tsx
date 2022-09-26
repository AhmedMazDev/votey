import { InputHTMLAttributes } from "react";

export type InputProps = {
  id: string;
  name: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  classnames?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, name, type, value, onChange, classnames }: InputProps) => {
  return (
    <input
      {...{ id, name, type, value, onChange }}
      className={`w-full px-4 py-2 bg-input rounded-lg outline-none ${classnames}`}
    />
  );
};

export default Input;
