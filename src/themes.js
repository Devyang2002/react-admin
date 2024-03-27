import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";
import { Typography } from "@mui/material";

// color design tokens

export const tokens = (mode) =>({
    ...(mode ==='dark')
    ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        }, 
    } : {grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    },
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0",
        500: "#141b2d",
        600: "#434957",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
    },
    blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
    },}
})

// mui theme settings

export const themeSettings = (mode) =>{
    const colors = tokens(mode);

    return {
        palette:{
            mode: mode,
            ...(mode === 'dark'
            ?{
                primary:{
                    main: colors.primary[500],
                },
                secondary:{
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500]
                }
            } :{
                primary:{
                    main: colors.primary[100],
                },
                secondary:{
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfcf",
                }
            })
        },
        typography:{
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 40,
            },
            h2 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 32,
            },
            h3 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 24,
            },
            h4 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 20,
            },
            h5 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 16,
            },
            h6 :{
                fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 14,
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode : () =>{}
}) ;

export const useMode = ()=>{
    const [mode,setMode] = useState('dark');

    const colorMode = useMemo(
        ()=>({
            toggleColorMode: ()=>{
                setMode((prev) => (prev ==="light" ? "dark":"light"))
            }
        })
    );

    const theme = useMemo( ()=> createTheme(themeSettings(mode)),[mode]);

    return[theme, colorMode];
}


// ColorModeContext:

// This function creates a context in React. Think of a context as a way to share values (in this case, functions or data) between different components of your application, without having to pass props manually at every level.
// In this context, we define an initial value which includes a function called toggleColorMode. This function will be used to switch between light and dark modes.
// The createContext function comes from React, and it initializes the context with the provided default value.
// useMode:

// This is a custom React hook. Hooks are special functions in React that allow you to use state and other React features inside functional components.
// It initializes a state variable called mode using the useState hook. The useState hook returns an array with two elements: the current state value (mode) and a function to update that state (setMode).
// It creates another state variable called colorMode using the useMemo hook. useMemo is used to memoize the value of colorMode, meaning it will only recalculate when its dependencies change. In this case, the colorMode object contains the toggleColorMode function which toggles between 'light' and 'dark' modes.
// The hook also creates a theme object using the createTheme function from Material-UI, based on the current mode. This theme object holds all the styles and settings for the UI components.
// Finally, the hook returns an array containing the theme object and the colorMode object, so that any component using this hook can access both the current theme and the function to toggle between light and dark modes.