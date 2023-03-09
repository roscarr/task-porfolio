import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskContestProvider } from "./context/TaskContest";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContestProvider>
      <App />
    </TaskContestProvider>
  </React.StrictMode>
);
