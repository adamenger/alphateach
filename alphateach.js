//load meSpeak library
meSpeak.loadConfig("mespeak/mespeak_config.json");
meSpeak.loadVoice("mespeak/en-us.json");

// array of alphabet characters to show on the screen
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//array of messages to display after successful keypress
var success_messages = ['Awesome!', 'Great job!', 'Terrific!', 'Hurray!']

//compare the keycode of the pressed key with the current letter on the screen
function compare_key(key, letter){
    if (key==letter){
	console.log("success!");
	$('#main_letter').css('color', 'green');
	$('#main_letter')
	    .text(pick_random_success_message())
	    .effect( "bounce", { times: 3 }, "slow" )
	    .css('font-size', '100px');
	setTimeout(reset_main_letter, 1000);
    } else {
	$("#main_letter").css('color', 'red');
	$( "#main_letter" ).effect("shake");
    }
	    
}

// pick a random letter and set it on the screen
function reset_main_letter(){
    var letter = pick_random_letter();
    $('#main_letter').css('font-size', '400px');
    $('#main_letter').css('color', 'black');
    $('#main_letter').text(letter);
    return letter
}

// simply picks a random letter from the alphabet array and sets it on the screen
function pick_random_letter(){
    var letter = alphabet[Math.floor(Math.random()*alphabet.length)];
    return letter
}

// picks and returns a random success message
function pick_random_success_message(){
    var message = success_messages[Math.floor(Math.random()*success_messages.length)];
    return message
}

// initialize the first letter on the screen and setup the keydown listener 
$(document).ready(function(){
    reset_main_letter();
    $(document).on("keydown", function(data){
	compare_key($('#main_letter').text(), String.fromCharCode(data['keyCode']));
    });
});

