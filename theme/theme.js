import { useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material";
import { createContext } from "react";

import Cookies from "universal-cookie";

import lightVars from "./lightVars/lightVars";
import darkVars from "./darkVars/darkVars";

export const ThemeContext = createContext(null);

const cookie = new Cookies();

const ThemeContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(
    cookie.get("lms-mode") || "light"
  );

  useEffect(() => {
    if (cookie.get("lms-mode") === "dark") {
      darkVars();
    } else {
      lightVars();
    }
  }, [currentMode]);

  const theme = createTheme({
    palette: {
      currentMode,
      ...(currentMode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#090761",
            },
            divider: "#090761",
            background: {
              default: "#F8F9FA",
              secondary: "#fff",
            },
            text: {
              primary: "#090761",
              secondary: "#090761",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#090761",
            },
            divider: "#090761",
            background: {
              default: "#222736",
              secondary: "#2f3446",
            },
            text: {
              primary: "#fff",
              secondary: "#090761",
            },
          }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1480,
      },
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "0.75rem",
            padding: "7px 15px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        },
      },
    },
    typography: {
      fontFamily: "Cairo, sans-serif",
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
