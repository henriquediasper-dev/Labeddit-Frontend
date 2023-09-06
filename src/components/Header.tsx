import { useLocation } from "react-router-dom";
import xImage from "../assets/ximage.svg";
import logo from "../assets/logo.svg";

export function Header() {
  const location = useLocation();
  return (
    <header className="w-full h-[7vh] bg-gray-200 flex relative ">
      {location.pathname.includes("/comment") && (
        <button className="pl-5">
          <img
            src={xImage}
            alt="imagem de um x que representa voltar de página"
          />
        </button>
      )}
      <img
        src={logo}
        alt="Imagem da logomarca Labeddit"
        className="absolute align-middle h-4/5 top-[12%] left-1/2 transform -translate-x-1/2"
      />
      <button className="text-[#4088CB] ml-auto mr-4 font-noto">Logout</button>
    </header>
  );
}
