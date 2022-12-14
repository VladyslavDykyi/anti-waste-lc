const inp_file = document.querySelector('.input-file-chat');
const name_file = document.querySelector('.your-file-name h2');
const size_file = document.querySelector('.your-file-name p');
const file_box = document.querySelector('.your-file');


inp_file.addEventListener('input', () => {
	if (inp_file.files[0].size <= 52428800) {
		file_box.classList.add('active');
		name_file.append(inp_file.files[0].name);
		size_file.append(conv_size(inp_file.files[0].size));
	} else {
		file_box.classList.add('active');
		file_box.classList.add('error');
	}
});
console.log(inp_file, name_file, size_file);

const message_s = document.querySelectorAll('.users-name-message');

resizeP();
function resizeP() {
	message_s.forEach(e => {
		e.style.maxWidth = `${e.parentElement.parentElement.offsetWidth - e.parentElement.previousElementSibling.offsetWidth - e.parentElement.nextElementSibling.offsetWidth - 28}px`;
	});
}
window.addEventListener("resize", resizeP);

function conv_size(b) {
	let file_size_kb = b / 1024;
	let file_size_mb = file_size_kb / 1024;
	if (file_size_kb <= 1024) {
		return file_size_kb.toFixed(3) + ' кб';
	} else if (file_size_kb >= 1024 && file_size_mb <= 1024) {
		return file_size_mb.toFixed(3) + ' мб';
	}
}
