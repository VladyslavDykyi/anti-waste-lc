const avatar = document.querySelector('#avatar');
const img = document.querySelector('.avatar-placeholder-img');
avatar.addEventListener('input', (e) => {
	img.src = URL.createObjectURL(avatar.files[0]);
	img.previousElementSibling.srcset = URL.createObjectURL(avatar.files[0]);
});