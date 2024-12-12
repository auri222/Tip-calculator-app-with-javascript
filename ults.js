function roundDecimals(num) {
  return (Math.ceil(num * 100) / 100);
}

function totalTip(bill, percent_tip) {
  return roundDecimals(((bill * percent_tip) / 100))
}

function tipAmountPerPerson(total_tip, no_of_people) {
  return roundDecimals((total_tip / no_of_people));
}

function totalPerPerson(bill, total_tip, no_of_people) {
  return roundDecimals(((bill + total_tip) / no_of_people))
}

export { roundDecimals, totalTip, tipAmountPerPerson, totalPerPerson }