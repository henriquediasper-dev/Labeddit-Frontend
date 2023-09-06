import axios, { AxiosError } from "axios";
import { baseUrl } from "../constantes/BASE_URL";

interface Headers {
  headers: {
    Authorization: string | null;
  };
}
export interface PostInterface {
  creator: { name: string; id: string };
  comments: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  postContent: string;
  id: string;
}

export async function getPostsService(headers: Headers) {
  try {
    const response = await axios.get<PostInterface[]>(
      `${baseUrl}/posts`,
      headers
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}
