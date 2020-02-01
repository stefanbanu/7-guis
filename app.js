$(document).ready(function() {
  $(function() {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
  });

  var test = $("#comboOptions").val();
  if (test === "A") {
    console.log("working");
    $("#datepicker2").datepicker("disable");
  }
});
