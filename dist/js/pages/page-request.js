let btn_drop = document.querySelectorAll('.main-btn button');
btn_drop.forEach(item => {
	item.addEventListener('click', () => {
		item.parentElement.parentElement.classList.toggle('active');
	});
});






