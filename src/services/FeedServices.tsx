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

export async function likeOrDislikePostService(
  headers: Headers,
  body: { like: boolean },
  id: string
) {
  try {
    await axios.put<void>(`${baseUrl}/posts/${id}/like`, body, headers);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}

export async function createPostService(
  headers: Headers,
  body: { content: string }
) {
  try {
    await axios.post<void>(`${baseUrl}/posts`, body, headers);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}
