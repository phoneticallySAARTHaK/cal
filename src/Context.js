import { createContext } from "react";

export const ModeContext = createContext();
export const DateContext = createContext({
  date: new Date(),
  setDate: () => {},
});
