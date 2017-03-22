var weekDates = document.querySelector(".SelectedDates");
var listDay = document.querySelectorAll(".days");
//var d1 = document.querySelector(".firstDate");
//var d2 = document.querySelector(".secondDate");
console.log(listDay);

weekDates.addEventListener("change", function() {
            var d1 = document.querySelector(".firstDate");
            var d2 = document.querySelector(".secondDate");

            var date1 = new Date(d1.value);
            var date2 = new Date(d2.value);

            var daysDate1 = date1.getDay();
            var daysDate2 = date2.getDay();

            for (var i = 0; i < listDay.length; i++) {

                if (daysDate1 === daysDate2) {
                    listDay[daysDate2].classList.add("matchColor");
                } else {
                    listDay[daysDate1].classList.add("color1");
                    listDay[daysDate2].classList.add("color2");
                }
              }
            });
