interface Props {
  children: string;
  //  color is just for learning purpose
  color?: "sucess" | "warning" | "error";
  className?: string;

  onClickButton: () => void;
}

export const Button = ({
  children,
  color,
  className,
  onClickButton,
}: Props) => {
  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-cta hover:bg-cta/70 focus:ring-2 focus:ring-cta/30 font-medium rounded-lg text-sm px-5 py-2.5 ${className} ${color}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};

export default Button;
