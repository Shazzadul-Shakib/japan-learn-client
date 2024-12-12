import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router.tsx";
import { ApiProvider } from "./redux/api-provider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </ApiProvider>
  </StrictMode>,
);
