if (screen.width <= 768 ) {
	const selectWord = document.querySelector('.philter-mob');
	const selectCont = document.querySelector('.philter-wrapper');
	const selectList = document.querySelector('.philter-list');
	const selectLink = document.querySelectorAll('.philter-link');

	selectWord.addEventListener('click', e => {
		e.stopPropagation();
		selectCont.classList.toggle('active');
		selectList.classList.toggle('active');
	});
	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target === selectCont || selectCont.contains(target);
		let its_btn = target === selectWord;
		let menu_is_active = selectCont.classList.contains('active');

		if (!its_menu && !its_btn && menu_is_active || selectLink) {
			selectCont.classList.remove('active');
		}
	});

	selectLink.forEach(item => {
		item.addEventListener('click', e => {
			let target = e.target;
			selectWord.firstElementChild.innerHTML = target.innerHTML;
			selectList.classList.remove('active');
		});
	});
}
