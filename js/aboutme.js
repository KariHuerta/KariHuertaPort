
$(document).ready(function() {
	
	$('input.aboutButton').click(function() {
		var buttonId = $(this)[0].id;
		hideShowDetails(buttonId);	
	});
	
});

function defaultSettings()
{
	$('div.details > *').hide();
}

function hideShowDetails(elementID)
{
	$('div.details > *').hide();
	$('div.buttons input[type="button"]').css({ "background-color":"#06194C" });
	$('input#'+elementID).css({ "background-color":"#0C339B" });
	$('div.details [id*="'+elementID+'"]').show();
}