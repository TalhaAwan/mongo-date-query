import test from 'ava';
import MockDate from 'mockdate';
import moment from 'moment';
import m from '.';

test.before(() => {
	MockDate.set(moment('2018-08-14T12:07:07Z'));
});

test.after(() => {
	MockDate.reset();
});

test('thisSecond', t => {
	t.deepEqual(m.thisSecond(), {
		$gt: new Date('2018-08-14T12:07:06Z'),
		$lte: new Date('2018-08-14T12:07:07Z')
	});
});

test('nextSecond', t => {
	t.deepEqual(m.nextSecond(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:07:08Z')
	});
});

test('nextSeconds', t => {
	t.deepEqual(m.nextSeconds(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:07:10Z')
	});
	t.deepEqual(m.nextSeconds(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:07:08Z')
	});
});

test('lastSecond', t => {
	t.deepEqual(m.lastSecond(), {
		$gte: new Date('2018-08-14T12:07:06Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastSeconds', t => {
	t.deepEqual(m.lastSeconds(3), {
		$gte: new Date('2018-08-14T12:07:04Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastSeconds(), {
		$gte: new Date('2018-08-14T12:07:06Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('thisMinute', t => {
	t.deepEqual(m.thisMinute(), {
		$gte: new Date('2018-08-14T12:07:00Z'),
		$lte: new Date('2018-08-14T12:07:59.999Z')
	});
});

test('previousMinute', t => {
	t.deepEqual(m.previousMinute(), {
		$gte: new Date('2018-08-14T12:06:00Z'),
		$lt: new Date('2018-08-14T12:07:00Z')
	});
});

test('previousMinutes', t => {
	t.deepEqual(m.previousMinutes(3), {
		$gte: new Date('2018-08-14T12:04:00Z'),
		$lt: new Date('2018-08-14T12:07:00Z')
	});
	t.deepEqual(m.previousMinutes(), {
		$gte: new Date('2018-08-14T12:06:00Z'),
		$lt: new Date('2018-08-14T12:07:00Z')
	});
});

test('lastMinute', t => {
	t.deepEqual(m.lastMinute(), {
		$gte: new Date('2018-08-14T12:06:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastMinutes', t => {
	t.deepEqual(m.lastMinutes(3), {
		$gte: new Date('2018-08-14T12:04:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastMinutes(), {
		$gte: new Date('2018-08-14T12:06:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('comingMinute', t => {
	t.deepEqual(m.comingMinute(), {
		$gt: new Date('2018-08-14T12:07:59.999Z'),
		$lte: new Date('2018-08-14T12:08:59.999Z')
	});
});

test('comingMinutes', t => {
	t.deepEqual(m.comingMinutes(3), {
		$gt: new Date('2018-08-14T12:07:59.999Z'),
		$lte: new Date('2018-08-14T12:10:59.999Z')
	});
	t.deepEqual(m.comingMinutes(), {
		$gt: new Date('2018-08-14T12:07:59.999Z'),
		$lte: new Date('2018-08-14T12:08:59.999Z')
	});
});

test('nextMinute', t => {
	t.deepEqual(m.nextMinute(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:08:07Z')
	});
});

test('nextMinutes', t => {
	t.deepEqual(m.nextMinutes(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:10:07Z')
	});
	t.deepEqual(m.nextMinutes(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T12:08:07Z')
	});
});

test('thisHour', t => {
	t.deepEqual(m.thisHour(), {
		$gte: new Date('2018-08-14T12:00:00Z'),
		$lte: new Date('2018-08-14T12:59:59.999Z')
	});
});

test('previousHour', t => {
	t.deepEqual(m.previousHour(), {
		$gte: new Date('2018-08-14T11:00:00Z'),
		$lt: new Date('2018-08-14T12:00:00Z')
	});
});

test('previousHours', t => {
	t.deepEqual(m.previousHours(3), {
		$gte: new Date('2018-08-14T09:00:00Z'),
		$lt: new Date('2018-08-14T12:00:00Z')
	});
	t.deepEqual(m.previousHours(), {
		$gte: new Date('2018-08-14T11:00:00Z'),
		$lt: new Date('2018-08-14T12:00:00Z')
	});
});

test('lastHour', t => {
	t.deepEqual(m.lastHour(), {
		$gte: new Date('2018-08-14T11:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastHours', t => {
	t.deepEqual(m.lastHours(3), {
		$gte: new Date('2018-08-14T09:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastHours(), {
		$gte: new Date('2018-08-14T11:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('comingHour', t => {
	t.deepEqual(m.comingHour(), {
		$gt: new Date('2018-08-14T12:59:59.999Z'),
		$lte: new Date('2018-08-14T13:59:59.999Z')
	});
});

test('comingHours', t => {
	t.deepEqual(m.comingHours(3), {
		$gt: new Date('2018-08-14T12:59:59.999Z'),
		$lte: new Date('2018-08-14T15:59:59.999Z')
	});
	t.deepEqual(m.comingHours(), {
		$gt: new Date('2018-08-14T12:59:59.999Z'),
		$lte: new Date('2018-08-14T13:59:59.999Z')
	});
});

test('nextHour', t => {
	t.deepEqual(m.nextHour(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T13:07:07Z')
	});
});

test('nextHours', t => {
	t.deepEqual(m.nextHours(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T15:07:07Z')
	});
	t.deepEqual(m.nextHours(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-14T13:07:07Z')
	});
});

test('today', t => {
	t.deepEqual(m.today(), {
		$gte: new Date('2018-08-14T00:00:00Z'),
		$lte: new Date('2018-08-14T23:59:59.999Z')
	});
});

test('yesterday', t => {
	t.deepEqual(m.yesterday(), {
		$gte: new Date('2018-08-13T00:00:00Z'),
		$lt: new Date('2018-08-14T00:00:00Z')
	});
});

test('previousDays', t => {
	t.deepEqual(m.previousDays(3), {
		$gte: new Date('2018-08-11T00:00:00Z'),
		$lt: new Date('2018-08-14T00:00:00Z')
	});
	t.deepEqual(m.previousDays(), {
		$gte: new Date('2018-08-13T00:00:00Z'),
		$lt: new Date('2018-08-14T00:00:00Z')
	});
});

test('lastDay', t => {
	t.deepEqual(m.lastDay(), {
		$gte: new Date('2018-08-13T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastDays', t => {
	t.deepEqual(m.lastDays(3), {
		$gte: new Date('2018-08-11T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastDays(), {
		$gte: new Date('2018-08-13T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('tomorrow', t => {
	t.deepEqual(m.tomorrow(), {
		$gt: new Date('2018-08-14T23:59:59.999Z'),
		$lte: new Date('2018-08-15T23:59:59.999Z')
	});
});

test('comingDays', t => {
	t.deepEqual(m.comingDays(3), {
		$gt: new Date('2018-08-14T23:59:59.999Z'),
		$lte: new Date('2018-08-17T23:59:59.999Z')
	});
	t.deepEqual(m.comingDays(), {
		$gt: new Date('2018-08-14T23:59:59.999Z'),
		$lte: new Date('2018-08-15T23:59:59.999Z')
	});
});

test('nextDay', t => {
	t.deepEqual(m.nextDay(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-15T12:07:07Z')
	});
});

test('nextDays', t => {
	t.deepEqual(m.nextDays(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-17T12:07:07Z')
	});
	t.deepEqual(m.nextDays(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-15T12:07:07Z')
	});
});

test('thisWeek', t => {
	t.deepEqual(m.thisWeek(), {
		$gte: new Date('2018-08-12T00:00:00Z'),
		$lte: new Date('2018-08-18T23:59:59.999Z')
	});
});

test('comingWeek', t => {
	t.deepEqual(m.comingWeek(), {
		$gt: new Date('2018-08-18T23:59:59.999Z'),
		$lte: new Date('2018-08-25T23:59:59.999Z')
	});
});

test('comingWeeks', t => {
	t.deepEqual(m.comingWeeks(3), {
		$gt: new Date('2018-08-18T23:59:59.999Z'),
		$lte: new Date('2018-09-08T23:59:59.999Z')
	});
	t.deepEqual(m.comingWeeks(), {
		$gt: new Date('2018-08-18T23:59:59.999Z'),
		$lte: new Date('2018-08-25T23:59:59.999Z')
	});
});

test('nextWeek', t => {
	t.deepEqual(m.nextWeek(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
});

test('nextWeeks', t => {
	t.deepEqual(m.nextWeeks(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-09-04T12:07:07Z')
	});
	t.deepEqual(m.nextWeeks(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
});

test('previousWeek', t => {
	t.deepEqual(m.previousWeek(), {
		$gte: new Date('2018-08-05T00:00:00Z'),
		$lt: new Date('2018-08-12T00:00:00Z')
	});
});

test('previousWeeks', t => {
	t.deepEqual(m.previousWeeks(3), {
		$gte: new Date('2018-07-22T00:00:00Z'),
		$lt: new Date('2018-08-12T00:00:00Z')
	});
	t.deepEqual(m.previousWeeks(), {
		$gte: new Date('2018-08-05T00:00:00Z'),
		$lt: new Date('2018-08-12T00:00:00Z')
	});
});

test('lastWeek', t => {
	t.deepEqual(m.lastWeek(), {
		$gte: new Date('2018-08-07T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastWeeks', t => {
	t.deepEqual(m.lastWeeks(3), {
		$gte: new Date('2018-07-24T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastWeeks(), {
		$gte: new Date('2018-08-07T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('thisMonth', t => {
	t.deepEqual(m.thisMonth(), {
		$gte: new Date('2018-08-01T00:00:00Z'),
		$lte: new Date('2018-08-31T23:59:59.999Z')
	});
});

test('comingMonth', t => {
	t.deepEqual(m.comingMonth(), {
		$gt: new Date('2018-08-31T23:59:59.999Z'),
		$lte: new Date('2018-09-30T23:59:59.999Z')
	});
});

test('comingMonths', t => {
	t.deepEqual(m.comingMonths(3), {
		$gt: new Date('2018-08-31T23:59:59.999Z'),
		$lte: new Date('2018-11-30T23:59:59.999Z')
	});
	t.deepEqual(m.comingMonths(), {
		$gt: new Date('2018-08-31T23:59:59.999Z'),
		$lte: new Date('2018-09-30T23:59:59.999Z')
	});
});

test('nextMonth', t => {
	t.deepEqual(m.nextMonth(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-09-14T12:07:07Z')
	});
});

test('nextMonths', t => {
	t.deepEqual(m.nextMonths(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-11-14T12:07:07Z')
	});
	t.deepEqual(m.nextMonths(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2018-09-14T12:07:07Z')
	});
});

test('previousMonth', t => {
	t.deepEqual(m.previousMonth(), {
		$gte: new Date('2018-07-01T00:00:00Z'),
		$lt: new Date('2018-08-01T00:00:00Z')
	});
});

test('previousMonths', t => {
	t.deepEqual(m.previousMonths(3), {
		$gte: new Date('2018-05-01T00:00:00Z'),
		$lt: new Date('2018-08-01T00:00:00Z')
	});
	t.deepEqual(m.previousMonths(), {
		$gte: new Date('2018-07-01T00:00:00Z'),
		$lt: new Date('2018-08-01T00:00:00Z')
	});
});

test('lastMonth', t => {
	t.deepEqual(m.lastMonth(), {
		$gte: new Date('2018-07-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastMonths', t => {
	t.deepEqual(m.lastMonths(3), {
		$gte: new Date('2018-05-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastMonths(), {
		$gte: new Date('2018-07-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('thisYear', t => {
	t.deepEqual(m.thisYear(), {
		$gte: new Date('2018-01-01T00:00:00Z'),
		$lte: new Date('2018-12-31T23:59:59.999Z')
	});
});

test('comingYear', t => {
	t.deepEqual(m.comingYear(), {
		$gt: new Date('2018-12-31T23:59:59.999Z'),
		$lte: new Date('2019-12-31T23:59:59.999Z')
	});
});

test('comingYears', t => {
	t.deepEqual(m.comingYears(3), {
		$gt: new Date('2018-12-31T23:59:59.999Z'),
		$lte: new Date('2021-12-31T23:59:59.999Z')
	});
	t.deepEqual(m.comingYears(), {
		$gt: new Date('2018-12-31T23:59:59.999Z'),
		$lte: new Date('2019-12-31T23:59:59.999Z')
	});
});

test('nextYear', t => {
	t.deepEqual(m.nextYear(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2019-08-14T12:07:07Z')
	});
});

test('nextYears', t => {
	t.deepEqual(m.nextYears(3), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2021-08-14T12:07:07Z')
	});
	t.deepEqual(m.nextYears(), {
		$gt: new Date('2018-08-14T12:07:07Z'),
		$lte: new Date('2019-08-14T12:07:07Z')
	});
});

test('previousYear', t => {
	t.deepEqual(m.previousYear(), {
		$gte: new Date('2017-01-01T00:00:00Z'),
		$lt: new Date('2018-01-01T00:00:00Z')
	});
});

test('previousYears', t => {
	t.deepEqual(m.previousYears(3), {
		$gte: new Date('2015-01-01T00:00:00Z'),
		$lt: new Date('2018-01-01T00:00:00Z')
	});
	t.deepEqual(m.previousYears(), {
		$gte: new Date('2017-01-01T00:00:00Z'),
		$lt: new Date('2018-01-01T00:00:00Z')
	});
});

test('lastYear', t => {
	t.deepEqual(m.lastYear(), {
		$gte: new Date('2017-08-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('lastYears', t => {
	t.deepEqual(m.lastYears(3), {
		$gte: new Date('2015-08-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastYears(), {
		$gte: new Date('2017-08-14T12:07:07Z'),
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('beforeNow', t => {
	t.deepEqual(m.beforeNow(), {
		$lt: new Date('2018-08-14T12:07:07Z')
	});
});

test('beforeLastSecond', t => {
	t.deepEqual(m.beforeLastSecond(), {
		$lt: new Date('2018-08-14T12:07:06Z')
	});
});

test('beforeLastSeconds', t => {
	t.deepEqual(m.beforeLastSeconds(3), {
		$lt: new Date('2018-08-14T12:07:04Z')
	});
	t.deepEqual(m.beforeLastSeconds(), {
		$lt: new Date('2018-08-14T12:07:06Z')
	});
});

test('beforeThisMinute', t => {
	t.deepEqual(m.beforeThisMinute(), {
		$lt: new Date('2018-08-14T12:07:00Z')
	});
});

test('beforePreviousMinute', t => {
	t.deepEqual(m.beforePreviousMinute(), {
		$lt: new Date('2018-08-14T12:06:00Z')
	});
});

test('beforePreviousMinutes', t => {
	t.deepEqual(m.beforePreviousMinutes(3), {
		$lt: new Date('2018-08-14T12:04:00Z')
	});
	t.deepEqual(m.beforePreviousMinutes(), {
		$lt: new Date('2018-08-14T12:06:00Z')
	});
});

test('beforeLastMinute', t => {
	t.deepEqual(m.beforeLastMinute(), {
		$lt: new Date('2018-08-14T12:06:07Z')
	});
});

test('beforeLastMinutes', t => {
	t.deepEqual(m.beforeLastMinutes(3), {
		$lt: new Date('2018-08-14T12:04:07Z')
	});
	t.deepEqual(m.beforeLastMinutes(), {
		$lt: new Date('2018-08-14T12:06:07Z')
	});
});

test('beforeThisHour', t => {
	t.deepEqual(m.beforeThisHour(), {
		$lt: new Date('2018-08-14T12:00:00Z')
	});
});

test('beforePreviousHour', t => {
	t.deepEqual(m.beforePreviousHour(), {
		$lt: new Date('2018-08-14T11:00:00Z')
	});
});

test('beforePreviousHours', t => {
	t.deepEqual(m.beforePreviousHours(3), {
		$lt: new Date('2018-08-14T09:00:00Z')
	});
	t.deepEqual(m.beforePreviousHours(), {
		$lt: new Date('2018-08-14T11:00:00Z')
	});
});

test('beforeLastHour', t => {
	t.deepEqual(m.beforeLastHour(), {
		$lt: new Date('2018-08-14T11:07:07Z')
	});
});

test('beforeLastHours', t => {
	t.deepEqual(m.beforeLastHours(3), {
		$lt: new Date('2018-08-14T09:07:07Z')
	});
	t.deepEqual(m.beforeLastHours(), {
		$lt: new Date('2018-08-14T11:07:07Z')
	});
});

test('beforeToday', t => {
	t.deepEqual(m.beforeToday(), {
		$lt: new Date('2018-08-14T00:00:00Z')
	});
});

test('beforeYesterday', t => {
	t.deepEqual(m.beforeYesterday(), {
		$lt: new Date('2018-08-13T00:00:00Z')
	});
});

test('beforePreviousDays', t => {
	t.deepEqual(m.beforePreviousDays(3), {
		$lt: new Date('2018-08-11T00:00:00Z')
	});
	t.deepEqual(m.beforePreviousDays(), {
		$lt: new Date('2018-08-13T00:00:00Z')
	});
});

test('beforeLastDay', t => {
	t.deepEqual(m.beforeLastDay(), {
		$lt: new Date('2018-08-13T12:07:07Z')
	});
});

test('beforeLastDays', t => {
	t.deepEqual(m.beforeLastDays(3), {
		$lt: new Date('2018-08-11T12:07:07Z')
	});
	t.deepEqual(m.beforeLastDays(), {
		$lt: new Date('2018-08-13T12:07:07Z')
	});
});

test('beforeThisWeek', t => {
	t.deepEqual(m.beforeThisWeek(), {
		$lt: new Date('2018-08-12T00:00:00Z')
	});
});

test('beforePreviousWeek', t => {
	t.deepEqual(m.beforePreviousWeek(), {
		$lt: new Date('2018-08-05T00:00:00Z')
	});
});

test('beforePreviousWeeks', t => {
	t.deepEqual(m.beforePreviousWeeks(3), {
		$lt: new Date('2018-07-22T00:00:00Z')
	});
	t.deepEqual(m.beforePreviousWeeks(), {
		$lt: new Date('2018-08-05T00:00:00Z')
	});
});

test('beforeLastWeek', t => {
	t.deepEqual(m.beforeLastWeek(), {
		$lt: new Date('2018-08-07T12:07:07Z')
	});
});

test('beforeLastWeeks', t => {
	t.deepEqual(m.beforeLastWeeks(3), {
		$lt: new Date('2018-07-24T12:07:07Z')
	});
	t.deepEqual(m.beforeLastWeeks(), {
		$lt: new Date('2018-08-07T12:07:07Z')
	});
});

test('beforeThisMonth', t => {
	t.deepEqual(m.beforeThisMonth(), {
		$lt: new Date('2018-08-01T00:00:00Z')
	});
});

test('beforePreviousMonth', t => {
	t.deepEqual(m.beforePreviousMonth(), {
		$lt: new Date('2018-07-01T00:00:00Z')
	});
});

test('beforePreviousMonths', t => {
	t.deepEqual(m.beforePreviousMonths(3), {
		$lt: new Date('2018-05-01T00:00:00Z')
	});
	t.deepEqual(m.beforePreviousMonths(), {
		$lt: new Date('2018-07-01T00:00:00Z')
	});
});

test('beforeLastMonth', t => {
	t.deepEqual(m.beforeLastMonth(), {
		$lt: new Date('2018-07-14T12:07:07Z')
	});
});

test('beforeLastMonths', t => {
	t.deepEqual(m.beforeLastMonths(3), {
		$lt: new Date('2018-05-14T12:07:07Z')
	});
	t.deepEqual(m.beforeLastMonths(), {
		$lt: new Date('2018-07-14T12:07:07Z')
	});
});

test('beforeThisYear', t => {
	t.deepEqual(m.beforeThisYear(), {
		$lt: new Date('2018-01-01T00:00:00Z')
	});
});

test('beforePreviousYear', t => {
	t.deepEqual(m.beforePreviousYear(), {
		$lt: new Date('2017-01-01T00:00:00Z')
	});
});

test('beforePreviousYears', t => {
	t.deepEqual(m.beforePreviousYears(3), {
		$lt: new Date('2015-01-01T00:00:00Z')
	});
	t.deepEqual(m.beforePreviousYears(), {
		$lt: new Date('2017-01-01T00:00:00Z')
	});
});

test('beforeLastYear', t => {
	t.deepEqual(m.beforeLastYear(), {
		$lt: new Date('2017-08-14T12:07:07Z')
	});
});

test('beforeLastYears', t => {
	t.deepEqual(m.beforeLastYears(3), {
		$lt: new Date('2015-08-14T12:07:07Z')
	});
	t.deepEqual(m.beforeLastYears(), {
		$lt: new Date('2017-08-14T12:07:07Z')
	});
});

test('afterNow', t => {
	t.deepEqual(m.afterNow(), {
		$gt: new Date('2018-08-14T12:07:07Z')
	});
});

test('afterNextSecond', t => {
	t.deepEqual(m.afterNextSecond(), {
		$gt: new Date('2018-08-14T12:07:08Z')
	});
});

test('afterNextSeconds', t => {
	t.deepEqual(m.afterNextSeconds(3), {
		$gt: new Date('2018-08-14T12:07:10Z')
	});
	t.deepEqual(m.afterNextSeconds(), {
		$gt: new Date('2018-08-14T12:07:08Z')
	});
});

test('afterThisMinute', t => {
	t.deepEqual(m.afterThisMinute(), {
		$gt: new Date('2018-08-14T12:07:59.999Z')
	});
});

test('afterComingMinute', t => {
	t.deepEqual(m.afterComingMinute(), {
		$gt: new Date('2018-08-14T12:08:59.999Z')
	});
});

test('afterComingMinutes', t => {
	t.deepEqual(m.afterComingMinutes(3), {
		$gt: new Date('2018-08-14T12:10:59.999Z')
	});
	t.deepEqual(m.afterComingMinutes(), {
		$gt: new Date('2018-08-14T12:08:59.999Z')
	});
});

test('afterNextMinute', t => {
	t.deepEqual(m.afterNextMinute(), {
		$gt: new Date('2018-08-14T12:08:07Z')
	});
});

test('afterNextMinutes', t => {
	t.deepEqual(m.afterNextMinutes(3), {
		$gt: new Date('2018-08-14T12:10:07Z')
	});
	t.deepEqual(m.afterNextMinutes(), {
		$gt: new Date('2018-08-14T12:08:07Z')
	});
});

test('afterThisHour', t => {
	t.deepEqual(m.afterThisHour(), {
		$gt: new Date('2018-08-14T12:59:59.999Z')
	});
});

test('afterComingHour', t => {
	t.deepEqual(m.afterComingHour(), {
		$gt: new Date('2018-08-14T13:59:59.999Z')
	});
});

test('afterComingHours', t => {
	t.deepEqual(m.afterComingHours(3), {
		$gt: new Date('2018-08-14T15:59:59.999Z')
	});
	t.deepEqual(m.afterComingHours(), {
		$gt: new Date('2018-08-14T13:59:59.999Z')
	});
});

test('afterNextHour', t => {
	t.deepEqual(m.afterNextHour(), {
		$gt: new Date('2018-08-14T13:07:07Z')
	});
});

test('afterNextHours', t => {
	t.deepEqual(m.afterNextHours(3), {
		$gt: new Date('2018-08-14T15:07:07Z')
	});
	t.deepEqual(m.afterNextHours(), {
		$gt: new Date('2018-08-14T13:07:07Z')
	});
});

test('afterToday', t => {
	t.deepEqual(m.afterToday(), {
		$gt: new Date('2018-08-14T23:59:59.999Z')
	});
});

test('afterTomorrow', t => {
	t.deepEqual(m.afterTomorrow(), {
		$gt: new Date('2018-08-15T23:59:59.999Z')
	});
});

test('afterComingDays', t => {
	t.deepEqual(m.afterComingDays(3), {
		$gt: new Date('2018-08-17T23:59:59.999Z')
	});
	t.deepEqual(m.afterComingDays(), {
		$gt: new Date('2018-08-15T23:59:59.999Z')
	});
});

test('afterNextDay', t => {
	t.deepEqual(m.afterNextDay(), {
		$gt: new Date('2018-08-15T12:07:07Z')
	});
});

test('afterNextDays', t => {
	t.deepEqual(m.afterNextDays(3), {
		$gt: new Date('2018-08-17T12:07:07Z')
	});
	t.deepEqual(m.afterNextDays(), {
		$gt: new Date('2018-08-15T12:07:07Z')
	});
});

test('afterThisWeek', t => {
	t.deepEqual(m.afterThisWeek(), {
		$gt: new Date('2018-08-18T23:59:59.999Z')
	});
});

test('afterComingWeek', t => {
	t.deepEqual(m.afterComingWeek(), {
		$gt: new Date('2018-08-25T23:59:59.999Z')
	});
});

test('afterComingWeeks', t => {
	t.deepEqual(m.afterComingWeeks(3), {
		$gt: new Date('2018-09-08T23:59:59.999Z')
	});
	t.deepEqual(m.afterComingWeeks(), {
		$gt: new Date('2018-08-25T23:59:59.999Z')
	});
});

test('afterNextWeek', t => {
	t.deepEqual(m.afterNextWeek(), {
		$gt: new Date('2018-08-21T12:07:07Z')
	});
});

test('afterNextWeeks', t => {
	t.deepEqual(m.afterNextWeeks(3), {
		$gt: new Date('2018-09-04T12:07:07Z')
	});
	t.deepEqual(m.afterNextWeeks(), {
		$gt: new Date('2018-08-21T12:07:07Z')
	});
});

test('afterThisMonth', t => {
	t.deepEqual(m.afterThisMonth(), {
		$gt: new Date('2018-08-31T23:59:59.999Z')
	});
});

test('afterComingMonth', t => {
	t.deepEqual(m.afterComingMonth(), {
		$gt: new Date('2018-09-30T23:59:59.999Z')
	});
});

test('afterComingMonths', t => {
	t.deepEqual(m.afterComingMonths(3), {
		$gt: new Date('2018-11-30T23:59:59.999Z')
	});
	t.deepEqual(m.afterComingMonths(), {
		$gt: new Date('2018-09-30T23:59:59.999Z')
	});
});

test('afterNextMonth', t => {
	t.deepEqual(m.afterNextMonth(), {
		$gt: new Date('2018-09-14T12:07:07Z')
	});
});

test('afterNextMonths', t => {
	t.deepEqual(m.afterNextMonths(3), {
		$gt: new Date('2018-11-14T12:07:07Z')
	});
	t.deepEqual(m.afterNextMonths(), {
		$gt: new Date('2018-09-14T12:07:07Z')
	});
});

test('afterThisYear', t => {
	t.deepEqual(m.afterThisYear(), {
		$gt: new Date('2018-12-31T23:59:59.999Z')
	});
});

test('afterComingYear', t => {
	t.deepEqual(m.afterComingYear(), {
		$gt: new Date('2019-12-31T23:59:59.999Z')
	});
});

test('afterComingYears', t => {
	t.deepEqual(m.afterComingYears(3), {
		$gt: new Date('2021-12-31T23:59:59.999Z')
	});
	t.deepEqual(m.afterComingYears(), {
		$gt: new Date('2019-12-31T23:59:59.999Z')
	});
});

test('afterNextYear', t => {
	t.deepEqual(m.afterNextYear(), {
		$gt: new Date('2019-08-14T12:07:07Z')
	});
});

test('afterNextYears', t => {
	t.deepEqual(m.afterNextYears(3), {
		$gt: new Date('2021-08-14T12:07:07Z')
	});
	t.deepEqual(m.afterNextYears(), {
		$gt: new Date('2019-08-14T12:07:07Z')
	});
});

test('lastToNextSecond', t => {
	t.deepEqual(m.lastToNextSecond(), {
		$gte: new Date('2018-08-14T12:07:06Z'),
		$lte: new Date('2018-08-14T12:07:08Z')
	});
});

test('lastToNextSeconds', t => {
	t.deepEqual(m.lastToNextSeconds(), {
		$gte: new Date('2018-08-14T12:07:06Z'),
		$lte: new Date('2018-08-14T12:07:08Z')
	});
	t.deepEqual(m.lastToNextSeconds(2), {
		$gte: new Date('2018-08-14T12:07:05Z'),
		$lte: new Date('2018-08-14T12:07:08Z')
	});
	t.deepEqual(m.lastToNextSeconds(3, 7), {
		$gte: new Date('2018-08-14T12:07:04Z'),
		$lte: new Date('2018-08-14T12:07:14Z')
	});
});

test('lastToNextMinute', t => {
	t.deepEqual(m.lastToNextMinute(), {
		$gte: new Date('2018-08-14T12:06:07Z'),
		$lte: new Date('2018-08-14T12:08:07Z')
	});
});

test('lastToNextMinutes', t => {
	t.deepEqual(m.lastToNextMinutes(), {
		$gte: new Date('2018-08-14T12:06:07Z'),
		$lte: new Date('2018-08-14T12:08:07Z')
	});
	t.deepEqual(m.lastToNextMinutes(2), {
		$gte: new Date('2018-08-14T12:05:07Z'),
		$lte: new Date('2018-08-14T12:08:07Z')
	});
	t.deepEqual(m.lastToNextMinutes(3, 7), {
		$gte: new Date('2018-08-14T12:04:07Z'),
		$lte: new Date('2018-08-14T12:14:07Z')
	});
});

test('lastToNextHour', t => {
	t.deepEqual(m.lastToNextHour(), {
		$gte: new Date('2018-08-14T11:07:07Z'),
		$lte: new Date('2018-08-14T13:07:07Z')
	});
});

test('lastToNextHours', t => {
	t.deepEqual(m.lastToNextHours(), {
		$gte: new Date('2018-08-14T11:07:07Z'),
		$lte: new Date('2018-08-14T13:07:07Z')
	});
	t.deepEqual(m.lastToNextHours(2), {
		$gte: new Date('2018-08-14T10:07:07Z'),
		$lte: new Date('2018-08-14T13:07:07Z')
	});
	t.deepEqual(m.lastToNextHours(3, 7), {
		$gte: new Date('2018-08-14T09:07:07Z'),
		$lte: new Date('2018-08-14T19:07:07Z')
	});
});

test('lastToNextDay', t => {
	t.deepEqual(m.lastToNextDay(), {
		$gte: new Date('2018-08-13T12:07:07Z'),
		$lte: new Date('2018-08-15T12:07:07Z')
	});
});

test('lastToNextDays', t => {
	t.deepEqual(m.lastToNextDays(), {
		$gte: new Date('2018-08-13T12:07:07Z'),
		$lte: new Date('2018-08-15T12:07:07Z')
	});
	t.deepEqual(m.lastToNextDays(2), {
		$gte: new Date('2018-08-12T12:07:07Z'),
		$lte: new Date('2018-08-15T12:07:07Z')
	});
	t.deepEqual(m.lastToNextDays(3, 7), {
		$gte: new Date('2018-08-11T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
});

test('lastToNextWeek', t => {
	t.deepEqual(m.lastToNextWeek(), {
		$gte: new Date('2018-08-07T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
});

test('lastToNextWeeks', t => {
	t.deepEqual(m.lastToNextWeeks(), {
		$gte: new Date('2018-08-07T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
	t.deepEqual(m.lastToNextWeeks(2), {
		$gte: new Date('2018-07-31T12:07:07Z'),
		$lte: new Date('2018-08-21T12:07:07Z')
	});
	t.deepEqual(m.lastToNextWeeks(3, 7), {
		$gte: new Date('2018-07-24T12:07:07Z'),
		$lte: new Date('2018-10-02T12:07:07Z')
	});
});

test('lastToNextMonth', t => {
	t.deepEqual(m.lastToNextMonth(), {
		$gte: new Date('2018-07-14T12:07:07Z'),
		$lte: new Date('2018-09-14T12:07:07Z')
	});
});

test('lastToNextMonths', t => {
	t.deepEqual(m.lastToNextMonths(), {
		$gte: new Date('2018-07-14T12:07:07Z'),
		$lte: new Date('2018-09-14T12:07:07Z')
	});
	t.deepEqual(m.lastToNextMonths(2), {
		$gte: new Date('2018-06-14T12:07:07Z'),
		$lte: new Date('2018-09-14T12:07:07Z')
	});
	t.deepEqual(m.lastToNextMonths(3, 7), {
		$gte: new Date('2018-05-14T12:07:07Z'),
		$lte: new Date('2019-03-14T12:07:07Z')
	});
});

test('lastToNextYear', t => {
	t.deepEqual(m.lastToNextYear(), {
		$gte: new Date('2017-08-14T12:07:07Z'),
		$lte: new Date('2019-08-14T12:07:07Z')
	});
});

test('lastToNextYears', t => {
	t.deepEqual(m.lastToNextYears(), {
		$gte: new Date('2017-08-14T12:07:07Z'),
		$lte: new Date('2019-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastToNextYears(2), {
		$gte: new Date('2016-08-14T12:07:07Z'),
		$lte: new Date('2019-08-14T12:07:07Z')
	});
	t.deepEqual(m.lastToNextYears(3, 7), {
		$gte: new Date('2015-08-14T12:07:07Z'),
		$lte: new Date('2025-08-14T12:07:07Z')
	});
});
