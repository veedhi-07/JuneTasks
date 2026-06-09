import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: unknown) {
  //lazy initialization
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);

      return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.log("Error", key, error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}
