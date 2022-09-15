const eyePassword = document.querySelector('.eye-through'),
	eyeClose = eyePassword.querySelector('.eye-close'),
	eyeOpen = eyePassword.querySelector('.eye-open');

eyePassword.addEventListener('click', () => {
	if(eyePassword.previousElementSibling.getAttribute('type') === 'password') {
		eyePassword.previousElementSibling.setAttribute('type', 'text');
		eyeClose.classList.remove('active');
		eyeOpen.classList.add('active');
	} else {
		eyePassword.previousElementSibling.setAttribute('type', 'password');
		eyeClose.classList.add('active');
		eyeOpen.classList.remove('active');
	}
})