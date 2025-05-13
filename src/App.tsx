import ThemeProvider from "@/contexts/ThemeContext";
import AppRouter from "@/routes/AppRouter";
import React from "react";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
