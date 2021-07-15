import { useState } from "react";
import data from "./data";

export default function useDirectory() {
  const [directory, setDirectory] = useState(data);
  const [index, setIndex] = useState(0);
  const current = directory[index];
  const length = directory.length;

  const next = () => {
    if (index + 1 < length) setIndex((prevState) => (prevState += 1));
  };

  const prev = () => {
    if (index > 0) setIndex((prevState) => (prevState -= 1));
  };

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

  const actions = {
    add,
    remove,
    edit,
    next,
    prev,
  };

  return [actions, current, length, index];
}
