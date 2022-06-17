import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import "styles/intro/intro.css";
import { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
