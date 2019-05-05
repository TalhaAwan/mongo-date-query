const moment = require('moment');

const thisSecond = function () {
	return {
		$gt: moment().utc().subtract(1, 'second').toDate(),
		$lte: moment().utc().toDate()
	};
};

const nextSecond = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'second').toDate()
	};
};

const nextSeconds = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'second').toDate()
	};
};

const lastSecond = function () {
	return {
		$gte: moment().utc().subtract(1, 'second').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastSeconds = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'second').toDate(),
		$lt: moment().utc().toDate()
	};
};

const thisMinute = function () {
	return {
		$gte: moment().utc().startOf('minute').toDate(),
		$lte: moment().utc().endOf('minute').toDate()
	};
};

const previousMinute = function () {
	return {
		$gte: moment().utc().subtract(1, 'minute').startOf('minute').toDate(),
		$lt: moment().utc().startOf('minute').toDate()
	};
};

const previousMinutes = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'minute').startOf('minute').toDate(),
		$lt: moment().utc().startOf('minute').toDate()
	};
};

const lastMinute = function () {
	return {
		$gte: moment().utc().subtract(1, 'minute').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastMinutes = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'minute').toDate(),
		$lt: moment().utc().toDate()
	};
};

const comingMinute = function () {
	return {
		$gt: moment().utc().endOf('minute').toDate(),
		$lte: moment().utc().add(1, 'minute').endOf('minute').toDate()
	};
};

const comingMinutes = function (num = 1) {
	return {
		$gt: moment().utc().endOf('minute').toDate(),
		$lte: moment().utc().add(num, 'minute').endOf('minute').toDate()
	};
};

const nextMinute = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'minute').toDate()
	};
};

const nextMinutes = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'minute').toDate()
	};
};

const thisHour = function () {
	return {
		$gte: moment().utc().startOf('hour').toDate(),
		$lte: moment().utc().endOf('hour').toDate()
	};
};

const previousHour = function () {
	return {
		$gte: moment().utc().subtract(1, 'hour').startOf('hour').toDate(),
		$lt: moment().utc().startOf('hour').toDate()
	};
};

const previousHours = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'hour').startOf('hour').toDate(),
		$lt: moment().utc().startOf('hour').toDate()
	};
};

const lastHour = function () {
	return {
		$gte: moment().utc().subtract(1, 'hour').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastHours = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'hour').toDate(),
		$lt: moment().utc().toDate()
	};
};

const comingHour = function () {
	return {
		$gt: moment().utc().endOf('hour').toDate(),
		$lte: moment().utc().add(1, 'hour').endOf('hour').toDate()
	};
};

const comingHours = function (num = 1) {
	return {
		$gt: moment().utc().endOf('hour').toDate(),
		$lte: moment().utc().add(num, 'hour').endOf('hour').toDate()
	};
};

const nextHour = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'hour').toDate()
	};
};

const nextHours = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'hour').toDate()
	};
};

const today = function () {
	return {
		$gte: moment().utc().startOf('day').toDate(),
		$lte: moment().utc().endOf('day').toDate()
	};
};

const yesterday = function () {
	return {
		$gte: moment().subtract(1, 'day').utc().startOf('day').toDate(),
		$lt: moment().utc().startOf('day').toDate()
	};
};

const previousDays = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'day').startOf('day').toDate(),
		$lt: moment().utc().startOf('day').toDate()
	};
};

const lastDay = function () {
	return {
		$gte: moment().utc().subtract(1, 'day').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastDays = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'day').toDate(),
		$lt: moment().utc().toDate()
	};
};

const tomorrow = function () {
	return {
		$gt: moment().utc().endOf('day').toDate(),
		$lte: moment().utc().add(1, 'day').endOf('day').toDate()
	};
};

const comingDays = function (num = 1) {
	return {
		$gt: moment().utc().endOf('day').toDate(),
		$lte: moment().utc().add(num, 'day').endOf('day').toDate()
	};
};

const nextDay = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'day').toDate()
	};
};

const nextDays = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'day').toDate()
	};
};

const thisWeek = function () {
	return {
		$gte: moment().utc().startOf('week').toDate(),
		$lte: moment().utc().endOf('week').toDate()
	};
};

const comingWeek = function () {
	return {
		$gt: moment().utc().endOf('week').toDate(),
		$lte: moment().utc().add(1, 'week').endOf('week').toDate()
	};
};

const comingWeeks = function (num = 1) {
	return {
		$gt: moment().utc().endOf('week').toDate(),
		$lte: moment().utc().add(num, 'week').endOf('week').toDate()
	};
};

const nextWeek = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'week').toDate()
	};
};

const nextWeeks = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'week').toDate()
	};
};

const previousWeek = function () {
	return {
		$gte: moment().utc().subtract(1, 'week').startOf('week').toDate(),
		$lt: moment().utc().startOf('week').toDate()
	};
};

const previousWeeks = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'week').startOf('week').toDate(),
		$lt: moment().utc().startOf('week').toDate()
	};
};

const lastWeek = function () {
	return {
		$gte: moment().utc().subtract(1, 'week').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastWeeks = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'week').toDate(),
		$lt: moment().utc().toDate()
	};
};

const thisMonth = function () {
	return {
		$gte: moment().utc().startOf('month').toDate(),
		$lte: moment().utc().endOf('month').toDate()
	};
};

const comingMonth = function () {
	return {
		$gt: moment().utc().endOf('month').toDate(),
		$lte: moment().utc().add(1, 'month').endOf('month').toDate()
	};
};

const comingMonths = function (num = 1) {
	return {
		$gt: moment().utc().endOf('month').toDate(),
		$lte: moment().utc().add(num, 'month').endOf('month').toDate()
	};
};

const nextMonth = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'month').toDate()
	};
};

const nextMonths = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'month').toDate()
	};
};

const previousMonth = function () {
	return {
		$gte: moment().utc().subtract(1, 'month').startOf('month').toDate(),
		$lt: moment().utc().startOf('month').toDate()
	};
};

const previousMonths = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'month').startOf('month').toDate(),
		$lt: moment().utc().startOf('month').toDate()
	};
};

const lastMonth = function () {
	return {
		$gte: moment().utc().subtract(1, 'month').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastMonths = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'month').toDate(),
		$lt: moment().utc().toDate()
	};
};

const thisYear = function () {
	return {
		$gte: moment().utc().startOf('year').toDate(),
		$lte: moment().utc().endOf('year').toDate()
	};
};

const comingYear = function () {
	return {
		$gt: moment().utc().endOf('year').toDate(),
		$lte: moment().utc().add(1, 'year').endOf('year').toDate()
	};
};

const comingYears = function (num = 1) {
	return {
		$gt: moment().utc().endOf('year').toDate(),
		$lte: moment().utc().add(num, 'year').endOf('year').toDate()
	};
};

const nextYear = function () {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(1, 'year').toDate()
	};
};

const nextYears = function (num = 1) {
	return {
		$gt: moment().utc().toDate(),
		$lte: moment().utc().add(num, 'year').toDate()
	};
};

const previousYear = function () {
	return {
		$gte: moment().utc().subtract(1, 'year').startOf('year').toDate(),
		$lt: moment().utc().startOf('year').toDate()
	};
};

const previousYears = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'year').startOf('year').toDate(),
		$lt: moment().utc().startOf('year').toDate()
	};
};

const lastYear = function () {
	return {
		$gte: moment().utc().subtract(1, 'year').toDate(),
		$lt: moment().utc().toDate()
	};
};

const lastYears = function (num = 1) {
	return {
		$gte: moment().utc().subtract(num, 'year').toDate(),
		$lt: moment().utc().toDate()
	};
};

const beforeNow = function () {
	return {
		$lt: moment().utc().toDate()
	};
};

const beforeLastSecond = function () {
	return {
		$lt: moment().utc().subtract(1, 'second').toDate()
	};
};

const beforeLastSeconds = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'second').toDate()
	};
};

const beforeThisMinute = function () {
	return {
		$lt: moment().utc().startOf('minute').toDate()
	};
};

const beforePreviousMinute = function () {
	return {
		$lt: moment().utc().subtract(1, 'minute').startOf('minute').toDate()
	};
};

const beforePreviousMinutes = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'minute').startOf('minute').toDate()
	};
};

const beforeLastMinute = function () {
	return {
		$lt: moment().utc().subtract(1, 'minute').toDate()
	};
};

const beforeLastMinutes = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'minute').toDate()
	};
};

const beforeThisHour = function () {
	return {
		$lt: moment().utc().startOf('hour').toDate()
	};
};

const beforePreviousHour = function () {
	return {
		$lt: moment().utc().subtract(1, 'hour').startOf('hour').toDate()
	};
};

const beforePreviousHours = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'hour').startOf('hour').toDate()
	};
};

const beforeLastHour = function () {
	return {
		$lt: moment().utc().subtract(1, 'hour').toDate()
	};
};

const beforeLastHours = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'hour').toDate()
	};
};

const beforeToday = function () {
	return {
		$lt: moment().utc().startOf('day').toDate()
	};
};

const beforeYesterday = function () {
	return {
		$lt: moment().utc().subtract(1, 'day').startOf('day').toDate()
	};
};

const beforePreviousDays = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'day').startOf('day').toDate()
	};
};

const beforeLastDay = function () {
	return {
		$lt: moment().utc().subtract(1, 'day').toDate()
	};
};

const beforeLastDays = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'day').toDate()
	};
};

const beforeThisWeek = function () {
	return {
		$lt: moment().utc().startOf('week').toDate()
	};
};

const beforePreviousWeek = function () {
	return {
		$lt: moment().utc().subtract(1, 'week').startOf('week').toDate()
	};
};

const beforePreviousWeeks = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'week').startOf('week').toDate()
	};
};

const beforeLastWeek = function () {
	return {
		$lt: moment().utc().subtract(1, 'week').toDate()
	};
};

const beforeLastWeeks = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'week').toDate()
	};
};

const beforeThisMonth = function () {
	return {
		$lt: moment().utc().startOf('month').toDate()
	};
};

const beforePreviousMonth = function () {
	return {
		$lt: moment().utc().subtract(1, 'month').startOf('month').toDate()
	};
};

const beforePreviousMonths = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'month').startOf('month').toDate()
	};
};

const beforeLastMonth = function () {
	return {
		$lt: moment().utc().subtract(1, 'month').toDate()
	};
};

const beforeLastMonths = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'month').toDate()
	};
};

const beforeThisYear = function () {
	return {
		$lt: moment().utc().startOf('year').toDate()
	};
};

const beforePreviousYear = function () {
	return {
		$lt: moment().utc().subtract(1, 'year').startOf('year').toDate()
	};
};

const beforePreviousYears = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'year').startOf('year').toDate()
	};
};

const beforeLastYear = function () {
	return {
		$lt: moment().utc().subtract(1, 'year').toDate()
	};
};

const beforeLastYears = function (num = 1) {
	return {
		$lt: moment().utc().subtract(num, 'year').toDate()
	};
};

const afterNow = function () {
	return {
		$gt: moment().utc().toDate()
	};
};

const afterNextSecond = function () {
	return {
		$gt: moment().utc().add(1, 'second').toDate()
	};
};

const afterNextSeconds = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'second').toDate()
	};
};

const afterThisMinute = function () {
	return {
		$gt: moment().utc().endOf('minute').toDate()
	};
};

const afterComingMinute = function () {
	return {
		$gt: moment().utc().add(1, 'minute').endOf('minute').toDate()
	};
};

const afterComingMinutes = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'minute').endOf('minute').toDate()
	};
};

const afterNextMinute = function () {
	return {
		$gt: moment().utc().add(1, 'minute').toDate()
	};
};

const afterNextMinutes = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'minute').toDate()
	};
};

const afterThisHour = function () {
	return {
		$gt: moment().utc().endOf('hour').toDate()
	};
};

const afterComingHour = function () {
	return {
		$gt: moment().utc().add(1, 'hour').endOf('hour').toDate()
	};
};

const afterComingHours = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'hour').endOf('hour').toDate()
	};
};

const afterNextHour = function () {
	return {
		$gt: moment().utc().add(1, 'hour').toDate()
	};
};

const afterNextHours = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'hour').toDate()
	};
};

const afterToday = function () {
	return {
		$gt: moment().utc().endOf('day').toDate()
	};
};

const afterTomorrow = function () {
	return {
		$gt: moment().utc().add(1, 'day').endOf('day').toDate()
	};
};

const afterComingDays = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'day').endOf('day').toDate()
	};
};

const afterNextDay = function () {
	return {
		$gt: moment().utc().add(1, 'day').toDate()
	};
};

const afterNextDays = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'day').toDate()
	};
};

const afterThisWeek = function () {
	return {
		$gt: moment().utc().endOf('week').toDate()
	};
};

const afterComingWeek = function () {
	return {
		$gt: moment().utc().add(1, 'week').endOf('week').toDate()
	};
};

const afterComingWeeks = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'week').endOf('week').toDate()
	};
};

const afterNextWeek = function () {
	return {
		$gt: moment().utc().add(1, 'week').toDate()
	};
};

const afterNextWeeks = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'week').toDate()
	};
};

const afterThisMonth = function () {
	return {
		$gt: moment().utc().endOf('month').toDate()
	};
};

const afterComingMonth = function () {
	return {
		$gt: moment().utc().add(1, 'month').endOf('month').toDate()
	};
};

const afterComingMonths = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'month').endOf('month').toDate()
	};
};

const afterNextMonth = function () {
	return {
		$gt: moment().utc().add(1, 'month').toDate()
	};
};

const afterNextMonths = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'month').toDate()
	};
};

const afterThisYear = function () {
	return {
		$gt: moment().utc().endOf('year').toDate()
	};
};

const afterComingYear = function () {
	return {
		$gt: moment().utc().add(1, 'year').endOf('year').toDate()
	};
};

const afterComingYears = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'year').endOf('year').toDate()
	};
};

const afterNextYear = function () {
	return {
		$gt: moment().utc().add(1, 'year').toDate()
	};
};

const afterNextYears = function (num = 1) {
	return {
		$gt: moment().utc().add(num, 'year').toDate()
	};
};

const lastToNextSecond = function () {
	return {
		$gte: moment().utc().subtract(1, 'second').toDate(),
		$lte: moment().utc().add(1, 'second').toDate()
	};
};

const lastToNextSeconds = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'second').toDate(),
		$lte: moment().utc().add(next, 'second').toDate()
	};
};

const lastToNextMinute = function () {
	return {
		$gte: moment().utc().subtract(1, 'minute').toDate(),
		$lte: moment().utc().add(1, 'minute').toDate()
	};
};

const lastToNextMinutes = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'minute').toDate(),
		$lte: moment().utc().add(next, 'minute').toDate()
	};
};

const lastToNextHour = function () {
	return {
		$gte: moment().utc().subtract(1, 'hour').toDate(),
		$lte: moment().utc().add(1, 'hour').toDate()
	};
};

const lastToNextHours = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'hour').toDate(),
		$lte: moment().utc().add(next, 'hour').toDate()
	};
};

const lastToNextDay = function () {
	return {
		$gte: moment().utc().subtract(1, 'day').toDate(),
		$lte: moment().utc().add(1, 'day').toDate()
	};
};

const lastToNextDays = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'day').toDate(),
		$lte: moment().utc().add(next, 'day').toDate()
	};
};

const lastToNextWeek = function () {
	return {
		$gte: moment().utc().subtract(1, 'week').toDate(),
		$lte: moment().utc().add(1, 'week').toDate()
	};
};

const lastToNextWeeks = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'week').toDate(),
		$lte: moment().utc().add(next, 'week').toDate()
	};
};

const lastToNextMonth = function () {
	return {
		$gte: moment().utc().subtract(1, 'month').toDate(),
		$lte: moment().utc().add(1, 'month').toDate()
	};
};

const lastToNextMonths = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'month').toDate(),
		$lte: moment().utc().add(next, 'month').toDate()
	};
};

const lastToNextYear = function () {
	return {
		$gte: moment().utc().subtract(1, 'year').toDate(),
		$lte: moment().utc().add(1, 'year').toDate()
	};
};

const lastToNextYears = function (last = 1, next = 1) {
	return {
		$gte: moment().utc().subtract(last, 'year').toDate(),
		$lte: moment().utc().add(next, 'year').toDate()
	};
};

module.exports = {
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
};
