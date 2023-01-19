
// Slick slider
$(document).ready(function(){
	$('.partner-logos').slick({
		slidesToShow: 6 ,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover:false,
		responsive: [{
			breakpoint: 768,
			setting: {
				slidesToShow:4
			}
		}, {
			breakpoint: 520,
			setting: {
				slidesToShow: 3
			}
		}]
	});
});

// feedback slide
$(document).ready(function(){
	$('.feedbacks').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows:true,
		dots: false,
		pauseOnHover:false,
		responsive: [{
			breakpoint: 768,
			setting: {
				slidesToShow:1
			}
		}, {
			breakpoint: 520,
			setting: {
				slidesToShow: 1
			}
		}]
	});
});
