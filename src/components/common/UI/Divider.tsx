type Props = {
  text?: string;
  color?: string;
};

const Divider = ({ text, color = "#374151" }: Props) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div
          className={`w-full border-t `}
          style={{
            borderColor: color,
          }}
        ></div>
      </div>
      {text && (
        <div className="relative flex justify-center text-sm text-center">
          <span className="px-2 bg-lightBg ">{text}</span>
        </div>
      )}
    </div>
  );
};

export default Divider;
