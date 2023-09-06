import { NavigateFunction } from "react-router-dom";

export function goToFeed(navigate: NavigateFunction) {
  navigate("/feed");
}

export function goToSignup(navigate: NavigateFunction) {
  navigate("/signup");
}

export function goToComments(navigate: NavigateFunction, postId: string) {
  navigate(`/post/${postId}/comment`);
}

export function goToLogin(navigate: NavigateFunction) {
  navigate("/");
}
