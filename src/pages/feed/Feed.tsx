import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { PostBox } from "../../components/PostBox";
import { useForm } from "../../hooks/useForm";
import { useProtect } from "../../hooks/useProtect";
import {
  PostInterface,
  createPostService,
  getPostsService,
  likeOrDislikePostService,
} from "../../services/FeedServices";
import { useState, useEffect } from "react";

export function FeedPage() {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useProtect();
  const form = {
    content: "",
  };
  const { input, onChangeInput, clear } = useForm(form);

  const token = localStorage.getItem("token");

  const getPosts = async () => {
    try {
      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const response = await getPostsService(headers);
      setPosts(response || []);
    } catch (error) {
      console.log(error);
    }
  };

  const likeOrDislike = async (postId: string, value: boolean) => {
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
  };

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const headers = {
        headers: {
          Authorization: token,
        },
      };
      const body = { content: "content" in input ? input["content"] : "" };

      await createPostService(headers, body);

      clear(e);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="w-96 flex flex-col items-center">
        <form
          className="flex flex-col items-center justify-center mt-8"
          onSubmit={createPost}
        >
          <div className="flex flex-col gap-3 w-[22.5rem]">
            <textarea
              className="p-4 h-32 bg-gray-200 rounded-xl resize-none"
              placeholder="Escreva seu post..."
              name="content"
              onChange={onChangeInput}
              value={"content" in input ? input["content"] : ""}
            />
            <ButtonGradient text="postar" type="submit" />
            <div className="mt-3 mb-[1.63rem] h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E]" />
          </div>
        </form>
        <div className="flex flex-col-reverse gap-3 w-[22.5rem] mb-24">
          {posts.map((post) => (
            <PostBox
              likeOrDislikeFunction={likeOrDislike}
              key={post.id}
              userName={post.creator.name}
              content={post.postContent}
              likeQuantity={post.likes - post.dislikes}
              commentQuantity={post.comments}
              postId={post.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}
