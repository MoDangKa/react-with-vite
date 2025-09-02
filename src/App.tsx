import TanStackRouter from "@/routes/TanStackRouter";
import store from "@/stores/store";
import React from "react";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TanStackRouter />
    </Provider>
  );
};

export default App;
