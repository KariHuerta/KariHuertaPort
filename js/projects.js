$(document).ready(function() {
	
	defaultSettings();
	
	$('section#projects ul li').click(function() {
		var buttonId = $(this)[0].id;
		hideShowDetails(buttonId);	
	});
	
	$('section#projects ul li:first-of-type').click();
	
});

function defaultSettings()
{
	$('div.projectDet').hide();
	$('section#projects ul li').css({ "background-color":"#06194C","color":"#ffffff","font-weight":"normal" });
}

function hideShowDetails(elementID)
{
	defaultSettings();
	$('li#'+elementID).css({ "background-color":"#ffffff","color":"#06194C","font-weight":"bold" });
	$('div[id="'+elementID+'Data"]').show();
}