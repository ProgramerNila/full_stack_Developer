let year = 2100;
if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
  console.log("leap Year by 400");
} else {
  console.log("this is not leap year");
}
