var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var success_messages = ['Awesome!', 'Great job!', 'Terrific!', 'Hurray!']

function compare_key(key, letter){
    if (key==letter){
	console.log("success!");
	$('#main_letter').css('color', 'green');
	$('#main_letter').text(pick_random_success_message()).effect( "bounce", { times: 3 }, "slow" );
	setTimeout(reset_main_letter, 1000);
    } else {
	$("#main_letter").css('color', 'red');
	$( "#main_letter" ).effect("shake");
    }
	    
}

function reset_main_letter(){
    var letter = pick_random_letter();
    $('#main_letter').css('color', 'black');
    $('#main_letter').text(letter);
    return letter
}

function pick_random_letter(){
    var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
    return letter
}

function pick_random_success_message(){
    var message = success_messages[Math.floor(Math.random()*success_messages.length)];
    return message
}

$(document).ready(function(){
    reset_main_letter();
    $(document).on("keydown", function(data){
	compare_key($('#main_letter').text(), String.fromCharCode(data['keyCode']));
    });
});

