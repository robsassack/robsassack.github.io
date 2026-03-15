import Header from "./components/Header";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Socials from "./components/Socials";
import "./App.css";

function App() {
  return (
    <main className='App'>
      <Header />
      <Content />
      <Projects />
      <Socials />
    </main>
  );
}

export default App;
