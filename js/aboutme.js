
$(document).ready(function() {
	
	$('div.details > *').hide();
	$('input.aboutButton').click(function() {
		var buttonId = $(this)[0].id;
		hideShowDetails(buttonId);	
	});
	
});

function hideShowDetails(elementID)
{
	$('div.details > *').hide();
	$('div.details [id*="'+elementID+'"]').show();
}