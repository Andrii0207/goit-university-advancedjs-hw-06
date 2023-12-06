/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
}

enum Weekend {
  Saturday,
  Sunday,
}

type Week = Weekday | Weekend;

function isWeekend(day: Week): boolean {
  return typeof day === typeof Weekend;
}
