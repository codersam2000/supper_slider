$(document).ready(function(){
	const galleryTop = new Swiper('.gallery-top', {
  // Navigation arrows
  	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	loop:true,
	slidesPerView:1,
	spaceBetween:10,
	loopedSlides:50
	});
	const galleryThumbs = new Swiper(".gallery-thumbs",{
		loop:true,
		slidesPerView:"auto",
		spaceBetween:10,
		slideToClickedSlide:true,
		centeredSlides:true,
		loopedSlides:50
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
	$(window).resize(function(){
		galleryThumbs.update();
		galleryTop.update();
	});

});