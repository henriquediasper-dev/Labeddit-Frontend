import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";
import comments from "../assets/comments.svg";
import { goToComments } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

interface Props {
  userName: string;
  content: string;
  likeQuantity: number;
  commentQuantity?: number;
  likeOrDislikeFunction?: (
    postId: string,
    value: boolean,
    commentId?: string,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  postId: string;
  commentId?: string;
}

export function PostBox({
  userName,
  content,
  likeQuantity,
  commentQuantity,
  likeOrDislikeFunction,
  postId,
  commentId,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-50 border-neutral-200 border flex-col h-fit px-3 py-2 rounded-xl gap-3 justify-start items-start inline-flex ">
      <p className="text-center text-neutral-500 text-xs ">
        Enviado por:{userName}
      </p>
      <p className="break-all ">{content}</p>
      <div className="flex gap-[1rem] ">
        <div className="flex gap-[0.7rem] rounded-3xl border border-gray-200 items-center p-1">
          <button
            onClick={(e) => likeOrDislikeFunction?.(postId, true, commentId, e)}
          >
            <img src={upArrow} alt="imagem de seta para cima ao dar like" />
          </button>
          <p>{likeQuantity}</p>
          <button
            onClick={(e) =>
              likeOrDislikeFunction?.(postId, false, commentId, e)
            }
          >
            {" "}
            <img
              src={downArrow}
              alt="imagem de seta para baixo ao dar dislike"
            />
          </button>
        </div>
        {(commentQuantity === 0 || commentQuantity) && (
          <div className="flex border border-gray-200 p-2 gap-3 items-center rounded-3xl">
            <button onClick={() => goToComments(navigate, postId)}>
              <img src={comments} />
            </button>
            <p>{commentQuantity}</p>
          </div>
        )}
      </div>
    </div>
  );
}
