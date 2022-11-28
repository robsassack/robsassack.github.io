import Header from "./components/Header";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Socials from "./components/Socials";
import GitHubCalendar from "react-github-calendar";
import "./App.css";

function App() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className='App'>
      <GitHubCalendar
        username='robsassack'
        hideColorLegend='true'
        hideMonthLabels='true'
        transformData={selectLastHalfYear}
        className='calendar'
      />
      <Header />
      <Projects />
      <Content />
      <Socials />
    </div>
  );
}

export default App;
