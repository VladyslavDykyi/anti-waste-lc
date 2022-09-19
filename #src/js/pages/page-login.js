const eyePassword = document.querySelectorAll('.eye-through');


for (let i = 0; i < eyePassword.length; i++) {
	let eyeClose = eyePassword[i].querySelector('.eye-close');
	let eyeOpen = eyePassword[i].querySelector('.eye-open');
	eyePassword[i].addEventListener('click', () => {
		if (eyePassword[i].previousElementSibling.getAttribute('type') === 'password') {
			eyePassword[i].previousElementSibling.setAttribute('type', 'text');
			eyeClose.classList.remove('active');
			eyeOpen.classList.add('active');
		} else {
			eyePassword[i].previousElementSibling.setAttribute('type', 'password');
			eyeClose.classList.add('active');
			eyeOpen.classList.remove('active');
		}
	})
}