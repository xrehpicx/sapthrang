import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { DefaultContextProvider } from "./contexts/DefaultContext";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";

const container = document.getElementById("root");
container &&
  createRoot(container).render(
    <SnackbarProvider>
      <DefaultContextProvider>
        <App />
      </DefaultContextProvider>
    </SnackbarProvider>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
