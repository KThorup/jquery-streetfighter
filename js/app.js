$(document).ready(function() {
	$('body').keydown(function(event) {
		event.preventDefault();
		if (event.which == 88) 
			{ 	displayCool();	}
	});
	$('body').keyup(function(event) {
		event.preventDefault();
		if (event.which == 88) 
			{ 	displayStill();	}
	});



	$('.ryu').mouseenter(function() { displayReady();    })
		     .mouseleave(function() { displayStill();    })
		     .mousedown(function()  { 
	     		playHadouken();
		     	displayThrowing();
		     	$('.hadouken').finish().show()
		         .animate(
      				{'left': '300px'}, 500, 
      				function() {
        				$(this).hide();
        				$(this).css('left', '-212px');
      				}
    				);
		     })
			 .mouseup(function()    { displayReady();    });

});

function displayStill()
{
	hideAll();
	$('.ryu-still').show();
}

function displayReady()
{
	hideAll();
	$('.ryu-ready').show();
}

function displayThrowing()
{
	hideAll();
	$('.ryu-throwing').show();	
}

function displayCool()
{
	hideAll();
	$('.ryu-cool').show();
}

function hideAll()
{
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-cool').hide();
	$('.hadouken').hide();
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
