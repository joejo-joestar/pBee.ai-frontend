import { createTheme } from "@mui/material/styles";

export const AppColors: Record<string, string> = {
  A: "#6E57FF",
  B: "#20B1C7",
  C: "#1964D5",
  D: "#41C667",
  E: "#FFCF52",
  F: "#FF7A00",
  G: "#E63913",
  I: "#5A5A5A",
  J: "#FFB36D",
  K: "#4C38CB",
  L: "#0E606D",
  M: "#114AA0",
  N: "#237B3C",
  O: "#E3A83E",
  P: "#B45000",
  Q: "#C12E0D",
  R: "#271E5C",
  S: "#0A292E",
  T: "#0D1F3B",
  U: "#1B3426",
  V: "#5C3B00",
  W: "#492612",
  X: "#561406",
  Y: "#CAC2FF",
  Z: "#629EF8",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0A292E",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7E7E7E",
      contrastText: "#000000",
    },
    error: {
      main: "#D92D20",
      contrastText: "#ffffff",
    },
  },
});
