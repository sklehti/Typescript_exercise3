import React, { useState } from "react";
import { ChildProps } from "./types";
import toNewDiaryEntries from "./utils";
import diaryService from "./services/diaryService";
import axios from "axios";

function NewEntry({ entries, setEntries }: ChildProps) {
  const [newDate, setNewDate] = useState("");
  const [newVisibility, setNewVisibility] = useState("");
  const [newWeather, setNewWeather] = useState("");
  const [newComment, setNewComment] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const entryCreation = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const entryAdd = {
      id: Number(entries.length + 1),
      date: newDate,
      weather: newWeather,
      visibility: newVisibility,
      comment: newComment,
    };
    try {
      const entry = toNewDiaryEntries(entryAdd);

      diaryService.createDiary(entry).then((result) => {
        setEntries(entries.concat(result));
      });
      setNewDate("");
      setNewVisibility("");
      setNewWeather("");
      setNewComment("");
      setErrorMessage("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        console.error(error.response);

        setErrorMessage(`${error}`);
      } else {
        console.error(error);

        setErrorMessage(`${error}`);
      }
    }
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <form onSubmit={entryCreation}>
        <div>
          date
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>
        <div>
          visibility <label htmlFor="visibility1">great</label>
          <input
            type="radio"
            id="visibility1"
            name="great"
            value="great"
            checked={newVisibility === "great"}
            onChange={(e) => setNewVisibility(e.target.value)}
          />
          <label htmlFor="visibility2">good</label>
          <input
            type="radio"
            id="visibility2"
            name="good"
            value="good"
            checked={newVisibility === "good"}
            onChange={(e) => setNewVisibility(e.target.value)}
          />
          <label htmlFor="visibility2">ok</label>
          <input
            type="radio"
            id="visibility3"
            name="ok"
            value="ok"
            checked={newVisibility === "ok"}
            onChange={(e) => setNewVisibility(e.target.value)}
          />
          <label htmlFor="visibility2">poor</label>
          <input
            type="radio"
            id="visibility4"
            name="poor"
            value="poor"
            checked={newVisibility === "poor"}
            onChange={(e) => setNewVisibility(e.target.value)}
          />
        </div>
        <div>
          weather <label htmlFor="weather1">sunny</label>
          <input
            type="radio"
            id="weather1"
            name="sunny"
            value="sunny"
            checked={newWeather === "sunny"}
            onChange={(e) => setNewWeather(e.target.value)}
          />
          <label htmlFor="weather2">rainy</label>
          <input
            type="radio"
            id="weather2"
            name="rainy"
            value="rainy"
            checked={newWeather === "rainy"}
            onChange={(e) => setNewWeather(e.target.value)}
          />
          <label htmlFor="weather3">cloudy</label>
          <input
            type="radio"
            id="weather3"
            name="cloudy"
            value="cloudy"
            checked={newWeather === "cloudy"}
            onChange={(e) => setNewWeather(e.target.value)}
          />
          <label htmlFor="weather4">stormy</label>
          <input
            type="radio"
            id="weather4"
            name="stormy"
            value="stormy"
            checked={newWeather === "stormy"}
            onChange={(e) => setNewWeather(e.target.value)}
          />
          <label htmlFor="weather5">windy</label>
          <input
            type="radio"
            id="weather5"
            name="windy"
            value="windy"
            checked={newWeather === "windy"}
            onChange={(e) => setNewWeather(e.target.value)}
          />
        </div>
        <div>
          comment
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default NewEntry;
