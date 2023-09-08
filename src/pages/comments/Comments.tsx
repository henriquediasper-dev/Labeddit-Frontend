import { useEffect, useState, useCallback } from "react";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { PostBox } from "../../components/PostBox";
import { useForm } from "../../hooks/useForm";
import {
  PostInterface,
  getPostsService,
  likeOrDislikePostService,
} from "../../services/FeedServices";
import { useParams } from "react-router-dom";
import {
  CommentInterface,
  createComment,
  getCommentsService,
  likeOrDislikeCommentsService,
} from "../../services/CommentService";
import { useProtect } from "../../hooks/useProtect";

export function CommentsPage() {
  useProtect();
  const [post, setPost] = useState<PostInterface>();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<CommentInterface[]>([]);

  const params = useParams();

  const token = localStorage.getItem("token");

  const form = {
    content: "",
  };

  const { input, onChangeInput, clear } = useForm(form);

  const getPosts = useCallback(async () => {
    try {
      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await getPostsService(headers);
      const [postFiltred] = response.filter(
        (post) => post.id === params.postId
      );
      setPost(postFiltred);
      isLoading && setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const likeOrDislikePost = useCallback(
    async (
      postId: string,
      value: boolean,
      commentId?: string,
      e?: React.MouseEvent<HTMLButtonElement>
    ) => {
      e && e?.preventDefault();

      try {
        const headers = {
          headers: {
            Authorization: token,
          },
        };
        const body = {
          like: value,
        };

        await likeOrDislikePostService(headers, body, postId);
        getPosts();
      } catch (error) {
        console.log(error);
      }
    },
    [token]
  );

  const getComments = useCallback(async () => {
    try {
      const header = {
        headers: {
          Authorization: token,
        },
      };
      const response = await getCommentsService(header, params.postId || "");
      setComments(response.comments);
    } catch (error) {}
  }, [token]);

  const onSubmitComment = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const header = {
          headers: {
            Authorization: token,
          },
        };
        const body = {
          content: "content" in input ? input["content"] : "",
        };

        await createComment(body, header, params.postId || "");

        clear(e);
        getPosts();
        getComments();
      } catch (error) {
        console.log(error);
      }
    },
    [token, input, getComments, getPosts, clear]
  );

  const likeOrDislikeComments = async (
    postId: string,
    value: boolean,
    commentId?: string,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const body = {
        like: value,
      };

      await likeOrDislikeCommentsService(headers, body, commentId || "");
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  if (isLoading) {
    return <h1>Loading </h1>;
  }
  return (
    <>
      <Header />
      <main className="w-96 flex flex-col items-center">
        <form
          className="flex flex-col items-center justify-center mt-8"
          onSubmit={onSubmitComment}
        >
          <div className="flex flex-col gap-3 w-[22.5rem]">
            <PostBox
              userName={post ? post.creator.name : ""}
              content={post ? post.postContent : ""}
              likeQuantity={post ? post.likes - post?.dislikes : 0}
              commentQuantity={post ? post.comments : 0}
              postId={post ? post.id : ""}
              likeOrDislikeFunction={likeOrDislikePost}
            />
            <textarea
              className="p-4 h-32 bg-gray-200 rounded-xl resize-none"
              placeholder="Adicionar comentário..."
              name="content"
              onChange={onChangeInput}
              value={"content" in input ? input["content"] : ""}
            />
            <ButtonGradient text="Responder" type="submit" />
            <div className="mt-3 mb-[1.63rem] h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E]" />
          </div>
        </form>
        <div className="flex flex-col-reverse gap-3 w-[22.5rem] mb-24">
          {comments.map((comment) => (
            <PostBox
              userName={comment.creatorName}
              content={comment.commentContent}
              likeQuantity={comment.likes - comment.dislikes}
              postId={comment.postId}
              key={comment.commentId}
              commentId={comment.commentId}
              likeOrDislikeFunction={likeOrDislikeComments}
            />
          ))}
        </div>
      </main>
    </>
  );
}
