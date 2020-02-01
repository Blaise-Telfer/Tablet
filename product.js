$(function() {
	const $gallery = $('.gallery a').simpleLightbox();
});

TweenMax.from(".tab-pic", 3, {
	delay: 0.5,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
});
TweenMax.from(".nav", 3, {
	delay: 1.5,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
});
TweenMax.from(".description", 3, {
	delay: 2.0,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
});
