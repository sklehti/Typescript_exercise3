import React from "react";
import { ChildProps } from "./types";

function DiaryEntries(props: ChildProps) {
  return (
    <div>
      <h2>Diary entries</h2>
      {props.entries.map((e, index) => (
        <div key={index}>
          <h3>{e.date}</h3>
          <div>visibility: {e.visibility}</div>
          <div>weather: {e.weather}</div>
        </div>
      ))}
    </div>
  );
}

export default DiaryEntries;
