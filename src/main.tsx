import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./Theme.ts";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={Theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
