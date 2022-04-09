import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Header from "./components/header";
import IntroLogin from "./routes/intro/intro_login";
import IntroNotLogin from "./routes/intro/intro_not_login";
import Calendar from "./routes/home/calendar";
import LivingRule from "./routes/home/living_rule";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login/login";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroNotLogin />}></Route>
          {/* 로그인 안했으면 IntroNotLogin
          했으면 IntroLogin */}
        </Routes>
        <Routes>
          <Route path="/home" element={<Calendar />}></Route>
        </Routes>
        <Routes>
          <Route path="/home/living_rule" element={<LivingRule />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
