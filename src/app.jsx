import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import "styles/intro/intro.css";
import { Suspense } from "react";
import Routes from "./routes";
import Header from "components/layout/header";
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
