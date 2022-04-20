
function stringDate(day) {
  return String(day.getDate()).padStart(2, '0');
}
function stringMonth(month) {
  return String(month.getMonth() + 1).padStart(2, '0');
}

const today = new Date('2022-04-01');
const dateYesterday = new Date('2022-04-01');
const dateTomorrow = new Date('2022-04-01')

const getYesterday  = dateYesterday.setHours(-1);
const getTomorrow = dateTomorrow.setDate(today.getDate() + 1)

const yesterday = new Date(getYesterday);
const tomorrow = new Date(getTomorrow)

//current Year
const getCurrentYear = today.getFullYear();



console.log('Yesterday')
console.log(getCurrentYear);
console.log(stringMonth(yesterday));
console.log(stringDate(yesterday));
console.log('Today')
console.log(getCurrentYear);
console.log(stringMonth(today));
console.log(stringDate(today));
console.log('Tomorrow')
console.log(getCurrentYear);
console.log(stringMonth(tomorrow));
console.log(stringDate(tomorrow));
