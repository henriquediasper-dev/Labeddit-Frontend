import { ButtonGradient } from "../../components/ButtonGradient";
import { PostBox } from "../../components/PostBox";

export function FeedPage() {
  return (
    <main className="w-96 flex flex-col items-center">
      <form className="flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col gap-3 w-[22.5rem]">
          <textarea
            className="p-4 h-32 bg-gray-200 rounded-xl resize-none"
            placeholder="Escreva seu post..."
            name="post"
          />
          <ButtonGradient text="postar" />
          <div className="mt-3 mb-[1.63rem] h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E]" />
        </div>
      </form>
      <div className="flex flex-col-reverse gap-3 w-[22.5rem] mb-24">
        <PostBox userName=" Henrique" content="primeiro post" />
      </div>
    </main>
  );
}
