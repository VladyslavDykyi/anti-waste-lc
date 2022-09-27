$(document).ready(function() {
	$('.js-example-basic-single').select2({
		minimumResultsForSearch: -1,
		theme: "my",
	});
	$('.date').daterangepicker({
		"singleDatePicker": true,
		"startDate": "09/21/2022",
		"endDate": "09/27/2022"
	}, function(start, end, label) {});
});

fileFields('.file-inp');

function fileFields(inp) {
	const avatar = document.querySelectorAll(inp);
	for (let i = 0; i < avatar.length; i++) {
		avatar[i].addEventListener('input', function() {
			let reader = new FileReader();
			reader.onload = function (e) {
				avatar[i].parentElement.nextElementSibling.lastElementChild.setAttribute('src', e.target.result);
				avatar[i].parentElement.nextElementSibling.firstElementChild.srcset = e.target.result;
			}
			reader.readAsDataURL(this.files[0]);
			avatar[i].parentElement.nextElementSibling.lastElementChild.classList.add('active');
			avatar[i].parentElement.classList.add('none');
			avatar[i].parentElement.parentElement.classList.add('active');
			deleteFile(avatar[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild);
		});
	}
	function deleteFile(button) {
		button.addEventListener('click', () => {
			button.parentElement.previousElementSibling.firstElementChild.srcset = '';
			button.parentElement.previousElementSibling.lastElementChild.src = '';
			button.parentElement.previousElementSibling.previousElementSibling.classList.remove('none');
			button.parentElement.previousElementSibling.lastElementChild.classList.remove('active');
			button.parentElement.parentElement.classList.remove('active');
		});
	}
}



