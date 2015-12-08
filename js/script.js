function listPosts(data) {
	console.log(data);

	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

	output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';
	$.each(data.posts, function(key, val) {

		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		var excerpt = tempDiv.innerHTML;

		output += '<li>';
		output += '<a href="#blogpost" onclick = "showPost(' + val.id + ')">';
		output += (val.thumbnail) ?
		'<img src="' + val.thumbnail + '" alt="' + val.title + '">':
		'<img src="images/viewsourcelogo.png" alt="View Source Logo">';
		output += '<h3>' + val.title + "</h3>";
		output += '<p>' + excerpt + "</p>";
		output += '</a>';
		output += '</li>';
  }); //go through each post
	output += "</ul>";
	$('#postlist').html(output);
} //listPosts

function showPost(id) {
	$.getJSON('http://hzl.ca/webd301_a3/category/weekly-log/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		// Changes navbar title to blog post title
		var output_navbar = data.post.title;
		$('#post-title').html(output_navbar);

		// outputs blog post
		var output = '<h2>' + data.post.title + '</h2>';
		output += data.post.content;
		$('#mypost').html(output);
	});
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

