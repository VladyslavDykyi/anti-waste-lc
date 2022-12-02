$(document).ready(function () {
	/*--- слайдер на карточке товара ---*/
	$('.product-for').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		dotsClass: "my-dots-bot",
		fade: false,
		asNavFor: '.product-nav',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: true,
				}
			}
		],
	});
	$('.product-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.product-for',
		focusOnSelect: true,
		arrows: true,
		nextArrow: '<div class="nextArrow"></div>',
		prevArrow: '<div class="prevArrow"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: "unslick",
			}
		]
	});
})