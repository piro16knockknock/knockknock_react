import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/intro/intro.css";

import { Suspense } from "react";
import Routes from "./routes";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={null}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
