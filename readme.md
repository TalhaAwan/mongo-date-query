# mongo-date-query [![Build Status](https://travis-ci.com/TalhaAwan/mongo-date-query.svg?branch=master)](https://travis-ci.com/TalhaAwan/mongo-date-query)

> Mongo date query helper for common queries

## Description

Builds query objects for commonly used mongo date queries. Helpful in generating data for tables, graphs, and charts. 

Works with both [mongoose](https://www.npmjs.com/package/mongoose) and [mongodb](https://www.npmjs.com/package/mongodb). All dates are in UTC. 

## Install

```
$ npm install mongo-date-query
```

## Usage

```js
const mdq = require('mongo-date-query');

//mongoose
User.find({createdAt: mdq.today()}, function(err, users){
    if(!err){
        console.log(users)
    }
});

User.find({updatedAt: mdq.lastWeek()}, function(err, users){
    if(!err){
        console.log(users)
    }
});

//mongodb
const collection = db.collection('users');
collection.find({createdAt: mdq.yesterday()}).toArray(function(err, users) {
    if(!err){
        console.log(users)
    }
});

collection.find({expireDate: mdq.afterNextMonth()}).toArray(function(err, users) {
    if(!err){
        console.log(users)
    }
});

```

## APIs

General pattern:
- **this**: Start and end of a time unit [*thisHour()*, *thisYear()* etc.]

- **next**: From now [*nextMonth()* = month from now]

- **last**: Before now [*lastYear()* = year before now]

- **coming**: The current given unit is not included [*comingYear()* = year after (not including) this year]

- **previous**: The current given unit is not included [*previousMonth()* = month before (not including) this month]

- **before**: Before the given unit [*beforePreviousMonth()*, *beforeLastMinute()*]

- **after**: After the given unit [*afterThisWeek()*, *afterNextMonth()*, *afterComingYear()*]

- **lastToNext**: From last time unit to next [*lastToNextMinute()* = from last minute to next minute, *lastToNextDay()* = from last 24 hours to next 24 hours]

- **APIs with plural version**: Take *Number* parameter(s). Default is 1. [*nextMonths(2)*, *comingYears(3)*, *lastWeeks(4)*, *beforePreviousMonths(3)*, *afterComingYears(5)* *lastToNextDays(3, 4)*]

### thisSecond()
### nextSecond()
### nextSeconds(Number)
### lastSecond()
### lastSeconds(Number)
### thisMinute()
### previousMinute()
### previousMinutes(Number)
### lastMinute()
### lastMinutes(Number)
### comingMinute()
### comingMinutes(Number)
### nextMinute()
### nextMinutes(Number)
### thisHour()
### previousHour()
### previousHours(Number)
### lastHour()
### lastHours(Number)
### comingHour()
### comingHours(Number)
### nextHour()
### nextHours(Number)
### today()
### yesterday()
### previousDays(Number)
### lastDay()
### lastDays(Number)
### tomorrow()
### comingDays(Number)
### nextDay()
### nextDays(Number)
### thisWeek()
### comingWeek()
### comingWeeks(Number)
### nextWeek()
### nextWeeks(Number)
### previousWeek()
### previousWeeks(Number)
### lastWeek()
### lastWeeks(Number)
### thisMonth()
### comingMonth()
### comingMonths(Number)
### nextMonth()
### nextMonths(Number)
### previousMonth()
### previousMonths(Number)
### lastMonth()
### lastMonths(Number)
### thisYear()
### comingYear()
### comingYears(Number)
### nextYear()
### nextYears(Number)
### previousYear()
### previousYears(Number)
### lastYear()
### lastYears(Number)
### beforeNow()
### beforeLastSecond()
### beforeLastSeconds(Number)
### beforeThisMinute()
### beforePreviousMinute()
### beforePreviousMinutes(Number)
### beforeLastMinute()
### beforeLastMinutes(Number)
### beforeThisHour()
### beforePreviousHour()
### beforePreviousHours(Number)
### beforeLastHour()
### beforeLastHours(Number)
### beforeToday()
### beforeYesterday()
### beforePreviousDays(Number)
### beforeLastDay()
### beforeLastDays(Number)
### beforeThisWeek()
### beforePreviousWeek()
### beforePreviousWeeks(Number)
### beforeLastWeek()
### beforeLastWeeks(Number)
### beforeThisMonth()
### beforePreviousMonth()
### beforePreviousMonths(Number)
### beforeLastMonth()
### beforeLastMonths(Number)
### beforeThisYear()
### beforePreviousYear()
### beforePreviousYears(Number)
### beforeLastYear()
### beforeLastYears(Number)
### afterNow()
### afterNextSecond()
### afterNextSeconds(Number)
### afterThisMinute()
### afterComingMinute()
### afterComingMinutes(Number)
### afterNextMinute()
### afterNextMinutes(Number)
### afterThisHour()
### afterComingHour()
### afterComingHours(Number)
### afterNextHour()
### afterNextHours(Number)
### afterToday()
### afterTomorrow()
### afterComingDays(Number)
### afterNextDay()
### afterNextDays(Number)
### afterThisWeek()
### afterComingWeek()
### afterComingWeeks(Number)
### afterNextWeek()
### afterNextWeeks(Number)
### afterThisMonth()
### afterComingMonth()
### afterComingMonths(Number)
### afterNextMonth()
### afterNextMonths(Number)
### afterThisYear()
### afterComingYear()
### afterComingYears(Number)
### afterNextYear()
### afterNextYears(Number)
### lastToNextSecond()
### lastToNextSeconds(Number, Number)
### lastToNextMinute()
### lastToNextMinutes(Number, Number)
### lastToNextHour()
### lastToNextHours(Number, Number)
### lastToNextDay()
### lastToNextDays(Number, Number)
### lastToNextWeek()
### lastToNextWeeks(Number, Number)
### lastToNextMonth()
### lastToNextMonths(Number, Number)
### lastToNextYear()
### lastToNextYears(Number, Number)

## Related

- [mongo-query-helper](https://www.npmjs.com/package/mongo-query-helper) helper for common and repetitive queries 

## License

MIT © Talha Awan
