import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";
import comments from "../assets/comments.svg";

interface Props {
  userName: string;
  content: string;
}

export function PostBox({ userName, content }: Props) {
  return (
    <div className="bg-neutral-50 border-neutral-200 border flex-col h-fit px-3 py-2 rounded-xl gap-3 justify-start items-start inline-flex ">
      <p className="text-center text-neutral-500 text-xs ">
        Enviado por:{userName}
      </p>
      <p className="break-all ">{content}</p>
      <div className="flex gap-[1rem] ">
        <div className="flex gap-[0.7rem] rounded-3xl border border-gray-200 items-center p-1">
          <button>
            <img src={upArrow} alt="imagem de seta para cima ao dar like" />
          </button>
          <p>1.2k</p>
          <button>
            {" "}
            <img
              src={downArrow}
              alt="imagem de seta para baixo ao dar dislike"
            />
          </button>
        </div>
        <div className="flex border border-gray-200 p-2 gap-3 items-center rounded-3xl">
          <button>
            <img src={comments} />
          </button>
          <p>200</p>
        </div>
      </div>
    </div>
  );
}
