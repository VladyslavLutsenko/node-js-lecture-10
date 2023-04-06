// ділиться на 4
// НЕ ділиться на 100
// ділиться на 400
// більше 1582


// 2023 - false
// 2024 - true
// 2000 - true
// 1900 - false
// 1000 - throw Error()
// 2020.3 - throw Error()


const isLeapYear = (year) => {
  if (typeof year !== 'number') {
    throw new Error('year is not number')
  }

  if (!Number.isInteger(year)) {
    throw new Error('year should be integer')
  }

  if (year < 1582) {
    throw new Error('year should be greater than 1582')
  }

  const date = new Date(year, 2, 0);
  const dayOfMonth = date.getDate();

  if (dayOfMonth === 29) {
    return true;
  }

  return false;
}

module.exports = isLeapYear;

console.log(isLeapYear(2020));
