import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Header from "./components/header";
import IntroLogin from "./routes/home/intro_login";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroLogin />
    </div>
  );
}

export default App;
