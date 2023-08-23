import "./App.css";
import moment, { now } from "moment";
import "moment/locale/ru";

let nowData = {
  day: moment().format("dddd"),
  month: moment().format("MMMM"),
  year: moment().format("YYYY"),
  dayNumber: moment().format("D"),
};

const Calendar = ({ now }) => {
  const startOfDay = moment().startOf("month").startOf("week");
  const endOfDay = moment().endOf("month").endOf("week");
  let today = moment().format("DD");

  let celeder = [];
  const day = startOfDay.clone();
  while (!day.isAfter(endOfDay)) {
    celeder.push(day.clone());
    day.add(1, "day");
  }

  const daysArr = celeder.map((day) => {
    return day;
  });

  let result = [];
  for (let i = 0; i < daysArr.length; i += 7) {
    result.push(daysArr.slice(i, i + 7));
  }

  const firstWeek = result[0].map((day) => {
    let dayNumber = day.format("DD");
    let firstDay = moment().startOf("month");
    if (dayNumber == today) {
      return <td className="ui-datepicker-today">{dayNumber}</td>;
    }
    if (moment(day).isBefore(firstDay)) {
      return <td className="ui-datepicker-other-month">{dayNumber}</td>;
    } else {
      return <td>{Number(dayNumber)}</td>;
    }
  });

  const secondWeek = result[1].map((day) => {
    let dayNumber = day.format("DD");
    let firstDay = moment().startOf("month");
    if (dayNumber == today) {
      return <td className="ui-datepicker-today">{dayNumber}</td>;
    }
    return <td>{Number(dayNumber)}</td>;
  });

  const thirdWeekk = result[3].map((day) => {
    let dayNumber = day.format("DD");
    let firstDay = moment().startOf("month");
    if (dayNumber == today) {
      return <td className="ui-datepicker-today">{dayNumber}</td>;
    }
    return <td>{Number(dayNumber)}</td>;
  });

  const fourthWeekk = result[4].map((day) => {
    let dayNumber = day.format("DD");
    let firstDay = moment().endOf("month");
    if (dayNumber == today) {
      return <td className="ui-datepicker-today">{dayNumber}</td>;
    }
    return <td>{Number(dayNumber)}</td>;
  });

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{nowData.day}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {nowData.dayNumber}
          </div>
          <div className="ui-datepicker-material-month">{nowData.month}</div>
          <div className="ui-datepicker-material-year">{nowData.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{nowData.month}</span>&nbsp;
          <span className="ui-datepicker-year">{nowData.year}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>{firstWeek}</tr>
          <tr>{secondWeek}</tr>
          <tr>{thirdWeekk}</tr>
          <tr>{fourthWeekk}</tr>
        </tbody>
      </table>
    </div>
  );
};
function App() {
  return <Calendar date={now} />;
}
export default App;
