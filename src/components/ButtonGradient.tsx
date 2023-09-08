interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

export function ButtonGradient({ text, type }: Props) {
  return (
    <button
      className="text-white text-lg font-noto rounded-3xl bg-gradient-to-r from-[#FF6489] to-[#F9B24E] min-w-[22.5rem] h-12 justify-center items-center "
      type={type}
    >
      {text}
    </button>
  );
}
