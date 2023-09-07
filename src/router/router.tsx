import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/Login";
import { SignupPage } from "../pages/signup/Signup";
import { FeedPage } from "../pages/feed/Feed";
import { CommentsPage } from "../pages/comments/Comments";

export function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/:postId/comment" element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
