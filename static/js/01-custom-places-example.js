function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				canEdit: false,
				lat: 53.798823,
				lng:-1.5426760000000286,
				name: "Hostcloud Offce 1",
				street: "Over the rainbow, Up high way",
				userData: 99
			},
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 53.79,
				lng:-1.5426760000000286,
				name: "Hostcloud Offce 2",
				street: "Over the rainbow, Up high way",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


