import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import "styles/intro/intro.css";
import { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
