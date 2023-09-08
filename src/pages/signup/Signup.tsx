import { useNavigate } from "react-router-dom";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import { goToFeed } from "../../router/coordinator";
import { signupServices } from "../../services/SignupServices";
import { useState } from "react";

export function SignupPage() {
  const [invalidInformation, setInvalidInformation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const form = {
    name: "",
    email: "",
    password: "",
  };

  const { input, onChangeInput, clear } = useForm(form);

  const onSubmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        name: "name" in input ? input["name"] : "",
        email: "email" in input ? input["email"] : "",
        password: "password" in input ? input["password"] : "",
      };
      await signupServices(body);

      clear;

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
      if (error === "Email já existe") {
        setErrorMessage("E-mail já existe!");
      }

      setInvalidInformation(true);
    }
  };
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-around min-h-screen">
        <h1 className="font-ibm font-bold text-3xl text-[#373737] ml-5">
          {" "}
          Olá, boas vindas ao LabEddit ;&#41;
        </h1>
        <form
          className="flex flex-col items-center w-[22.8125rem] gap-1 "
          onSubmit={onSubmitSignup}
        >
          {invalidInformation && (
            <p className="text-red-500 mb-2">{errorMessage}</p>
          )}
          <Input
            type={"text"}
            placeholder="Apelido"
            name={"name"}
            onChange={onChangeInput}
            value={"name" in input ? input["name"] : ""}
          />
          <Input
            type={"text"}
            placeholder="E-mail"
            name={"email"}
            onChange={onChangeInput}
            value={"email" in input ? input["email"] : ""}
          />
          <Input
            type={"password"}
            placeholder="Senha"
            name={"password"}
            onChange={onChangeInput}
            value={"password" in input ? input["password"] : ""}
          />

          <p className="font-noto text-black text-sm ml-[0.68rem] mt-12">
            Ao continuar, você concorda com o nosso{" "}
            <a href="" className="text-[#4088CB]">
              Contrato de usuário
            </a>{" "}
            e nossa{" "}
            <a href="" className="text-[#4088CB]">
              Política de Privacidade
            </a>
          </p>

          <div className="flex items-center my-4">
            <input type="checkbox" required className="w-6 h-6" />
            <p className="text-black text-sm ml-[0.68rem]">
              Eu concordo em receber e-mails sobre coisas legais no Labeddit
            </p>
          </div>

          <ButtonGradient text="Cadastrar" type="submit" />
        </form>
      </main>
    </>
  );
}
