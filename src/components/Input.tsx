interface Props {
  type: string;
  placeholder: string;
  name: string;
}

export function Input({ type, placeholder, name }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border border-gray-300 rounded w-[22.8125rem] h-14 placeholder: text-zinc-700 pl-4"
    />
  );
}
