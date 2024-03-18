import EventCalendar from "./components/EventCalendar"
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';


dayjs.extend(utc);

dayjs.locale('ru');
dayjs.extend(weekday);

function App() {
  return (
    <>
      <EventCalendar />
    </>
  )
}

export default App
