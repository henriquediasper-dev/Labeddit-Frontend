import { useState } from "react";

export interface InterfaceLogin {
  email: string;
  password: string;
}
export function useForm(initialData: InterfaceLogin) {
  const [input, setInput] = useState(initialData);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const clear = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(initialData);
  };

  return { input, onChangeInput, clear };
}
