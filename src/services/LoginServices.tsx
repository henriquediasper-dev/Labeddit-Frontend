import axios, { AxiosError } from "axios";
import { baseUrl } from "../constantes/BASE_URL";

interface Body {
  email: string;
  password: string;
}
export async function loginServices(body: Body) {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, body);
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
