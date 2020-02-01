function fromCelsiusToFahrenheit() {
  let celsius = document.getElementById("celsius").value;
  document.getElementById("fahr").value = celsius * (9 / 5) + 32;
}

function fromFahrenheitToCelsius() {
  let fahr = document.getElementById("fahr").value;
  document.getElementById("celsius").value = (fahr - 32) * (5 / 9);
}

function reset() {
  document.getElementById("fahr").value = "";
  document.getElementById("celsius").value = "";
}
