import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Header from "./components/header";
import IntroLogin from "./routes/intro/intro_login";
import Calendar from "./routes/home/calendar";
import LivingRule from "./routes/home/living_rule";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroLogin />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Calendar />}></Route>
        </Routes>
        <Routes>
          <Route path="/home/living_rule" element={<LivingRule />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
