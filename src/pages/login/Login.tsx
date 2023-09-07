import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Input } from "../../components/Input";
import { InterfaceLogin, useForm } from "../../hooks/useForm";
import { goToFeed } from "../../router/coordinator";
import { loginServices } from "../../services/LoginServices";
import { useState } from "react";

export function LoginPage() {
  const [invalidInformation, setInvalidInformation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const form: InterfaceLogin = {
    email: "",
    password: "",
  };

  const { input, onChangeInput, clear } = useForm(form);

  const onSubmiteLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        email: "email" in input ? input["email"] : "",
        password: "password" in input ? input["password"] : "",
      };
      await loginServices(body);

      clear;

      setInvalidInformation(false);

      goToFeed(navigate);
    } catch (error) {
      setErrorMessage("Ocorreu um erro inesperado.");

      if (
        !/^[0-9a-zA-Z$*&@#]{4,}$/.test(
          "password" in input ? input["password"] : ""
        )
      ) {
        setErrorMessage("A senha deve conter no mínimo 4 caracteres!");
      }

      if (
        !/^[\w.-]+@[\w-]+.\w{2,4}$/.test("email" in input ? input["email"] : "")
      ) {
        setErrorMessage("Insira um e-mail válido");
      }

      if (error === "E-mail e/ou senha inválido(s)") {
        setErrorMessage("E-mail e/ou senha inválido(s)");
      }

      setInvalidInformation(true);
    }
  };
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <section className="gap-1 mb-20 flex flex-col items-center justify-center">
        <img src={logo} alt="Logo Labeddit" />
        <h1 className="font-ibm text-4xl text-neutral-700">LabEddit</h1>
        <h2 className="text-black font-ibm font-normal text-base ">
          O projeto de rede social da Labenu
        </h2>
      </section>
      <form
        className="flex flex-col items-center justify-center gap-2"
        onSubmit={onSubmiteLogin}
      >
        {invalidInformation && (
          <p className="text-red-500 mb-2">{errorMessage}</p>
        )}
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          value={"email" in input ? input["email"] : ""}
          onChange={onChangeInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={"password" in input ? input["password"] : ""}
          onChange={onChangeInput}
        />
        <div className="flex flex-col w-96 gap-6 mt-12">
          <ButtonGradient text="Continuar" />

          <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E] w-96" />

          <button className="text-[#FE7E02] w-96 h-12 border border-[#FE7E02] text-lg font-noto rounded-3xl">
            Crie uma conta!
          </button>
        </div>
      </form>
    </main>
  );
}
