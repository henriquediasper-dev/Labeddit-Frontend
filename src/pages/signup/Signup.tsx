import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function SignupPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-around min-h-screen">
        <h1 className="font-ibm font-bold text-3xl text-[#373737] ml-5">
          {" "}
          Olá, boas vindas ao LabEddit ;&#41;
        </h1>
        <form className="flex flex-col items-center w-[22.8125rem] gap-1 ">
          <Input type={"text"} placeholder="Apelido" name={"name"} />
          <Input type={"text"} placeholder="E-mail" name={"email"} />
          <Input type={"password"} placeholder="Senha" name={"password"} />

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

          <ButtonGradient text="Cadastrar" />
        </form>
      </main>
    </>
  );
}
