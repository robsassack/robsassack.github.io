import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Calendar />
      <Projects />
      <Content />
      <Socials />
    </div>
  );
}

export default App;
