/** Defined to match JS native Date.getDay() returned values. */
export enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const dayNames = {
  [DaysOfWeek.Monday]: 'Lunes',
  [DaysOfWeek.Tuesday]: 'Martes',
  [DaysOfWeek.Wednesday]: 'Miércoles',
  [DaysOfWeek.Thursday]: 'Jueves',
  [DaysOfWeek.Friday]: 'Viernes',
  [DaysOfWeek.Saturday]: 'Sábado',
  [DaysOfWeek.Sunday]: 'Domingo'
}

export const getDayName = (day: DaysOfWeek): string => {
  return dayNames[day];
}

export const NumberOfDays = Object.keys(dayNames).length;