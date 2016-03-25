'use strict';
$(document).ready(function() {
	$('#fullpage').fullpage({
        //Navigation
        menu: '#myMenu',
        sectionsColor: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Album', 'News', 'Photos', 'Discography', 'Videos', 'Shows', 'About', 'Contact'],
        anchors: ['Home', 'Album', 'News', 'Photos', 'Discography', 'Videos', 'Shows', 'About', 'Contact'],
        showActiveTooltip: false,
        slidesNavigation: false,
        responsive: 1210,
        scrollbar: true
	});
});
