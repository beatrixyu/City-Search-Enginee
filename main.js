//import { cities } from "./data"; // we imported the array of the cities from the file data.js. you can use in your code the array with the name 'cities'

// here you can type your code
// function myFunction() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

document.getElementById("searchfield").addEventListener("input", searchCity);
document.getElementById("searchfield").addEventListener("input", searchState);

function searchCity() {
  let input = document.getElementById("searchfield").value;
  document.getElementById("output").innerHTML = "";

  if (input.length >= 1) {
    for (i = 0; i < cities.length; i++) {
      if (cities[i].city.toUpperCase().indexOf(input.toUpperCase()) != -1) {
        let result =
          highlight(cities[i].city, input) +
          ", " +
          highlight(cities[i].state, input) +
          " " +
          cities[i].population;
        document.getElementById("output").innerHTML +=
          "<li>" + result + "</li>";
      }
    }
  }
}

function searchState() {
  let input = document.getElementById("searchfield").value;
  document.getElementById("output").innerHTML = "";

  if (input.length >= 1) {
    for (i = 0; i < cities.length; i++) {
      if (cities[i].state.toUpperCase().indexOf(input.toUpperCase()) != -1) {
        let result =
          highlight(cities[i].state, input) +
          " " +
          highlight(cities[i].city, input) +
          " " +
          cities[i].population;
        document.getElementById("output").innerHTML +=
          "<li>" + result + "</li>";
      }
    }
  }
}

function highlight(text, input) {
  var textVar = new RegExp(input, "i");
  return text.replace(textVar, "<mark>" + input + "</mark>");
}
