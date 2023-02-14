import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import CardDetailsPage from "./components/domains/pages/CardDetails.page";

const root = createRoot(document.getElementById("root"));

storyblokInit({
  accessToken: "Q7BU90ToNkaevy4h0HpEbwtt",
  use: [apiPlugin],
  components: {
    card: CardDetailsPage,
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
