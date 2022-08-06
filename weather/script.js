var currentTemp = document.querySelector('current-temp')
var condition = document.querySelector('summary')

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tunis%2C%20Tunisia?unitGroup=metric&key=3RBQ8BN2AACM2YLSY2TW7MR9S&contentType=json')
.then(response => response.json())
.then(data => {
  var tempValue = data['currentConditions']['temp'];
  var conditionVal = data['currentConditions']['conditions'];

  currentTemp.innerHTML = tempValue;
  condition.innerHTML = conditionVal;
})

//Horizontal scrolling 
const container = document.getElementById("scroll");
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 75;
      e.preventDefault();
    }
    else {
      container.scrollLeft -= 75;
      e.preventDefault();
    }
  });

//Toggle more info
var days = document.getElementsByClassName("day");
	for (var i = 0; i < days.length; i++) {
		(function () {
			var j = i;
			days[j].addEventListener('click', function () {
				days[j].classList.toggle('show-info');
			}, false);
		}());
	}
