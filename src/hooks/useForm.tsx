import { useState } from "react";

export interface InterfaceLogin {
  email: string;
  password: string;
}

export interface InterfaceSignup {
  name: string;
  email: string;
  password: string;
}

type typeFormInput = InterfaceLogin | InterfaceSignup;

export function useForm(initialData: typeFormInput) {
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
