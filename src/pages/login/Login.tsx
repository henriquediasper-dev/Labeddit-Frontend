import logo from "../../assets/logo.svg";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Input } from "../../components/Input";

export function LoginPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <section className="gap-1 mb-20 flex flex-col items-center justify-center">
        <img src={logo} alt="Logo Labeddit" />
        <h1 className="font-ibm text-4xl text-neutral-700">LabEddit</h1>
        <h2 className="text-black font-ibm font-normal text-base ">
          O projeto de rede social da Labenu
        </h2>
      </section>
      <form className="flex flex-col items-center justify-center gap-2">
        <Input type="text" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
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
