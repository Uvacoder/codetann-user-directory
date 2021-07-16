import { useState, useEffect } from "react";
import data from "./data";

export default function useDirectory() {
  const [directory, setDirectory] = useState(data);
  const [index, setIndex] = useState(0);
  const current = directory[index];
  let length = directory.length;

  const next = () => {
    if (index + 1 < length) setIndex((prevState) => (prevState += 1));
  };

  const prev = () => {
    if (index > 0) setIndex((prevState) => (prevState -= 1));
  };

  const add = (input) => {
    setDirectory((prevState) => {
      return [...prevState, input];
    });
  };

  const remove = (id) => {
    setDirectory((prevState) => prevState.filter((p) => p.id !== id));
    if (index === length - 1) setIndex((prevState) => --prevState);
  };

  const edit = (id, data) => {
    setDirectory((prevState) =>
      prevState.map((p) => {
        if (p.id === id) {
          return data;
        } else {
          return p;
        }
      })
    );
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
