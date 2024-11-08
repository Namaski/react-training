interface Props {
  text: string;
  className?: string;

  onClickButton: () => void;
}

function MyButton({ text, className, onClickButton }: Props) {
  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-cta hover:bg-cta/70 focus:ring-2 focus:ring-cta/30 font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
}

export default MyButton;
