import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import CardDetailsPage from "./components/domains/pages/CardDetails.page";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const root = createRoot(document.getElementById("root"));

storyblokInit({
  accessToken: "Q7BU90ToNkaevy4h0HpEbwtt",
  use: [apiPlugin],
  components: {
    card: CardDetailsPage,
  },
});

Sentry.init({
  dsn: "https://6ff17ab9290746df92b9acee7b22fa90@o4504854021865472.ingest.sentry.io/4504854030057472",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
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
