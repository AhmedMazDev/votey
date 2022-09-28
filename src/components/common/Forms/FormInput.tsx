import {
  FieldValues,
  Path,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import Input, { InputProps } from "./Input";

type Props = {
  name: string;
  label: string;
  containerClasses?: string;
  labelClasses?: string;
  inputClasses?: string;
  errorsClasses?: string;
} & Omit<InputProps, "name">;

const FormInput = ({
  label,
  containerClasses,
  inputClasses,
  labelClasses,
  errorsClasses,
  name,
  ...rest
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`flex flex-col gap-2  ${containerClasses} `}>
      <label
        htmlFor={name}
        className={`text-[20px] font-medium ${labelClasses} `}
      >
        {label}
      </label>
      <Input classnames={inputClasses} name={name} {...rest} />
      {errors[name] && (
        <p className={`text-red-500 text-sm ${errorsClasses} `}>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormInput;
