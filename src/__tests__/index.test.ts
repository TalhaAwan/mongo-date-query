import MockDate from 'mockdate';
import moment from 'moment';
import m from '../index';

describe('MongoDate', () => {
  beforeAll(() => {
    MockDate.set(moment('2018-08-14T12:07:07Z').toString());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('thisSecond', () => {
    expect(m.thisSecond()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:06Z'),
      $lte: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('nextSecond', () => {
    expect(m.nextSecond()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:07:08Z')
    });
  });

  test('nextSeconds', () => {
    expect(m.nextSeconds(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:07:10Z')
    });
    expect(m.nextSeconds()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:07:08Z')
    });
  });

  test('lastSecond', () => {
    expect(m.lastSecond()).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:06Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastSeconds', () => {
    expect(m.lastSeconds(3)).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:04Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastSeconds()).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:06Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('thisMinute', () => {
    expect(m.thisMinute()).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:00Z'),
      $lte: new Date('2018-08-14T12:07:59.999Z')
    });
  });

  test('previousMinute', () => {
    expect(m.previousMinute()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:00Z'),
      $lt: new Date('2018-08-14T12:07:00Z')
    });
  });

  test('previousMinutes', () => {
    expect(m.previousMinutes(3)).toStrictEqual({
      $gte: new Date('2018-08-14T12:04:00Z'),
      $lt: new Date('2018-08-14T12:07:00Z')
    });
    expect(m.previousMinutes()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:00Z'),
      $lt: new Date('2018-08-14T12:07:00Z')
    });
  });

  test('lastMinute', () => {
    expect(m.lastMinute()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastMinutes', () => {
    expect(m.lastMinutes(3)).toStrictEqual({
      $gte: new Date('2018-08-14T12:04:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastMinutes()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('comingMinute', () => {
    expect(m.comingMinute()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:59.999Z'),
      $lte: new Date('2018-08-14T12:08:59.999Z')
    });
  });

  test('comingMinutes', () => {
    expect(m.comingMinutes(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:59.999Z'),
      $lte: new Date('2018-08-14T12:10:59.999Z')
    });
    expect(m.comingMinutes()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:59.999Z'),
      $lte: new Date('2018-08-14T12:08:59.999Z')
    });
  });

  test('nextMinute', () => {
    expect(m.nextMinute()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:08:07Z')
    });
  });

  test('nextMinutes', () => {
    expect(m.nextMinutes(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:10:07Z')
    });
    expect(m.nextMinutes()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T12:08:07Z')
    });
  });

  test('thisHour', () => {
    expect(m.thisHour()).toStrictEqual({
      $gte: new Date('2018-08-14T12:00:00Z'),
      $lte: new Date('2018-08-14T12:59:59.999Z')
    });
  });

  test('previousHour', () => {
    expect(m.previousHour()).toStrictEqual({
      $gte: new Date('2018-08-14T11:00:00Z'),
      $lt: new Date('2018-08-14T12:00:00Z')
    });
  });

  test('previousHours', () => {
    expect(m.previousHours(3)).toStrictEqual({
      $gte: new Date('2018-08-14T09:00:00Z'),
      $lt: new Date('2018-08-14T12:00:00Z')
    });
    expect(m.previousHours()).toStrictEqual({
      $gte: new Date('2018-08-14T11:00:00Z'),
      $lt: new Date('2018-08-14T12:00:00Z')
    });
  });

  test('lastHour', () => {
    expect(m.lastHour()).toStrictEqual({
      $gte: new Date('2018-08-14T11:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastHours', () => {
    expect(m.lastHours(3)).toStrictEqual({
      $gte: new Date('2018-08-14T09:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastHours()).toStrictEqual({
      $gte: new Date('2018-08-14T11:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('comingHour', () => {
    expect(m.comingHour()).toStrictEqual({
      $gt: new Date('2018-08-14T12:59:59.999Z'),
      $lte: new Date('2018-08-14T13:59:59.999Z')
    });
  });

  test('comingHours', () => {
    expect(m.comingHours(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:59:59.999Z'),
      $lte: new Date('2018-08-14T15:59:59.999Z')
    });
    expect(m.comingHours()).toStrictEqual({
      $gt: new Date('2018-08-14T12:59:59.999Z'),
      $lte: new Date('2018-08-14T13:59:59.999Z')
    });
  });

  test('nextHour', () => {
    expect(m.nextHour()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T13:07:07Z')
    });
  });

  test('nextHours', () => {
    expect(m.nextHours(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T15:07:07Z')
    });
    expect(m.nextHours()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-14T13:07:07Z')
    });
  });

  test('today', () => {
    expect(m.today()).toStrictEqual({
      $gte: new Date('2018-08-14T00:00:00Z'),
      $lte: new Date('2018-08-14T23:59:59.999Z')
    });
  });

  test('yesterday', () => {
    expect(m.yesterday()).toStrictEqual({
      $gte: new Date('2018-08-13T00:00:00Z'),
      $lt: new Date('2018-08-14T00:00:00Z')
    });
  });

  test('previousDays', () => {
    expect(m.previousDays(3)).toStrictEqual({
      $gte: new Date('2018-08-11T00:00:00Z'),
      $lt: new Date('2018-08-14T00:00:00Z')
    });
    expect(m.previousDays()).toStrictEqual({
      $gte: new Date('2018-08-13T00:00:00Z'),
      $lt: new Date('2018-08-14T00:00:00Z')
    });
  });

  test('lastDay', () => {
    expect(m.lastDay()).toStrictEqual({
      $gte: new Date('2018-08-13T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastDays', () => {
    expect(m.lastDays(3)).toStrictEqual({
      $gte: new Date('2018-08-11T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastDays()).toStrictEqual({
      $gte: new Date('2018-08-13T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('tomorrow', () => {
    expect(m.tomorrow()).toStrictEqual({
      $gt: new Date('2018-08-14T23:59:59.999Z'),
      $lte: new Date('2018-08-15T23:59:59.999Z')
    });
  });

  test('comingDays', () => {
    expect(m.comingDays(3)).toStrictEqual({
      $gt: new Date('2018-08-14T23:59:59.999Z'),
      $lte: new Date('2018-08-17T23:59:59.999Z')
    });
    expect(m.comingDays()).toStrictEqual({
      $gt: new Date('2018-08-14T23:59:59.999Z'),
      $lte: new Date('2018-08-15T23:59:59.999Z')
    });
  });

  test('nextDay', () => {
    expect(m.nextDay()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-15T12:07:07Z')
    });
  });

  test('nextDays', () => {
    expect(m.nextDays(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-17T12:07:07Z')
    });
    expect(m.nextDays()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-15T12:07:07Z')
    });
  });

  test('thisWeek', () => {
    expect(m.thisWeek()).toStrictEqual({
      $gte: new Date('2018-08-12T00:00:00Z'),
      $lte: new Date('2018-08-18T23:59:59.999Z')
    });
  });

  test('comingWeek', () => {
    expect(m.comingWeek()).toStrictEqual({
      $gt: new Date('2018-08-18T23:59:59.999Z'),
      $lte: new Date('2018-08-25T23:59:59.999Z')
    });
  });

  test('comingWeeks', () => {
    expect(m.comingWeeks(3)).toStrictEqual({
      $gt: new Date('2018-08-18T23:59:59.999Z'),
      $lte: new Date('2018-09-08T23:59:59.999Z')
    });
    expect(m.comingWeeks()).toStrictEqual({
      $gt: new Date('2018-08-18T23:59:59.999Z'),
      $lte: new Date('2018-08-25T23:59:59.999Z')
    });
  });

  test('nextWeek', () => {
    expect(m.nextWeek()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('nextWeeks', () => {
    expect(m.nextWeeks(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-09-04T12:07:07Z')
    });
    expect(m.nextWeeks()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('previousWeek', () => {
    expect(m.previousWeek()).toStrictEqual({
      $gte: new Date('2018-08-05T00:00:00Z'),
      $lt: new Date('2018-08-12T00:00:00Z')
    });
  });

  test('previousWeeks', () => {
    expect(m.previousWeeks(3)).toStrictEqual({
      $gte: new Date('2018-07-22T00:00:00Z'),
      $lt: new Date('2018-08-12T00:00:00Z')
    });
    expect(m.previousWeeks()).toStrictEqual({
      $gte: new Date('2018-08-05T00:00:00Z'),
      $lt: new Date('2018-08-12T00:00:00Z')
    });
  });

  test('lastWeek', () => {
    expect(m.lastWeek()).toStrictEqual({
      $gte: new Date('2018-08-07T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastWeeks', () => {
    expect(m.lastWeeks(3)).toStrictEqual({
      $gte: new Date('2018-07-24T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastWeeks()).toStrictEqual({
      $gte: new Date('2018-08-07T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('thisMonth', () => {
    expect(m.thisMonth()).toStrictEqual({
      $gte: new Date('2018-08-01T00:00:00Z'),
      $lte: new Date('2018-08-31T23:59:59.999Z')
    });
  });

  test('comingMonth', () => {
    expect(m.comingMonth()).toStrictEqual({
      $gt: new Date('2018-08-31T23:59:59.999Z'),
      $lte: new Date('2018-09-30T23:59:59.999Z')
    });
  });

  test('comingMonths', () => {
    expect(m.comingMonths(3)).toStrictEqual({
      $gt: new Date('2018-08-31T23:59:59.999Z'),
      $lte: new Date('2018-11-30T23:59:59.999Z')
    });
    expect(m.comingMonths()).toStrictEqual({
      $gt: new Date('2018-08-31T23:59:59.999Z'),
      $lte: new Date('2018-09-30T23:59:59.999Z')
    });
  });

  test('nextMonth', () => {
    expect(m.nextMonth()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-09-14T12:07:07Z')
    });
  });

  test('nextMonths', () => {
    expect(m.nextMonths(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-11-14T12:07:07Z')
    });
    expect(m.nextMonths()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2018-09-14T12:07:07Z')
    });
  });

  test('previousMonth', () => {
    expect(m.previousMonth()).toStrictEqual({
      $gte: new Date('2018-07-01T00:00:00Z'),
      $lt: new Date('2018-08-01T00:00:00Z')
    });
  });

  test('previousMonths', () => {
    expect(m.previousMonths(3)).toStrictEqual({
      $gte: new Date('2018-05-01T00:00:00Z'),
      $lt: new Date('2018-08-01T00:00:00Z')
    });
    expect(m.previousMonths()).toStrictEqual({
      $gte: new Date('2018-07-01T00:00:00Z'),
      $lt: new Date('2018-08-01T00:00:00Z')
    });
  });

  test('lastMonth', () => {
    expect(m.lastMonth()).toStrictEqual({
      $gte: new Date('2018-07-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastMonths', () => {
    expect(m.lastMonths(3)).toStrictEqual({
      $gte: new Date('2018-05-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastMonths()).toStrictEqual({
      $gte: new Date('2018-07-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('thisYear', () => {
    expect(m.thisYear()).toStrictEqual({
      $gte: new Date('2018-01-01T00:00:00Z'),
      $lte: new Date('2018-12-31T23:59:59.999Z')
    });
  });

  test('comingYear', () => {
    expect(m.comingYear()).toStrictEqual({
      $gt: new Date('2018-12-31T23:59:59.999Z'),
      $lte: new Date('2019-12-31T23:59:59.999Z')
    });
  });

  test('comingYears', () => {
    expect(m.comingYears(3)).toStrictEqual({
      $gt: new Date('2018-12-31T23:59:59.999Z'),
      $lte: new Date('2021-12-31T23:59:59.999Z')
    });
    expect(m.comingYears()).toStrictEqual({
      $gt: new Date('2018-12-31T23:59:59.999Z'),
      $lte: new Date('2019-12-31T23:59:59.999Z')
    });
  });

  test('nextYear', () => {
    expect(m.nextYear()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2019-08-14T12:07:07Z')
    });
  });

  test('nextYears', () => {
    expect(m.nextYears(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2021-08-14T12:07:07Z')
    });
    expect(m.nextYears()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z'),
      $lte: new Date('2019-08-14T12:07:07Z')
    });
  });

  test('previousYear', () => {
    expect(m.previousYear()).toStrictEqual({
      $gte: new Date('2017-01-01T00:00:00Z'),
      $lt: new Date('2018-01-01T00:00:00Z')
    });
  });

  test('previousYears', () => {
    expect(m.previousYears(3)).toStrictEqual({
      $gte: new Date('2015-01-01T00:00:00Z'),
      $lt: new Date('2018-01-01T00:00:00Z')
    });
    expect(m.previousYears()).toStrictEqual({
      $gte: new Date('2017-01-01T00:00:00Z'),
      $lt: new Date('2018-01-01T00:00:00Z')
    });
  });

  test('lastYear', () => {
    expect(m.lastYear()).toStrictEqual({
      $gte: new Date('2017-08-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('lastYears', () => {
    expect(m.lastYears(3)).toStrictEqual({
      $gte: new Date('2015-08-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
    expect(m.lastYears()).toStrictEqual({
      $gte: new Date('2017-08-14T12:07:07Z'),
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('beforeNow', () => {
    expect(m.beforeNow()).toStrictEqual({
      $lt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('beforeLastSecond', () => {
    expect(m.beforeLastSecond()).toStrictEqual({
      $lt: new Date('2018-08-14T12:07:06Z')
    });
  });

  test('beforeLastSeconds', () => {
    expect(m.beforeLastSeconds(3)).toStrictEqual({
      $lt: new Date('2018-08-14T12:07:04Z')
    });
    expect(m.beforeLastSeconds()).toStrictEqual({
      $lt: new Date('2018-08-14T12:07:06Z')
    });
  });

  test('beforeThisMinute', () => {
    expect(m.beforeThisMinute()).toStrictEqual({
      $lt: new Date('2018-08-14T12:07:00Z')
    });
  });

  test('beforePreviousMinute', () => {
    expect(m.beforePreviousMinute()).toStrictEqual({
      $lt: new Date('2018-08-14T12:06:00Z')
    });
  });

  test('beforePreviousMinutes', () => {
    expect(m.beforePreviousMinutes(3)).toStrictEqual({
      $lt: new Date('2018-08-14T12:04:00Z')
    });
    expect(m.beforePreviousMinutes()).toStrictEqual({
      $lt: new Date('2018-08-14T12:06:00Z')
    });
  });

  test('beforeLastMinute', () => {
    expect(m.beforeLastMinute()).toStrictEqual({
      $lt: new Date('2018-08-14T12:06:07Z')
    });
  });

  test('beforeLastMinutes', () => {
    expect(m.beforeLastMinutes(3)).toStrictEqual({
      $lt: new Date('2018-08-14T12:04:07Z')
    });
    expect(m.beforeLastMinutes()).toStrictEqual({
      $lt: new Date('2018-08-14T12:06:07Z')
    });
  });

  test('beforeThisHour', () => {
    expect(m.beforeThisHour()).toStrictEqual({
      $lt: new Date('2018-08-14T12:00:00Z')
    });
  });

  test('beforePreviousHour', () => {
    expect(m.beforePreviousHour()).toStrictEqual({
      $lt: new Date('2018-08-14T11:00:00Z')
    });
  });

  test('beforePreviousHours', () => {
    expect(m.beforePreviousHours(3)).toStrictEqual({
      $lt: new Date('2018-08-14T09:00:00Z')
    });
    expect(m.beforePreviousHours()).toStrictEqual({
      $lt: new Date('2018-08-14T11:00:00Z')
    });
  });

  test('beforeLastHour', () => {
    expect(m.beforeLastHour()).toStrictEqual({
      $lt: new Date('2018-08-14T11:07:07Z')
    });
  });

  test('beforeLastHours', () => {
    expect(m.beforeLastHours(3)).toStrictEqual({
      $lt: new Date('2018-08-14T09:07:07Z')
    });
    expect(m.beforeLastHours()).toStrictEqual({
      $lt: new Date('2018-08-14T11:07:07Z')
    });
  });

  test('beforeToday', () => {
    expect(m.beforeToday()).toStrictEqual({
      $lt: new Date('2018-08-14T00:00:00Z')
    });
  });

  test('beforeYesterday', () => {
    expect(m.beforeYesterday()).toStrictEqual({
      $lt: new Date('2018-08-13T00:00:00Z')
    });
  });

  test('beforePreviousDays', () => {
    expect(m.beforePreviousDays(3)).toStrictEqual({
      $lt: new Date('2018-08-11T00:00:00Z')
    });
    expect(m.beforePreviousDays()).toStrictEqual({
      $lt: new Date('2018-08-13T00:00:00Z')
    });
  });

  test('beforeLastDay', () => {
    expect(m.beforeLastDay()).toStrictEqual({
      $lt: new Date('2018-08-13T12:07:07Z')
    });
  });

  test('beforeLastDays', () => {
    expect(m.beforeLastDays(3)).toStrictEqual({
      $lt: new Date('2018-08-11T12:07:07Z')
    });
    expect(m.beforeLastDays()).toStrictEqual({
      $lt: new Date('2018-08-13T12:07:07Z')
    });
  });

  test('beforeThisWeek', () => {
    expect(m.beforeThisWeek()).toStrictEqual({
      $lt: new Date('2018-08-12T00:00:00Z')
    });
  });

  test('beforePreviousWeek', () => {
    expect(m.beforePreviousWeek()).toStrictEqual({
      $lt: new Date('2018-08-05T00:00:00Z')
    });
  });

  test('beforePreviousWeeks', () => {
    expect(m.beforePreviousWeeks(3)).toStrictEqual({
      $lt: new Date('2018-07-22T00:00:00Z')
    });
    expect(m.beforePreviousWeeks()).toStrictEqual({
      $lt: new Date('2018-08-05T00:00:00Z')
    });
  });

  test('beforeLastWeek', () => {
    expect(m.beforeLastWeek()).toStrictEqual({
      $lt: new Date('2018-08-07T12:07:07Z')
    });
  });

  test('beforeLastWeeks', () => {
    expect(m.beforeLastWeeks(3)).toStrictEqual({
      $lt: new Date('2018-07-24T12:07:07Z')
    });
    expect(m.beforeLastWeeks()).toStrictEqual({
      $lt: new Date('2018-08-07T12:07:07Z')
    });
  });

  test('beforeThisMonth', () => {
    expect(m.beforeThisMonth()).toStrictEqual({
      $lt: new Date('2018-08-01T00:00:00Z')
    });
  });

  test('beforePreviousMonth', () => {
    expect(m.beforePreviousMonth()).toStrictEqual({
      $lt: new Date('2018-07-01T00:00:00Z')
    });
  });

  test('beforePreviousMonths', () => {
    expect(m.beforePreviousMonths(3)).toStrictEqual({
      $lt: new Date('2018-05-01T00:00:00Z')
    });
    expect(m.beforePreviousMonths()).toStrictEqual({
      $lt: new Date('2018-07-01T00:00:00Z')
    });
  });

  test('beforeLastMonth', () => {
    expect(m.beforeLastMonth()).toStrictEqual({
      $lt: new Date('2018-07-14T12:07:07Z')
    });
  });

  test('beforeLastMonths', () => {
    expect(m.beforeLastMonths(3)).toStrictEqual({
      $lt: new Date('2018-05-14T12:07:07Z')
    });
    expect(m.beforeLastMonths()).toStrictEqual({
      $lt: new Date('2018-07-14T12:07:07Z')
    });
  });

  test('beforeThisYear', () => {
    expect(m.beforeThisYear()).toStrictEqual({
      $lt: new Date('2018-01-01T00:00:00Z')
    });
  });

  test('beforePreviousYear', () => {
    expect(m.beforePreviousYear()).toStrictEqual({
      $lt: new Date('2017-01-01T00:00:00Z')
    });
  });

  test('beforePreviousYears', () => {
    expect(m.beforePreviousYears(3)).toStrictEqual({
      $lt: new Date('2015-01-01T00:00:00Z')
    });
    expect(m.beforePreviousYears()).toStrictEqual({
      $lt: new Date('2017-01-01T00:00:00Z')
    });
  });

  test('beforeLastYear', () => {
    expect(m.beforeLastYear()).toStrictEqual({
      $lt: new Date('2017-08-14T12:07:07Z')
    });
  });

  test('beforeLastYears', () => {
    expect(m.beforeLastYears(3)).toStrictEqual({
      $lt: new Date('2015-08-14T12:07:07Z')
    });
    expect(m.beforeLastYears()).toStrictEqual({
      $lt: new Date('2017-08-14T12:07:07Z')
    });
  });

  test('afterNow', () => {
    expect(m.afterNow()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:07Z')
    });
  });

  test('afterNextSecond', () => {
    expect(m.afterNextSecond()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:08Z')
    });
  });

  test('afterNextSeconds', () => {
    expect(m.afterNextSeconds(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:10Z')
    });
    expect(m.afterNextSeconds()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:08Z')
    });
  });

  test('afterThisMinute', () => {
    expect(m.afterThisMinute()).toStrictEqual({
      $gt: new Date('2018-08-14T12:07:59.999Z')
    });
  });

  test('afterComingMinute', () => {
    expect(m.afterComingMinute()).toStrictEqual({
      $gt: new Date('2018-08-14T12:08:59.999Z')
    });
  });

  test('afterComingMinutes', () => {
    expect(m.afterComingMinutes(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:10:59.999Z')
    });
    expect(m.afterComingMinutes()).toStrictEqual({
      $gt: new Date('2018-08-14T12:08:59.999Z')
    });
  });

  test('afterNextMinute', () => {
    expect(m.afterNextMinute()).toStrictEqual({
      $gt: new Date('2018-08-14T12:08:07Z')
    });
  });

  test('afterNextMinutes', () => {
    expect(m.afterNextMinutes(3)).toStrictEqual({
      $gt: new Date('2018-08-14T12:10:07Z')
    });
    expect(m.afterNextMinutes()).toStrictEqual({
      $gt: new Date('2018-08-14T12:08:07Z')
    });
  });

  test('afterThisHour', () => {
    expect(m.afterThisHour()).toStrictEqual({
      $gt: new Date('2018-08-14T12:59:59.999Z')
    });
  });

  test('afterComingHour', () => {
    expect(m.afterComingHour()).toStrictEqual({
      $gt: new Date('2018-08-14T13:59:59.999Z')
    });
  });

  test('afterComingHours', () => {
    expect(m.afterComingHours(3)).toStrictEqual({
      $gt: new Date('2018-08-14T15:59:59.999Z')
    });
    expect(m.afterComingHours()).toStrictEqual({
      $gt: new Date('2018-08-14T13:59:59.999Z')
    });
  });

  test('afterNextHour', () => {
    expect(m.afterNextHour()).toStrictEqual({
      $gt: new Date('2018-08-14T13:07:07Z')
    });
  });

  test('afterNextHours', () => {
    expect(m.afterNextHours(3)).toStrictEqual({
      $gt: new Date('2018-08-14T15:07:07Z')
    });
    expect(m.afterNextHours()).toStrictEqual({
      $gt: new Date('2018-08-14T13:07:07Z')
    });
  });

  test('afterToday', () => {
    expect(m.afterToday()).toStrictEqual({
      $gt: new Date('2018-08-14T23:59:59.999Z')
    });
  });

  test('afterTomorrow', () => {
    expect(m.afterTomorrow()).toStrictEqual({
      $gt: new Date('2018-08-15T23:59:59.999Z')
    });
  });

  test('afterComingDays', () => {
    expect(m.afterComingDays(3)).toStrictEqual({
      $gt: new Date('2018-08-17T23:59:59.999Z')
    });
    expect(m.afterComingDays()).toStrictEqual({
      $gt: new Date('2018-08-15T23:59:59.999Z')
    });
  });

  test('afterNextDay', () => {
    expect(m.afterNextDay()).toStrictEqual({
      $gt: new Date('2018-08-15T12:07:07Z')
    });
  });

  test('afterNextDays', () => {
    expect(m.afterNextDays(3)).toStrictEqual({
      $gt: new Date('2018-08-17T12:07:07Z')
    });
    expect(m.afterNextDays()).toStrictEqual({
      $gt: new Date('2018-08-15T12:07:07Z')
    });
  });

  test('afterThisWeek', () => {
    expect(m.afterThisWeek()).toStrictEqual({
      $gt: new Date('2018-08-18T23:59:59.999Z')
    });
  });

  test('afterComingWeek', () => {
    expect(m.afterComingWeek()).toStrictEqual({
      $gt: new Date('2018-08-25T23:59:59.999Z')
    });
  });

  test('afterComingWeeks', () => {
    expect(m.afterComingWeeks(3)).toStrictEqual({
      $gt: new Date('2018-09-08T23:59:59.999Z')
    });
    expect(m.afterComingWeeks()).toStrictEqual({
      $gt: new Date('2018-08-25T23:59:59.999Z')
    });
  })

  test('afterNextWeek', () => {
    expect(m.afterNextWeek()).toStrictEqual({
      $gt: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('afterNextWeeks', () => {
    expect(m.afterNextWeeks(3)).toStrictEqual({
      $gt: new Date('2018-09-04T12:07:07Z')
    });
    expect(m.afterNextWeeks()).toStrictEqual({
      $gt: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('afterThisMonth', () => {
    expect(m.afterThisMonth()).toStrictEqual({
      $gt: new Date('2018-08-31T23:59:59.999Z')
    });
  });

  test('afterComingMonth', () => {
    expect(m.afterComingMonth()).toStrictEqual({
      $gt: new Date('2018-09-30T23:59:59.999Z')
    });
  });

  test('afterComingMonths', () => {
    expect(m.afterComingMonths(3)).toStrictEqual({
      $gt: new Date('2018-11-30T23:59:59.999Z')
    });
    expect(m.afterComingMonths()).toStrictEqual({
      $gt: new Date('2018-09-30T23:59:59.999Z')
    });
  });

  test('afterNextMonth', () => {
    expect(m.afterNextMonth()).toStrictEqual({
      $gt: new Date('2018-09-14T12:07:07Z')
    });
  });

  test('afterNextMonths', () => {
    expect(m.afterNextMonths(3)).toStrictEqual({
      $gt: new Date('2018-11-14T12:07:07Z')
    });
    expect(m.afterNextMonths()).toStrictEqual({
      $gt: new Date('2018-09-14T12:07:07Z')
    });
  });

  test('afterThisYear', () => {
    expect(m.afterThisYear()).toStrictEqual({
      $gt: new Date('2018-12-31T23:59:59.999Z')
    });
  });

  test('afterComingYear', () => {
    expect(m.afterComingYear()).toStrictEqual({
      $gt: new Date('2019-12-31T23:59:59.999Z')
    });
  });

  test('afterComingYears', () => {
    expect(m.afterComingYears(3)).toStrictEqual({
      $gt: new Date('2021-12-31T23:59:59.999Z')
    });
    expect(m.afterComingYears()).toStrictEqual({
      $gt: new Date('2019-12-31T23:59:59.999Z')
    });
  });

  test('afterNextYear', () => {
    expect(m.afterNextYear()).toStrictEqual({
      $gt: new Date('2019-08-14T12:07:07Z')
    });
  });

  test('afterNextYears', () => {
    expect(m.afterNextYears(3)).toStrictEqual({
      $gt: new Date('2021-08-14T12:07:07Z')
    });
    expect(m.afterNextYears()).toStrictEqual({
      $gt: new Date('2019-08-14T12:07:07Z')
    });
  });

  test('lastToNextSecond', () => {
    expect(m.lastToNextSecond()).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:06Z'),
      $lte: new Date('2018-08-14T12:07:08Z')
    });
  });

  test('lastToNextSeconds', () => {
    expect(m.lastToNextSeconds()).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:06Z'),
      $lte: new Date('2018-08-14T12:07:08Z')
    });
    expect(m.lastToNextSeconds(2)).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:05Z'),
      $lte: new Date('2018-08-14T12:07:08Z')
    });
    expect(m.lastToNextSeconds(3, 7)).toStrictEqual({
      $gte: new Date('2018-08-14T12:07:04Z'),
      $lte: new Date('2018-08-14T12:07:14Z')
    });
  });

  test('lastToNextMinute', () => {
    expect(m.lastToNextMinute()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:07Z'),
      $lte: new Date('2018-08-14T12:08:07Z')
    });
  });

  test('lastToNextMinutes', () => {
    expect(m.lastToNextMinutes()).toStrictEqual({
      $gte: new Date('2018-08-14T12:06:07Z'),
      $lte: new Date('2018-08-14T12:08:07Z')
    });
    expect(m.lastToNextMinutes(2)).toStrictEqual({
      $gte: new Date('2018-08-14T12:05:07Z'),
      $lte: new Date('2018-08-14T12:08:07Z')
    });
    expect(m.lastToNextMinutes(3, 7)).toStrictEqual({
      $gte: new Date('2018-08-14T12:04:07Z'),
      $lte: new Date('2018-08-14T12:14:07Z')
    });
  });

  test('lastToNextHour', () => {
    expect(m.lastToNextHour()).toStrictEqual({
      $gte: new Date('2018-08-14T11:07:07Z'),
      $lte: new Date('2018-08-14T13:07:07Z')
    });
  });

  test('lastToNextHours', () => {
    expect(m.lastToNextHours()).toStrictEqual({
      $gte: new Date('2018-08-14T11:07:07Z'),
      $lte: new Date('2018-08-14T13:07:07Z')
    });
    expect(m.lastToNextHours(2)).toStrictEqual({
      $gte: new Date('2018-08-14T10:07:07Z'),
      $lte: new Date('2018-08-14T13:07:07Z')
    });
    expect(m.lastToNextHours(3, 7)).toStrictEqual({
      $gte: new Date('2018-08-14T09:07:07Z'),
      $lte: new Date('2018-08-14T19:07:07Z')
    });
  });

  test('lastToNextDay', () => {
    expect(m.lastToNextDay()).toStrictEqual({
      $gte: new Date('2018-08-13T12:07:07Z'),
      $lte: new Date('2018-08-15T12:07:07Z')
    });
  });

  test('lastToNextDays', () => {
    expect(m.lastToNextDays()).toStrictEqual({
      $gte: new Date('2018-08-13T12:07:07Z'),
      $lte: new Date('2018-08-15T12:07:07Z')
    });
    expect(m.lastToNextDays(2)).toStrictEqual({
      $gte: new Date('2018-08-12T12:07:07Z'),
      $lte: new Date('2018-08-15T12:07:07Z')
    });
    expect(m.lastToNextDays(3, 7)).toStrictEqual({
      $gte: new Date('2018-08-11T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('lastToNextWeek', () => {
    expect(m.lastToNextWeek()).toStrictEqual({
      $gte: new Date('2018-08-07T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
  });

  test('lastToNextWeeks', () => {
    expect(m.lastToNextWeeks()).toStrictEqual({
      $gte: new Date('2018-08-07T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
    expect(m.lastToNextWeeks(2)).toStrictEqual({
      $gte: new Date('2018-07-31T12:07:07Z'),
      $lte: new Date('2018-08-21T12:07:07Z')
    });
    expect(m.lastToNextWeeks(3, 7)).toStrictEqual({
      $gte: new Date('2018-07-24T12:07:07Z'),
      $lte: new Date('2018-10-02T12:07:07Z')
    });
  });

  test('lastToNextMonth', () => {
    expect(m.lastToNextMonth()).toStrictEqual({
      $gte: new Date('2018-07-14T12:07:07Z'),
      $lte: new Date('2018-09-14T12:07:07Z')
    });
  });

  test('lastToNextMonths', () => {
    expect(m.lastToNextMonths()).toStrictEqual({
      $gte: new Date('2018-07-14T12:07:07Z'),
      $lte: new Date('2018-09-14T12:07:07Z')
    });
    expect(m.lastToNextMonths(2)).toStrictEqual({
      $gte: new Date('2018-06-14T12:07:07Z'),
      $lte: new Date('2018-09-14T12:07:07Z')
    });
    expect(m.lastToNextMonths(3, 7)).toStrictEqual({
      $gte: new Date('2018-05-14T12:07:07Z'),
      $lte: new Date('2019-03-14T12:07:07Z')
    });
  });

  test('lastToNextYear', () => {
    expect(m.lastToNextYear()).toStrictEqual({
      $gte: new Date('2017-08-14T12:07:07Z'),
      $lte: new Date('2019-08-14T12:07:07Z')
    });
  });

  test('lastToNextYears', () => {
    expect(m.lastToNextYears()).toStrictEqual({
      $gte: new Date('2017-08-14T12:07:07Z'),
      $lte: new Date('2019-08-14T12:07:07Z')
    });
    expect(m.lastToNextYears(2)).toStrictEqual({
      $gte: new Date('2016-08-14T12:07:07Z'),
      $lte: new Date('2019-08-14T12:07:07Z')
    });
    expect(m.lastToNextYears(3, 7)).toStrictEqual({
      $gte: new Date('2015-08-14T12:07:07Z'),
      $lte: new Date('2025-08-14T12:07:07Z')
    });
  });
})

