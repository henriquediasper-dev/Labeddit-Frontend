interface Props {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, placeholder, name, value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      className="border border-gray-300 rounded w-[22.8125rem] h-14 placeholder: text-zinc-700 pl-4"
    />
  );
}
