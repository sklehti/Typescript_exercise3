import React, { useState, useEffect } from "react";
import NewEntry from "./NewEntry";
import DiaryEntries from "./DiaryEntries";
import { NewDiaryEntry } from "./types";
import diaryService from "./services/diaryService";

function App() {
  const [entries, setEntries] = useState<NewDiaryEntry[]>([]);

  useEffect(() => {
    diaryService.getAllDiaries().then((result) => {
      setEntries(result);
    });
  }, []);

  return (
    <div>
      <NewEntry setEntries={setEntries} entries={entries} />
      <DiaryEntries setEntries={setEntries} entries={entries} />
    </div>
  );
}

export default App;
