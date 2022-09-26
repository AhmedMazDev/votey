import Input, { InputProps } from "./Input";

type Props = {
  label: string;
} & InputProps;

const LabeledInput = ({
  label,
  id,
  name,
  type,
  value,
  classnames,
  onChange,
}: Props) => {
  return (
    <div className={`flex flex-col gap-2  ${classnames} `}>
      <label htmlFor={id} className="text-[20px] font-medium">
        {label}
      </label>
      <Input {...{ id, name, type, value, onChange }} />
    </div>
  );
};

export default LabeledInput;
