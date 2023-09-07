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

interface ContentInterface {
  content: string;
}

export function useForm(initialData: typeFormInput | ContentInterface) {
  const [input, setInput] = useState(initialData);

  const onChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const clear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(initialData);
  };

  return { input, onChangeInput, clear };
}
