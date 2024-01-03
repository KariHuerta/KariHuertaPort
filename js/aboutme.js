
$(document).ready(function() {
	
	defaultSettings();
	
	$('input.aboutButton').click(function() {
		var buttonId = $(this)[0].id;
		hideShowDetails(buttonId);	
	});
	
});

function defaultSettings()
{
	$('div.details > *').hide();
	$('div.buttons input[type="button"]').css({ "background-color":"#06194C" });
}

function hideShowDetails(elementID)
{
	defaultSettings();
	$('input#'+elementID).css({ "background-color":"#0C339B" });
	$('div.details [id*="'+elementID+'"]').show();
}