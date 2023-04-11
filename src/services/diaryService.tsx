import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "http://localhost:3001";

const getAllDiaries = () => {
  return axios
    .get<NewDiaryEntry[]>(`${baseUrl}/api/diaries`)
    .then((response) => response.data);
};

const createDiary = (object: DiaryEntry) => {
  const request = axios.post(`${baseUrl}/api/diaries`, object);
  return request.then((response) => response.data);

  //   return axios
  //     .post(`${baseUrl}/api/diaries`, object)
  //     .then((response) => response.data);
};

export default {
  getAllDiaries,
  createDiary,
};
