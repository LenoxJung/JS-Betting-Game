$(document).ready(function(){
  $('#restart').hide();
  var bankroll = 100;
  $('#inputs').on('submit', function(e){
    e.preventDefault();
    var random = Math.floor((Math.random()*10)+1);
    var bet = $('#bet').val();
    var guess = $('#guess').val();
    if (guess == random) {
      bankroll += parseInt(bet);
      $('#bankroll').text("Correct! Your bankroll is now $" + bankroll);
    }
    else if (guess == random + 1 || guess == random - 1) {
      $('#bankroll').text("So close! Your bankroll is still $" + bankroll + " the correct answer was " + random);
    }
    else {
      bankroll -= bet;
      $('#bankroll').text("Wrong!, your bankroll is now $" + bankroll + " the correct answer was " + random);
    }
    if (bankroll <= 0) {
      $('#submit').hide();
      $('#restart').show();
    }
  });
  $("#restart").on('submit', function(e){
    e.preventDefault();
    bankroll = 100;
    $('#bankroll').text("Game restarted, bankroll is once again $100");
    $('#submit').show();
    $('#restart').hide();
  });

});