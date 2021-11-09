import axios from "axios";
import { END_POINT } from "constants/variables";

export function loginRequest(data) {
  return axios({
    url: `${END_POINT}/login`,
    method: "POST",
    data,
  });
}

export function getMessages(data) {
  return axios({
    url: `${END_POINT}/messages`,
    method: "GET",
    params: data,
  });
}
