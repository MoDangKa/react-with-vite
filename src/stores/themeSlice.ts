import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const isClient = typeof window !== "undefined";

const getSystemPreference = (): Theme => {
  if (!isClient) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): Theme => {
  if (!isClient) return "light";

  try {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || getSystemPreference();
  } catch {
    return getSystemPreference();
  }
};

const applyTheme = (theme: Theme) => {
  if (!isClient) return;

  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    console.warn("Failed to save theme preference");
  }
};

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

applyTheme(initialState.theme);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      applyTheme(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
