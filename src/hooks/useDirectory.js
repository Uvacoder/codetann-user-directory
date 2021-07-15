import { useState } from "react";
import data from "./data";

export default function useDirectory() {
  const [directory, setDirectory] = useState(data);

  const add = (input) => {
    try {
      setDirectory((prevState) => {
        return { ...input, id: data.length + 1 };
      });
    } catch {
      alert("Error: could not create.");
    }
  };

  const remove = (id) => {
    setDirectory((prevState) => prevState.filter((p) => p.id !== id));
  };

  const edit = (id, data) => {
    // code will go here
  };

  return [directory, add, remove, edit];
}
