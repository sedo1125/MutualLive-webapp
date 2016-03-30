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
        showActiveTooltip: true,
        slidesNavigation: false,
        responsive: 1200,
        scrollbar: true,
				touchSensitivity: 15
	});

        $('.navbar-nav li a').click(function() {
          $('.navbar-collapse').collapse('hide');
        });

        $('#myVideo').click( function (){
            $(this).prop('muted', !$(this).prop('muted'));
            $('.mute').toggle();
        });

});
