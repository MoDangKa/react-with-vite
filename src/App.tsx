import AppRouter from "@/routes/AppRouter";
import store from "@/stores/store";
import React from "react";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
