import RoutesFromSite from "./routes/Routes";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark, GlobalStyles } from "./styles/GlobalStyles";
import { Switch } from "@mui/material";

function App() {
    if (!localStorage.theme) {
        localStorage.setItem("theme", "light");
    }

    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.theme;
        localTheme && setTheme(localTheme);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme === "light" ? dark : light}>
                <Switch
                    onClick={() => themeToggler()}
                    className="theme__switch"
                >
                </Switch>
                <GlobalStyles />
                <RoutesFromSite />
            </ThemeProvider>
        </>
    );
}

export default App;
