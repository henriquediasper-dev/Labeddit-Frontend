import axios, { AxiosError } from "axios";
import { baseUrl } from "../constantes/BASE_URL";

interface Headers {
  headers: {
    Authorization: string | null;
  };
}

export interface CommentInterface {
  commentContent: string;
  commentId: string;
  creatorId: string;
  creatorName: string;
  dislikes: number;
  likes: number;
  postId: string;
}

export async function createComment(
  body: { content: string },
  headers: Headers,
  postId: string
) {
  try {
    console.log(body);
    await axios.post(`${baseUrl}/comments/${postId}`, body, headers);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}

export async function getCommentsService(headers: Headers, postId: string) {
  try {
    const response = await axios.get(`${baseUrl}/comments/${postId}`, headers);
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

export async function likeOrDislikeCommentsService(
  headers: Headers,
  body: { like: boolean },
  commentId: string
) {
  try {
    await axios.put(`${baseUrl}/comments/${commentId}/like`, body, headers);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}
