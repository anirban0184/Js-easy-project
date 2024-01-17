function calculateTime() {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let munite = date.getMinutes();
  console.log(day);
  if(hours > 12) {
    hours -= 12;
  }
  let amPm = hours <= 12 ? "PM" : "AM";
  let days = [ "Sun", "Mon", "Tue", "Wed", "Thu","Fry", "Sat",];
  let dayName = days[day];
  console.log(dayName);
  document.querySelector("#day").innerHTML = `${dayName}`;
  document.querySelector("#hour").innerHTML = `${hours}`;
  document.querySelector("#munite").innerHTML = `${munite}`;
  document.querySelector("#pmam").innerHTML = `${amPm}`;

  
}
// setTimeout(calculateTime,1);
setInterval(calculateTime, 1000);