// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// const numbers = []; // создаем пустой массив
// for (let i = 1; i <= 31; i++) { // проходим по дням в текущем месяце
//   if (i % moment().days() === 0 && moment().days() !== 1) { // если текущий день недели - воскресенье, то добавляем его к массиву
//     numbers.push(i); // добавляем день в массив
//   }
// }

// const nowDay = {
//   day: moment().format('dddd'),
//   month: moment().format('MMMM'),
//   year: moment().format('YYYY'),
//   dayNumber: moment().format('D'),
// }
// const now = new Date(2017, 2, 8);

// const createDays = () => {
//   let firstDayNumber = moment().startOf('month').day();//первый день месяца
//   let lastDayNumber = moment().endOf('month').day();//последний день месяца
//   // let today = moment().days()
//   let beforeMonthNumber = moment().month() - 1;
//   let daysInMonth = moment().daysInMonth(beforeMonthNumber);//дней в предыдущем месяце
//   let dayBeforeInWeek = daysInMonth - (daysInMonth - firstDayNumber)//дни начался недели до 1 числа
//   let monthArr = []
// let latsDays = [] ;

//   if (firstDayNumber !== 1) {
//     for (let i = 1; i < firstDayNumber; i++) {
//       monthArr.push(i)
//     }
//   }
//   console.info(monthArr)
 
//   if (lastDayNumber !== 7) {
//     for (let i = lastDayNumber +1; i <= 7; i++) {
//       latsDays.push(i)
//     }
//   }
//   console.info( latsDays)
//   // return {

//   // }
// }
