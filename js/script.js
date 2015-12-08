function listPosts(data) {
  console.log(data);
}

$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header']" ).toolbar();
});

$(document).on( "swipeleft swiperight", "#home", function( e ) {
				// We check if there is no open panel on the page because otherwise
				// a swipe to close the left panel would also open the right panel (and v.v.).
				// We do this by checking the data that the framework stores on the page element (panel: open).
				if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
					if ( e.type === "swipeleft" ) {
						$( "#right-panel" ).panel( "open" );
					} else if ( e.type === "swiperight" ) {
						$( "#left-panel" ).panel( "open" );
					}
				}
			});

var mapCenter = new google.maps.LatLng(43.6500304,-79.3994166);
	function initialize() {
		var mapProp = {
			center: mapCenter,
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

		var marker = new google.maps.Marker({
			position: mapCenter
		});

		marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);			