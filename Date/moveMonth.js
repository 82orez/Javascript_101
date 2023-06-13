// moveMonth 함수는 date 객체와 이동할 월에 해당하는 moveMonth 를 인자로 가진다.
const moveMonth = (date, moveMonth) => {
  const currentTimeStamp = date.getTime();
  // month 는 0~11 로 표현된다.
  const currentMonth = date.getMonth();

  const resDate = new Date(currentTimeStamp);
  resDate.setMonth(currentMonth + moveMonth);
  return resDate;
};

const dateA = new Date('2000-10-10')
console.log('dateA: ', dateA)

const dateB = moveMonth(dateA, 3)
console.log('dateB: ', dateB);