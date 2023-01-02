import Header from "./components/Header";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Socials from "./components/Socials";
import GitHubCalendar from "react-github-calendar";
import "./App.css";

function App() {
  const selectLastHalfYear = (contributions) => {
    // return last half of contributions
    const lastHalf = contributions.slice(contributions.length / 2);
    return lastHalf;
  };

  return (
    <div className='App'>
      <Header />
      <h2 className="App--github-title">GitHub</h2>
      <GitHubCalendar
        username='robsassack'
        hideColorLegend='true'
        hideMonthLabels='true'
        transformData={selectLastHalfYear}
        transformTotalCount={false}
        className='calendar'
      />
      <Projects />
      <Content />
      <Socials />
    </div>
  );
}

export default App;
