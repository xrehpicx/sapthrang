/** @jsxImportSource @emotion/react */
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { DarkThemeOptions, Globals, LightThemeOptions } from "../theme";
import { DebugModeContextProvider } from "./DebugModeContext";

export const DefaultContext = createContext({});

export const useDefault = () => useContext(DefaultContext);

const darkTheme = createTheme(DarkThemeOptions);
const lightTheme = createTheme(LightThemeOptions);

export function DefaultContextProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "d" && e.ctrlKey) {
        setTheme((t) => {
          if (t.palette.mode === "dark") {
            return lightTheme;
          }
          return darkTheme;
        });
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <DefaultContext.Provider value={{}}>
        <DebugModeContextProvider>{children}</DebugModeContextProvider>
      </DefaultContext.Provider>
    </ThemeProvider>
  );
}
