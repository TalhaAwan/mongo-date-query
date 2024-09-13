import moment from "moment";

export const thisSecond = function () {
  return {
    $gt: moment().utc().subtract(1, 'second').toDate(),
    $lte: moment().utc().toDate()
  };
};

export const nextSecond = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'second').toDate()
  };
};

export const nextSeconds = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'second').toDate()
  };
};

export const lastSecond = function () {
  return {
    $gte: moment().utc().subtract(1, 'second').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastSeconds = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'second').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const thisMinute = function () {
  return {
    $gte: moment().utc().startOf('minute').toDate(),
    $lte: moment().utc().endOf('minute').toDate()
  };
};

export const previousMinute = function () {
  return {
    $gte: moment().utc().subtract(1, 'minute').startOf('minute').toDate(),
    $lt: moment().utc().startOf('minute').toDate()
  };
};

export const previousMinutes = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'minute').startOf('minute').toDate(),
    $lt: moment().utc().startOf('minute').toDate()
  };
};

export const lastMinute = function () {
  return {
    $gte: moment().utc().subtract(1, 'minute').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastMinutes = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'minute').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const comingMinute = function () {
  return {
    $gt: moment().utc().endOf('minute').toDate(),
    $lte: moment().utc().add(1, 'minute').endOf('minute').toDate()
  };
};

export const comingMinutes = function (num = 1) {
  return {
    $gt: moment().utc().endOf('minute').toDate(),
    $lte: moment().utc().add(num, 'minute').endOf('minute').toDate()
  };
};

export const nextMinute = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'minute').toDate()
  };
};

export const nextMinutes = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'minute').toDate()
  };
};

export const thisHour = function () {
  return {
    $gte: moment().utc().startOf('hour').toDate(),
    $lte: moment().utc().endOf('hour').toDate()
  };
};

export const previousHour = function () {
  return {
    $gte: moment().utc().subtract(1, 'hour').startOf('hour').toDate(),
    $lt: moment().utc().startOf('hour').toDate()
  };
};

export const previousHours = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'hour').startOf('hour').toDate(),
    $lt: moment().utc().startOf('hour').toDate()
  };
};

export const lastHour = function () {
  return {
    $gte: moment().utc().subtract(1, 'hour').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastHours = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'hour').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const comingHour = function () {
  return {
    $gt: moment().utc().endOf('hour').toDate(),
    $lte: moment().utc().add(1, 'hour').endOf('hour').toDate()
  };
};

export const comingHours = function (num = 1) {
  return {
    $gt: moment().utc().endOf('hour').toDate(),
    $lte: moment().utc().add(num, 'hour').endOf('hour').toDate()
  };
};

export const nextHour = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'hour').toDate()
  };
};

export const nextHours = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'hour').toDate()
  };
};

export const today = function () {
  return {
    $gte: moment().utc().startOf('day').toDate(),
    $lte: moment().utc().endOf('day').toDate()
  };
};

export const yesterday = function () {
  return {
    $gte: moment().subtract(1, 'day').utc().startOf('day').toDate(),
    $lt: moment().utc().startOf('day').toDate()
  };
};

export const previousDays = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'day').startOf('day').toDate(),
    $lt: moment().utc().startOf('day').toDate()
  };
};

export const lastDay = function () {
  return {
    $gte: moment().utc().subtract(1, 'day').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastDays = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'day').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const tomorrow = function () {
  return {
    $gt: moment().utc().endOf('day').toDate(),
    $lte: moment().utc().add(1, 'day').endOf('day').toDate()
  };
};

export const comingDays = function (num = 1) {
  return {
    $gt: moment().utc().endOf('day').toDate(),
    $lte: moment().utc().add(num, 'day').endOf('day').toDate()
  };
};

export const nextDay = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'day').toDate()
  };
};

export const nextDays = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'day').toDate()
  };
};

export const thisWeek = function () {
  return {
    $gte: moment().utc().startOf('week').toDate(),
    $lte: moment().utc().endOf('week').toDate()
  };
};

export const comingWeek = function () {
  return {
    $gt: moment().utc().endOf('week').toDate(),
    $lte: moment().utc().add(1, 'week').endOf('week').toDate()
  };
};

export const comingWeeks = function (num = 1) {
  return {
    $gt: moment().utc().endOf('week').toDate(),
    $lte: moment().utc().add(num, 'week').endOf('week').toDate()
  };
};

export const nextWeek = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'week').toDate()
  };
};

export const nextWeeks = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'week').toDate()
  };
};

export const previousWeek = function () {
  return {
    $gte: moment().utc().subtract(1, 'week').startOf('week').toDate(),
    $lt: moment().utc().startOf('week').toDate()
  };
};

export const previousWeeks = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'week').startOf('week').toDate(),
    $lt: moment().utc().startOf('week').toDate()
  };
};

export const lastWeek = function () {
  return {
    $gte: moment().utc().subtract(1, 'week').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastWeeks = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'week').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const thisMonth = function () {
  return {
    $gte: moment().utc().startOf('month').toDate(),
    $lte: moment().utc().endOf('month').toDate()
  };
};

export const comingMonth = function () {
  return {
    $gt: moment().utc().endOf('month').toDate(),
    $lte: moment().utc().add(1, 'month').endOf('month').toDate()
  };
};

export const comingMonths = function (num = 1) {
  return {
    $gt: moment().utc().endOf('month').toDate(),
    $lte: moment().utc().add(num, 'month').endOf('month').toDate()
  };
};

export const nextMonth = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'month').toDate()
  };
};

export const nextMonths = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'month').toDate()
  };
};

export const previousMonth = function () {
  return {
    $gte: moment().utc().subtract(1, 'month').startOf('month').toDate(),
    $lt: moment().utc().startOf('month').toDate()
  };
};

export const previousMonths = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'month').startOf('month').toDate(),
    $lt: moment().utc().startOf('month').toDate()
  };
};

export const lastMonth = function () {
  return {
    $gte: moment().utc().subtract(1, 'month').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastMonths = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'month').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const thisYear = function () {
  return {
    $gte: moment().utc().startOf('year').toDate(),
    $lte: moment().utc().endOf('year').toDate()
  };
};

export const comingYear = function () {
  return {
    $gt: moment().utc().endOf('year').toDate(),
    $lte: moment().utc().add(1, 'year').endOf('year').toDate()
  };
};

export const comingYears = function (num = 1) {
  return {
    $gt: moment().utc().endOf('year').toDate(),
    $lte: moment().utc().add(num, 'year').endOf('year').toDate()
  };
};

export const nextYear = function () {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(1, 'year').toDate()
  };
};

export const nextYears = function (num = 1) {
  return {
    $gt: moment().utc().toDate(),
    $lte: moment().utc().add(num, 'year').toDate()
  };
};

export const previousYear = function () {
  return {
    $gte: moment().utc().subtract(1, 'year').startOf('year').toDate(),
    $lt: moment().utc().startOf('year').toDate()
  };
};

export const previousYears = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'year').startOf('year').toDate(),
    $lt: moment().utc().startOf('year').toDate()
  };
};

export const lastYear = function () {
  return {
    $gte: moment().utc().subtract(1, 'year').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const lastYears = function (num = 1) {
  return {
    $gte: moment().utc().subtract(num, 'year').toDate(),
    $lt: moment().utc().toDate()
  };
};

export const beforeNow = function () {
  return {
    $lt: moment().utc().toDate()
  };
};

export const beforeLastSecond = function () {
  return {
    $lt: moment().utc().subtract(1, 'second').toDate()
  };
};

export const beforeLastSeconds = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'second').toDate()
  };
};

export const beforeThisMinute = function () {
  return {
    $lt: moment().utc().startOf('minute').toDate()
  };
};

export const beforePreviousMinute = function () {
  return {
    $lt: moment().utc().subtract(1, 'minute').startOf('minute').toDate()
  };
};

export const beforePreviousMinutes = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'minute').startOf('minute').toDate()
  };
};

export const beforeLastMinute = function () {
  return {
    $lt: moment().utc().subtract(1, 'minute').toDate()
  };
};

export const beforeLastMinutes = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'minute').toDate()
  };
};

export const beforeThisHour = function () {
  return {
    $lt: moment().utc().startOf('hour').toDate()
  };
};

export const beforePreviousHour = function () {
  return {
    $lt: moment().utc().subtract(1, 'hour').startOf('hour').toDate()
  };
};

export const beforePreviousHours = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'hour').startOf('hour').toDate()
  };
};

export const beforeLastHour = function () {
  return {
    $lt: moment().utc().subtract(1, 'hour').toDate()
  };
};

export const beforeLastHours = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'hour').toDate()
  };
};

export const beforeToday = function () {
  return {
    $lt: moment().utc().startOf('day').toDate()
  };
};

export const beforeYesterday = function () {
  return {
    $lt: moment().utc().subtract(1, 'day').startOf('day').toDate()
  };
};

export const beforePreviousDays = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'day').startOf('day').toDate()
  };
};

export const beforeLastDay = function () {
  return {
    $lt: moment().utc().subtract(1, 'day').toDate()
  };
};

export const beforeLastDays = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'day').toDate()
  };
};

export const beforeThisWeek = function () {
  return {
    $lt: moment().utc().startOf('week').toDate()
  };
};

export const beforePreviousWeek = function () {
  return {
    $lt: moment().utc().subtract(1, 'week').startOf('week').toDate()
  };
};

export const beforePreviousWeeks = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'week').startOf('week').toDate()
  };
};

export const beforeLastWeek = function () {
  return {
    $lt: moment().utc().subtract(1, 'week').toDate()
  };
};

export const beforeLastWeeks = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'week').toDate()
  };
};

export const beforeThisMonth = function () {
  return {
    $lt: moment().utc().startOf('month').toDate()
  };
};

export const beforePreviousMonth = function () {
  return {
    $lt: moment().utc().subtract(1, 'month').startOf('month').toDate()
  };
};

export const beforePreviousMonths = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'month').startOf('month').toDate()
  };
};

export const beforeLastMonth = function () {
  return {
    $lt: moment().utc().subtract(1, 'month').toDate()
  };
};

export const beforeLastMonths = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'month').toDate()
  };
};

export const beforeThisYear = function () {
  return {
    $lt: moment().utc().startOf('year').toDate()
  };
};

export const beforePreviousYear = function () {
  return {
    $lt: moment().utc().subtract(1, 'year').startOf('year').toDate()
  };
};

export const beforePreviousYears = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'year').startOf('year').toDate()
  };
};

export const beforeLastYear = function () {
  return {
    $lt: moment().utc().subtract(1, 'year').toDate()
  };
};

export const beforeLastYears = function (num = 1) {
  return {
    $lt: moment().utc().subtract(num, 'year').toDate()
  };
};

export const afterNow = function () {
  return {
    $gt: moment().utc().toDate()
  };
};

export const afterNextSecond = function () {
  return {
    $gt: moment().utc().add(1, 'second').toDate()
  };
};

export const afterNextSeconds = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'second').toDate()
  };
};

export const afterThisMinute = function () {
  return {
    $gt: moment().utc().endOf('minute').toDate()
  };
};

export const afterComingMinute = function () {
  return {
    $gt: moment().utc().add(1, 'minute').endOf('minute').toDate()
  };
};

export const afterComingMinutes = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'minute').endOf('minute').toDate()
  };
};

export const afterNextMinute = function () {
  return {
    $gt: moment().utc().add(1, 'minute').toDate()
  };
};

export const afterNextMinutes = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'minute').toDate()
  };
};

export const afterThisHour = function () {
  return {
    $gt: moment().utc().endOf('hour').toDate()
  };
};

export const afterComingHour = function () {
  return {
    $gt: moment().utc().add(1, 'hour').endOf('hour').toDate()
  };
};

export const afterComingHours = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'hour').endOf('hour').toDate()
  };
};

export const afterNextHour = function () {
  return {
    $gt: moment().utc().add(1, 'hour').toDate()
  };
};

export const afterNextHours = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'hour').toDate()
  };
};

export const afterToday = function () {
  return {
    $gt: moment().utc().endOf('day').toDate()
  };
};

export const afterTomorrow = function () {
  return {
    $gt: moment().utc().add(1, 'day').endOf('day').toDate()
  };
};

export const afterComingDays = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'day').endOf('day').toDate()
  };
};

export const afterNextDay = function () {
  return {
    $gt: moment().utc().add(1, 'day').toDate()
  };
};

export const afterNextDays = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'day').toDate()
  };
};

export const afterThisWeek = function () {
  return {
    $gt: moment().utc().endOf('week').toDate()
  };
};

export const afterComingWeek = function () {
  return {
    $gt: moment().utc().add(1, 'week').endOf('week').toDate()
  };
};

export const afterComingWeeks = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'week').endOf('week').toDate()
  };
};

export const afterNextWeek = function () {
  return {
    $gt: moment().utc().add(1, 'week').toDate()
  };
};

export const afterNextWeeks = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'week').toDate()
  };
};

export const afterThisMonth = function () {
  return {
    $gt: moment().utc().endOf('month').toDate()
  };
};

export const afterComingMonth = function () {
  return {
    $gt: moment().utc().add(1, 'month').endOf('month').toDate()
  };
};

export const afterComingMonths = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'month').endOf('month').toDate()
  };
};

export const afterNextMonth = function () {
  return {
    $gt: moment().utc().add(1, 'month').toDate()
  };
};

export const afterNextMonths = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'month').toDate()
  };
};

export const afterThisYear = function () {
  return {
    $gt: moment().utc().endOf('year').toDate()
  };
};

export const afterComingYear = function () {
  return {
    $gt: moment().utc().add(1, 'year').endOf('year').toDate()
  };
};

export const afterComingYears = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'year').endOf('year').toDate()
  };
};

export const afterNextYear = function () {
  return {
    $gt: moment().utc().add(1, 'year').toDate()
  };
};

export const afterNextYears = function (num = 1) {
  return {
    $gt: moment().utc().add(num, 'year').toDate()
  };
};

export const lastToNextSecond = function () {
  return {
    $gte: moment().utc().subtract(1, 'second').toDate(),
    $lte: moment().utc().add(1, 'second').toDate()
  };
};

export const lastToNextSeconds = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'second').toDate(),
    $lte: moment().utc().add(next, 'second').toDate()
  };
};

export const lastToNextMinute = function () {
  return {
    $gte: moment().utc().subtract(1, 'minute').toDate(),
    $lte: moment().utc().add(1, 'minute').toDate()
  };
};

export const lastToNextMinutes = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'minute').toDate(),
    $lte: moment().utc().add(next, 'minute').toDate()
  };
};

export const lastToNextHour = function () {
  return {
    $gte: moment().utc().subtract(1, 'hour').toDate(),
    $lte: moment().utc().add(1, 'hour').toDate()
  };
};

export const lastToNextHours = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'hour').toDate(),
    $lte: moment().utc().add(next, 'hour').toDate()
  };
};

export const lastToNextDay = function () {
  return {
    $gte: moment().utc().subtract(1, 'day').toDate(),
    $lte: moment().utc().add(1, 'day').toDate()
  };
};

export const lastToNextDays = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'day').toDate(),
    $lte: moment().utc().add(next, 'day').toDate()
  };
};

export const lastToNextWeek = function () {
  return {
    $gte: moment().utc().subtract(1, 'week').toDate(),
    $lte: moment().utc().add(1, 'week').toDate()
  };
};

export const lastToNextWeeks = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'week').toDate(),
    $lte: moment().utc().add(next, 'week').toDate()
  };
};

export const lastToNextMonth = function () {
  return {
    $gte: moment().utc().subtract(1, 'month').toDate(),
    $lte: moment().utc().add(1, 'month').toDate()
  };
};

export const lastToNextMonths = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'month').toDate(),
    $lte: moment().utc().add(next, 'month').toDate()
  };
};

export const lastToNextYear = function () {
  return {
    $gte: moment().utc().subtract(1, 'year').toDate(),
    $lte: moment().utc().add(1, 'year').toDate()
  };
};

export const lastToNextYears = function (last = 1, next = 1) {
  return {
    $gte: moment().utc().subtract(last, 'year').toDate(),
    $lte: moment().utc().add(next, 'year').toDate()
  };
};

export default {
  thisSecond,
  nextSecond,
  nextSeconds,
  lastSecond,
  lastSeconds,
  thisMinute,
  previousMinute,
  previousMinutes,
  lastMinute,
  lastMinutes,
  comingMinute,
  comingMinutes,
  nextMinute,
  nextMinutes,
  thisHour,
  previousHour,
  previousHours,
  lastHour,
  lastHours,
  comingHour,
  comingHours,
  nextHour,
  nextHours,
  today,
  yesterday,
  previousDays,
  lastDay,
  lastDays,
  tomorrow,
  comingDays,
  nextDay,
  nextDays,
  thisWeek,
  comingWeek,
  comingWeeks,
  nextWeek,
  nextWeeks,
  previousWeek,
  previousWeeks,
  lastWeek,
  lastWeeks,
  thisMonth,
  comingMonth,
  comingMonths,
  nextMonth,
  nextMonths,
  previousMonth,
  previousMonths,
  lastMonth,
  lastMonths,
  thisYear,
  comingYear,
  comingYears,
  nextYear,
  nextYears,
  previousYear,
  previousYears,
  lastYear,
  lastYears,
  beforeNow,
  beforeLastSecond,
  beforeLastSeconds,
  beforeThisMinute,
  beforePreviousMinute,
  beforePreviousMinutes,
  beforeLastMinute,
  beforeLastMinutes,
  beforeThisHour,
  beforePreviousHour,
  beforePreviousHours,
  beforeLastHour,
  beforeLastHours,
  beforeToday,
  beforeYesterday,
  beforePreviousDays,
  beforeLastDay,
  beforeLastDays,
  beforeThisWeek,
  beforePreviousWeek,
  beforePreviousWeeks,
  beforeLastWeek,
  beforeLastWeeks,
  beforeThisMonth,
  beforePreviousMonth,
  beforePreviousMonths,
  beforeLastMonth,
  beforeLastMonths,
  beforeThisYear,
  beforePreviousYear,
  beforePreviousYears,
  beforeLastYear,
  beforeLastYears,
  afterNow,
  afterNextSecond,
  afterNextSeconds,
  afterThisMinute,
  afterComingMinute,
  afterComingMinutes,
  afterNextMinute,
  afterNextMinutes,
  afterThisHour,
  afterComingHour,
  afterComingHours,
  afterNextHour,
  afterNextHours,
  afterToday,
  afterTomorrow,
  afterComingDays,
  afterNextDay,
  afterNextDays,
  afterThisWeek,
  afterComingWeek,
  afterComingWeeks,
  afterNextWeek,
  afterNextWeeks,
  afterThisMonth,
  afterComingMonth,
  afterComingMonths,
  afterNextMonth,
  afterNextMonths,
  afterThisYear,
  afterComingYear,
  afterComingYears,
  afterNextYear,
  afterNextYears,
  lastToNextSecond,
  lastToNextSeconds,
  lastToNextMinute,
  lastToNextMinutes,
  lastToNextHour,
  lastToNextHours,
  lastToNextDay,
  lastToNextDays,
  lastToNextWeek,
  lastToNextWeeks,
  lastToNextMonth,
  lastToNextMonths,
  lastToNextYear,
  lastToNextYears
}
