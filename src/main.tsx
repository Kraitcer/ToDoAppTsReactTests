import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "./components/themes/themes";

// import icons from "react-icons/md";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
    //  theme={theme}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
