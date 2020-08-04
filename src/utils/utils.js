const getDayName = (dateString) => {
    const d = new Date(dateString);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // get day 
    const dayName = days[d.getDay()];
  
    // get month
    const listMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juny",
      "July",
      "August",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    const Month =listMonth[d.getMonth()];
  
    const getDayMonth = `${dayName}, ${d.getDate()} ${Month} ${d.getFullYear()}`;
    return getDayMonth;
  };
  const numberWithCommas = (number) =>{
    number = number.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while(pattern.test(number))
       number = number.replace(pattern,"$1,$2");
       return number 
  }
  export {getDayName,numberWithCommas}