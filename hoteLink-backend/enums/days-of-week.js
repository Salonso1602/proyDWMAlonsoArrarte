const DaysOfWeek = Object.freeze({
  Monday : 'Monday',
  Tuesday : 'Tuesday',
  Wednesday : 'Wednesday',
  Thursday : 'Thursday',
  Friday : 'Friday',
  Saturday : 'Saturday',
  Sunday : 'Sunday'
});

module.exports = {
  DaysOfWeek,
  getDayNumber : (day) => {
    switch (day) {
      case DaysOfWeek.Monday:
        return 1;
      case DaysOfWeek.Tuesday:
        return 2;
      case DaysOfWeek.Wednesday:
        return 3;
      case DaysOfWeek.Thursday:
        return 4;
      case DaysOfWeek.Friday:
        return 5;
      case DaysOfWeek.Saturday:
        return 6;
      case DaysOfWeek.Sunday:
        return 0;
      default:
        throw new Error('Invalid day');
    }
  }
};