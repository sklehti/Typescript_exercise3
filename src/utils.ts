import { DiaryEntry, Visibility, Weather } from "./types";

const isNumber = (number: unknown): number is number => {
  return typeof number === "number" || number instanceof Number;
};

const parseId = (id: unknown): number => {
  if (!isNumber(id)) {
    throw new Error("Incorrect or missing id");
  }
  return id;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility");
  }
  return visibility;
};

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather)
    .map((w) => w.toString())
    .includes(param);
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather");
  }
  return weather;
};

const toNewDiaryEntries = (object: unknown): DiaryEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "id" in object &&
    "date" in object &&
    "weather" in object &&
    "visibility" in object &&
    "comment" in object
  ) {
    const newEntry: DiaryEntry = {
      id: parseId(object.id),
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
      comment: parseComment(object.comment),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};

export default toNewDiaryEntries;
