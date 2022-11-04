function date(year, month, day) {
  console.log(new Date(`${year}-${month}-${day}`))
}

date(2022, 03, 22)

const testCases = [
  new Date().toLocaleDateString(), // 8/19/2020
  new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}),
  new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}), // 08/19/2020 (month and day with two digits)
  new Date().toLocaleDateString('en-ZA'), // 2020/08/19 (year/month/day) notice the different locale
  new Date().toLocaleDateString('en-CA'), // 2020-08-19 (year-month-day) notice the different locale
  new Date().toLocaleString("en-US", {timeZone: "America/New_York"}), // 8/19/2020, 9:29:51 AM. (date and time in a specific timezone)
  new Date().toLocaleString("en-US", {hour: '2-digit', hour12: false, timeZone: "America/New_York"}),  // 09 (just the hour)
]

for (const testData of testCases) {
  console.log(testData)
}


