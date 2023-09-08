import { useLocation, useNavigate } from "react-router-dom";
import xImage from "../assets/ximage.svg";
import logo from "../assets/logo.svg";
import { goToFeed, goToLogin } from "../router/coordinator";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="w-full h-[7vh] bg-gray-200 flex relative ">
      {location.pathname.includes("/comment") && (
        <button className="pl-5" onClick={() => goToFeed(navigate)}>
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
      <button
        className="text-[#4088CB] ml-auto mr-4 font-noto"
        onClick={() =>
          location.pathname.includes("/signup")
            ? goToLogin(navigate)
            : (localStorage.removeItem("token"), goToLogin(navigate))
        }
      >
        {location.pathname.includes("/signup") ? "login" : "logout"}
      </button>
    </header>
  );
}
