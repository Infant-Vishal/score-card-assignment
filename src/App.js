import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/store";
import MainRouter from "./routes";

const { store, persistor } = configureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
