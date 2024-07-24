(function($) {

	'use strict';

	$(window).on('load', function() {

	// map

	function map() {

		var map = $('#map');

		if (map.length > 0){

			var apiKey = map.attr('data-api-key'),
				apiURL;

			if (apiKey) {
				apiURL = 'https://maps.google.com/maps/api/js?key='+ apiKey +' &sensor=false';	
			} 
			
			else {
				apiURL = 'https://maps.google.com/maps/api/js?sensor=false';
			};

			$.getScript( apiURL , function(data, textStatus, jqxhr){
				map.each(function(){

					var current_map = $(this),

						latlng = new google.maps.LatLng(current_map.attr('data-longitude'),

						current_map.attr('data-latitude')),

						point = current_map.attr('data-marker'),

						center = {
							lat: 40.730610,
							lng: -73.935242,
						},

						markerPos = {
							lat: 40.730610,
							lng: -73.935242,
						},

						myOptions = {
							zoom: 10,
							center: center,
							disableDefaultUI: true,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							mapTypeControl: false,
							scrollwheel: false,
							draggable: true,
							panControl: false,
							zoomControl: false,
							disableDefaultUI: true,
							styles: [
								{
									"featureType": "administrative",
									"elementType": "labels.text.fill",
									"stylers": [
										{
											"color": "#212326"
										}
									]
								},
								{
									"featureType": "administrative.locality",
									"elementType": "labels.text.fill",
									"stylers": [
										{
											"color": "#464646"
										}
									]
								},
								{
									"featureType": "landscape",
									"elementType": "all",
									"stylers": [
										{
											"color": "#F8F8F9"
										}
									]
								},
								{
									"featureType": "poi",
									"elementType": "all",
									"stylers": [
										{
											"visibility": "off"
										}
									]
								},
								{
									"featureType": "road",
									"elementType": "all",
									"stylers": [
										{
											"saturation": -100
										},
										{
											"lightness": 45
										}
									]
								},
								{
									"featureType": "road",
									"elementType": "labels",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "road",
									"elementType": "labels.icon",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "transit",
									"elementType": "all",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "road.highway",
									"elementType": "all",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "road.arterial",
									"elementType": "labels.icon",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "transit",
									"elementType": "all",
									"stylers": [
										{
											"visibility": "on"
										}
									]
								},
								{
									"featureType": "water",
									"elementType": "all",
									"stylers": [
										{
											"color": "#E2E3E7"
										},
										{
											"visibility": "on"
										}
									]
								}
							]
						};

					var map = new google.maps.Map(current_map[0], myOptions);

					var marker = new google.maps.Marker({
						map: map,
						icon: {
							size: new google.maps.Size(59,69),
							origin: new google.maps.Point(0,0),
							anchor: new google.maps.Point(0,69),
							url: point
						},
						position: markerPos
					});

					google.maps.event.addDomListener(window, "resize", function(){
						var center = map.getCenter();
						google.maps.event.trigger(map, "resize");
						map.setCenter(center);
					});
				});
			});
		};
	}	

	map();

	});

	jQuery(document).ready(function () {
		
		// object fit

		objectFitImages();

		// header

		$(window).scroll(function(){

			var header = $('header.header');
			var scroll = $(window).scrollTop();
		
			if (scroll >= 1) {
				header.addClass('header--fixed');
			}

			else {
				header.removeClass('header--fixed');
			}

		});

		// header

		$(window).scroll(function(){

			var header = $('header.header--front_3');
			var scroll = $(window).scrollTop();
		
			if (scroll >= 40) {
				header.addClass('header--sticky');
			}

			else {
				header.removeClass('header--sticky');
			}

		});

		// aside dropdown

		function asideDropdown() {

			var dropdown = $('.aside-dropdown');

			if (!dropdown.length) return;

			var trigger = $('.dropdown-trigger');
			var	close = $('.aside-dropdown__close');
			var introLink = $('.aside-dropdown .main-menu__link--scroll');

			trigger.on('click', function(){
				dropdown.addClass('aside-dropdown--active');
			});

			close.on('click', function(){
				dropdown.removeClass('aside-dropdown--active');
			});

			introLink.on('click', function(){
				dropdown.removeClass('aside-dropdown--active');
			});

			$(document).on('click', function(event) {
				if ( $(event.target).closest('.dropdown-trigger, .aside-dropdown__inner').length) return;
				dropdown.removeClass('aside-dropdown--active');
				event.stopPropagation();
			});

		}

		asideDropdown();

		// video trigger

		function videoTrigger() {

			var trigger = $('.video-trigger');

			if (!trigger.length) return;

			trigger.fancybox();

		}

		videoTrigger();

		// alert close

		$('.alert__close').on('click', function () {
			$(this).parent('.alert').fadeOut(300);
		});

		// accordion

		function accordion () {

			var accordion = $('.accordion');

			if (!accordion.length) return;

			var close = $('.accordion .accordion__close');

			close.on('click', function () {
				$(this).toggleClass('accordion__close--active').parents().children('.accordion__text-block').stop().slideToggle(300);
			});

		}

		accordion ();

		// parallax

		function parallax() {

			var parallax = $('.jarallax');

			if (!jarallax.length) return;

			parallax.jarallax({
				speed: 0.3
			});

		}

		parallax();

		// tabs

		function tabs() {

			var tabs = $('.tabs');

			if (!tabs.length) return;

			tabs.responsiveTabs({
				startCollapsed: 'false'
			});

		}

		tabs();

		// counter

		function counter() {

			var counter = $('.js-counter');

			if (!counter.length) return;

			counter.counterUp({
				delay: 10,
				time: 1500,
			});

		}

		counter();

		// masonry projects

		function masonryProjects() {

			var masonryProjects = $('.projects-masonry');

			if (!masonryProjects.length) return;

			masonryProjects.isotope({
				itemSelector: '.projects-masonry__item',
				percentPosition: true,	
			});

		}

		masonryProjects();

		// masonry gallery

		function masonryGallery() {

			var masonryGallery = $('.gallery-masonry');

			if (!masonryGallery.length) return;

			masonryGallery.isotope({
				itemSelector: '.gallery-masonry__item',
				percentPosition: true,
			});

			var filter = $('.filter-panel__item');

			filter.on('click', function () {

				var filterValue = $(this).attr('data-filter');

				masonryGallery.isotope({ 
					filter: filterValue ,
				});

			});

			filter.on('click', function () {

				filter.removeClass('filter-panel__item--active');
				$(this).addClass('filter-panel__item--active');

			});

		}

		masonryGallery();

		// range slider

		function rangeSlider () {

			var rangeSlider = $('.range-slider .range-slider__bar');

			if (!rangeSlider.length) return;

			var min = $('.range-slider__min');
			var	max = $('.range-slider__max');
			
			rangeSlider.ionRangeSlider({
				type: 'double',
				min: 0,
				max: 1200,
				from: 50,
				to: 900,
				skin: 'round',
				step: 10,
				onChange: function (data) {

					min.val(data.from);
					max.val(data.to);

				}
			});

		}

		rangeSlider();

		// quantity

		function quantity() {

			var count = $('.cart-item__count');

			if (!count.length) return;

			var	minus = $('.cart-item__minus');
			var	plus = $('.cart-item__plus');

			minus.on('click', function () {

				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
				
			});
		
			plus.on('click', function () {

				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;

			});

		}
	
		quantity();

		// form quantity

		function formQuantity() {

			var count = $('.form__count');

			if (!count.length) return;

			var	minus = $('.form__minus');
			var	plus = $('.form__plus');

			minus.on('click', function () {

				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
				
			});
		
			plus.on('click', function () {

				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;

			});

		}
	
		formQuantity();
	
		// nice select

		function select() {

			var select = $('.form__select');

			if (!select.length) return;

			select.niceSelect({
			});

		}

		select();

		function asideTrigger() {

			var trigger = $('.shop__aside-trigger');

			if (!trigger.length) return;

			trigger.on('click', function () {

				$('body').find('.aside-holder').toggleClass('aside-holder--visible');
				$('body').find('.shop__backdrop').toggleClass('shop__backdrop--visible');

			});

			var close = $('.shop__aside-close');

			close.on('click', function () {

				$('body').find('.aside-holder').removeClass('aside-holder--visible');
				$('body').find('.shop__backdrop').removeClass('shop__backdrop--visible');

			});

			var backdrop = $('.shop__backdrop');

			backdrop.on('click', function () {
				$(this).removeClass('shop__backdrop--visible');
				$('body').find('.aside-holder').removeClass('aside-holder--visible');
			});

		}

		asideTrigger();

		// mobile menu

		$('.aside-menu__item--has-child a').on('click', function () {

			$(this).parent().children('.aside-menu__sub-list').stop().slideToggle(300);

		});

		// scroll to id

		function scrollTo () {

			var scrollTo = $('a.anchor[href^="#"]');

			if (!scrollTo.length) return;

			scrollTo.on("click", function (e) {

				var anchor = $(this);

				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 600);

				e.preventDefault();
				
			});

		}

		scrollTo();

		// scroll to id

		function scrollToId() {

			var scroll = $('a.main-menu__link--scroll');

			if(!scroll.length) return;

			scroll.mPageScroll2id({
				highlightClass: 'main-menu__link--highlighted',
			});

		}

		scrollToId();

	// |----------~-----------------~----------| //	
	// |------___________________________------| //
	// |-----! S L I D E R S   S T A R T !-----| //
	// |------‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾------| //
	// |----------~-----------------~----------| //	


		// promo slider

		function promoSlider () {

			var promoSlider = $('.promo-slider');

			if (!promoSlider.length) return;

			var status = $('.promo-slider__count');
			var	prev = $('.slider__nav--promo .slider__prev');
			var	next = $('.slider__nav--promo .slider__next');


			promoSlider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
				var i = (currentSlide ? currentSlide : 0) + 1;
				status.text(i + '/' + slick.slideCount);
			});
		
			promoSlider.slick({
				fade: true,

				adaptiveHeight: true,
				infinite: true,
				speed: 1200,
				prevArrow: prev,
				nextArrow: next,
			});

		}

		promoSlider ();

		// dual slider

		function dualSlider() {

			var slider = $('.main-slider');

			if (!slider.length) return;

			slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				asNavFor: '.nav-slider',
				fade: true,
			});

			var navSlider = $('.nav-slider');

			navSlider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.main-slider',
				focusOnSelect: true,
				arrows: false,
			});

		}
 	
		dualSlider();

		// project slider

		function projectsSlider() {

			var projectsSlider = $('.projects-slider');

			if (!projectsSlider.length) return;

			var prev = $('.projects-slider__nav .slider__prev');
			var next = $('.projects-slider__nav .slider__next');

			projectsSlider.slick({
				slidesToShow: 3,
				prevArrow: prev,
				nextArrow: next,
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]
			})

		}

		projectsSlider();

		// related slider

		function relatedSlider () {

			var relatedSlider = $('.related-slider');

			if (!relatedSlider.length) return;

			var prev = $('.related-slider__nav .slider__prev');
			var next = $('.related-slider__nav .slider__next');

			relatedSlider.slick({

				slidesToShow: 4,
				slidesToScroll: 1,
				prevArrow: prev,
				nextArrow: next,
				
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}]

			});

		}

		relatedSlider();

		// instagram slider

		function instagramSlider() {

			var instagramSlider = $('.instagram-slider');

			if (!instagramSlider.length) return;

			var prev = $('.instagram-slider__nav .slider__prev');
			var	next = $('.instagram-slider__nav .slider__next');

			instagramSlider.slick({
				prevArrow: prev,
				nextArrow: next,
				slidesToShow: 6,
				responsive: [{
					breakpoint: 1600,
					settings: {
						slidesToShow: 5,
					}
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}]
			});

		}

		instagramSlider();

		// donors slider

		function donorsSlider() {

			var donorsSlider = $('.donors-slider');
			var	styleOne = $('.donors-slider--style-1');
			var	styleTwo = $('.donors-slider--style-2');

			if (!donorsSlider.length) return;

			styleOne.slick({
				arrows: false,
				dots: true,
				slidesToShow: 4,
				adaptiveHeight: true,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}]
			});

			styleTwo.slick({
				rows: 2,
				slidesPerRow: 4,
				arrows: false,
				dots: true,
				adaptiveHeight: true,
				responsive: [{
					breakpoint: 992,
					settings: {
						rows: 2,
						slidesPerRow: 3,
					}
				}, {
					breakpoint: 768,
					settings: {
						rows: 2,
						slidesPerRow: 2,
					}
				}, {
					breakpoint: 765,
					settings: {
						rows: 2,
						slidesPerRow: 1,
					}
				}]
			});

		}

		donorsSlider();

		// causes slider

		function causesSlider() {

			var causesSlider = $('.causes-slider');

			if (!causesSlider.length) return;

			var prev = $('.causes-slider__nav .slider__prev');
			var	next = $('.causes-slider__nav .slider__next');

			causesSlider.slick({
				slidesToShow: 3,
				prevArrow: prev,
				nextArrow: next,
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]
			});

		}

		causesSlider();

		// testimonials-1

		function testimonialsFirst () {

			var testimonials = $('.testimonials-slider--style-1');

			if (!testimonials.length) return;

			var prev = $('.testimonials-style-1__nav .slider__prev');
			var	next = $('.testimonials-style-1__nav .slider__next');

			testimonials.slick({
				prevArrow: prev,
				nextArrow: next,
				adaptiveHeight: true,
			});

		}

		testimonialsFirst ();

		// testimonials-2

		function testimonialsSecond () {

			var testimonials = $('.testimonials-slider--style-2');

			if (!testimonials.length) return;

			var prev = $('.testimonials-style-2__nav .slider__prev');
			var	next = $('.testimonials-style-2__nav .slider__next');

			testimonials.slick({
				prevArrow: prev,
				nextArrow: next,
				adaptiveHeight: true,
			});

		}

		testimonialsSecond ();

		// testimonials-3

		function testimonialsThird () {

			var testimonials = $('.testimonials-slider--style-3');

			if (!testimonials.length) return;

			var prev = $('.testimonials-style-3__nav .slider__prev');
			var	next = $('.testimonials-style-3__nav .slider__next');

			testimonials.slick({
				prevArrow: prev,
				nextArrow: next,
				adaptiveHeight: true,
				slidesToShow: 3,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}],
			});

		}

		testimonialsThird ();

		// items slider

		function itemsSlider() {

			var itemsSlider = $('.items-slider');

			if (!itemsSlider.length) return;

			var prev = $('.items-slider__nav .slider__prev');
			var	next = $('.items-slider__nav .slider__next');

			itemsSlider.slick({
				prevArrow: prev,
				nextArrow: next,
				fade: true,
			});

		}

		itemsSlider();

		function pagesSlider() {

			var slider = $('.pages-slider');

			if(!slider.length) return;

			var prev = $('.pages-slider__nav .slider__prev');
			var	next = $('.pages-slider__nav .slider__next');

			slider.slick({
				slidesToShow: 3,
				prevArrow: prev,
				nextArrow: next,
				adaptiveHeight: true,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]
			});

		}

		pagesSlider();

	// |----------~-------------~----------| //	
	// |------_______________________------| //
	// |-----! S L I D E R S   E N D !-----| //
	// |------‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾------| //
	// |----------~-------------~----------| //	

	});

}(jQuery));