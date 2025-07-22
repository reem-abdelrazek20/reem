import "./styles.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/projecta";
import Contact from "./components/contact";
import MySkills from "./components/myskils";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <MySkills />
      <Project />
      <Contact />
    </div>
  );
}
