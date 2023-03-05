import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function Calendar() {
  const selectLastHalfYear = (contributions) => {
    // return last half of contributions
    const lastHalf = contributions.slice(contributions.length / 2);
    return lastHalf;
  };

  return (
    <div className='calendar'>
      <h2 className='App--github-title'>GitHub</h2>
      <GitHubCalendar
        username='robsassack'
        hideColorLegend='true'
        hideMonthLabels='true'
        transformData={selectLastHalfYear}
        transformTotalCount={false}
        className='calendar'
      >
        <ReactTooltip html />
      </GitHubCalendar>
    </div>
  );
}

export default Calendar;
