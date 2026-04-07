import { useState } from "react";

export function useTajnur(initValue) {
  const [number, setNumber] = useState(initValue);

  return {
    number,
    setNumber
  };
}