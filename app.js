let counter = 1;
const content = document.getElementById("app");

document.getElementById("btn").addEventListener("click", function() {
  content.innerHTML = counter++;
});
