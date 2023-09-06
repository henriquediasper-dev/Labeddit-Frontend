import { baseUrl } from "../constantes/BASE_URL";
import axios, { AxiosError } from "axios";

interface Body {
  name: string;
  email: string;
  password: string;
}

export async function signupServices(body: Body) {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`, body);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw error;
    }
  }
}
