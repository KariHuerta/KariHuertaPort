
$(document).ready(function() {
	
	defaultSettings();
	
	$('input.aboutButton').click(function() {
		var buttonId = $(this)[0].id;
		hideShowDetails(buttonId);	
	});
	
	$('input.aboutButton:first-of-type').click();
	
});

function defaultSettings()
{
	$('div.details > *').hide();
	$('div.buttons input[type="button"]').css({ "background-color":"#06194C","color":"#ffffff","font-weight":"normal" });
}

function hideShowDetails(elementID)
{
	defaultSettings();
	$('input#'+elementID).css({ "background-color":"#ffffff","color":"#06194C","font-weight":"bold" });
	$('div.details [id*="'+elementID+'"]').show();
}