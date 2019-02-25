// U I LOGIC
$(document).ready(function check() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      $("form#quiz").submit(function(event) {
        event.preventDefault();
        var a = parseInt($("input:radio[name=choice1]:checked").val());
        var b = parseInt($("input:radio[name=choice2]:checked").val());
        var c = parseInt($("input:radio[name=choice3]:checked").val());
        var d = parseInt($("input:radio[name=choice4]:checked").val());
        var e = parseInt($("input:radio[name=choice5]:checked").val());

 //BUSINESS LOGIC
var total = (a + b + c + d + e);
var percent = ((total / 25) * 100);



          if (percent > 79) {
            $("#correct").text(name + " You scored " + percent + "%. " + "EXCELLENT! YOU ARE A JAVASCRIPT GURU");
            $("#correct").fadeToggle();
          } else if (percent > 59 && percent < 79) {
            $("#correct").text(name + " You scored " + percent + "%. " + "FAIR YOU CAN DO BETTER");
            $("#correct").fadeToggle();
          } else if (percent > 39 && percent < 59) {
            $("#correct").text(name + " You scored " + percent + "%. " + "Below Average Work Harder next time.");
            $("#correct").fadeToggle();
          } else {
            $("#correct").text(name + " You scored " + percent + "%. " + "POOR work! Did you study?");
            $("#correct").fadeToggle();
          };
        });
      });