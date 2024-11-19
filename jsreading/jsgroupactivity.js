let month = parseInt(prompt("choose a number between 1 - 12"));
if (month >= 4 || month <= 6) {
  console.log("Boston is in Spring");
}
else if (month >= 7 || month <= 9) {
    console.log("Boston is in Summer");
}
else if (month >= 10 || month <= 11) {
    console.log("Boston is in Autumn");
}
else if (month === 12 || month <= 1 && month <= 3) {
    console.log('the season is winter');
} else {
    console.log('there are only 12 months in a year');
}