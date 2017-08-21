$(document).ready(function() {
    var sideNavOpen = false;

	$('#ham-menu').click(function() {
		if (!sideNavOpen) {
			$('html').css('overflow', 'hidden');
			$('#hidden-layer').css('display', 'block');
			$('#side-nav').css('left', '0px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#header').css('background-color', '#262634');
			$('#header').css('box-shadow', '0px 2px 5px 0px rgba(0,0,0,0.75)');
			$('#side-nav').css('box-shadow', '1px 0px 9px 1px rgba(112,112,112,1)');
		}
		else {
			$('html').css('overflow', 'auto');
			$('#hidden-layer').css('display', 'none');
			$('#side-nav').css('left', '-150px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#side-nav').css('box-shadow', 'none');
		}
		sideNavOpen = !sideNavOpen;
	});

	$("#side-nav > div:not('.side-dropdown-menu'), #hidden-layer").click(function () {
		$('html').css('overflow', 'auto');
		$('#hidden-layer').css('display', 'none');
		$('#side-nav').css('left', '-150px');
		$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
		$('#side-nav').css('box-shadow', 'none');
		sideNavOpen = !sideNavOpen;
	});

	$(window).resize(function() {
		if (sideNavOpen && $(window).width() >= 1024) {
	  		$('html').css('overflow', 'auto');
			$('#hidden-layer').css('display', 'none');
			$('#side-nav').css('left', '-150px');
			$('#side-nav').css('transition', 'left 0.2s linear 0s, box-shadow 0.2s linear 0s');
			$('#side-nav').css('box-shadow', 'none');
			sideNavOpen = !sideNavOpen;
		}
		if ($(window).width() >= 1024) {
			$('#filters').css('display', 'inline-block');
		}
		else {
			$('#filters').css('display', 'none');
		}
	});
});