import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router.tsx";
import { ApiProvider } from "./redux/api-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider>
      <Router />
    </ApiProvider>
  </StrictMode>,
);
