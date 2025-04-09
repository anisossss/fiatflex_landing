import React from "react";
import { useAnalytics } from "./hooks/useAnalytics";
import Index from "./pages";

function App() {
  useAnalytics();
  return <Index />;
}

export default App;
