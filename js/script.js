$(document).ready(function check() {
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      var a = parseInt($("input:radio[name=choice1]:checked").val());
      var b = parseInt($("input:radio[name=choice2]:checked").val());
      var c = parseInt($("input:radio[name=choice3]:checked").val());
      var d = parseInt($("input:radio[name=choice4]:checked").val());
      var e = parseInt($("input:radio[name=choice5]:checked").val());
  
      var total = (a + b + c + d + e);
      var percent = ((total / 25) * 100);
      $("#correct").text(" your score is:" + percent + "%");
  
    });
  });