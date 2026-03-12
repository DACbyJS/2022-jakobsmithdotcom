import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeProvider";

export function useSetTheme(theme) {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);
}
