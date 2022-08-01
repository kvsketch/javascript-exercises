const leapYears = function(year) {
  if (year % 100 == 0 && year % 400 == 0) {
    return true;
  }
  else if (year % 100 != 0 && year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
//leap year is divisible by 4 
//leap year divisible by 100 is not leap year unless divisible by 400
// Do not edit below this line
module.exports = leapYears;
