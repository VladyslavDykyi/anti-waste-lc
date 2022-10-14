const blockFirst = document.querySelector('#first_block');
const blockSecond = document.querySelector('#second_block');

const inputFirst = blockFirst.querySelectorAll('input');
const inputSecond = blockSecond.querySelectorAll('input');

const select = blockSecond.querySelector('select');

const btnFirst = blockFirst.querySelector('button');
const btnPrevious = blockSecond.querySelector('#previous');
const btnSecond = blockSecond.querySelector('#submit');

let status1,status2,status3,status4,status5 = false;
let status11,status22,status33,status44,status55,status66,status77 = false;


inputFirst.forEach((item) => {
		item.addEventListener('input', function() {
			status1 = inputFirst[0].value.length === 0;
			status2 = inputFirst[1].value.length === 0;
			status3 = inputFirst[2].value.length === 0;
			status4 = inputFirst[3].value.length === 0;
			status5 = inputFirst[4].value.length <= 5;
			if (!status1 && !status2 && !status3 && !status4 && !status5) {
				btnFirst.removeAttribute('disabled');
				btnFirst.addEventListener('click', nextStep );
			} else {
				btnFirst.setAttribute("disabled", "disabled");
				btnFirst.removeEventListener('click', nextStep, false);
			}
		});
	}
);
function nextStep() {
	const blocksForm = document.querySelectorAll('.form-register-item');
	const main = document.querySelector('.bg-site');
	blocksForm[0].classList.remove('active');
	blocksForm[1].classList.add('active');
	main.classList.add('active');
}
btnPrevious.addEventListener('click', previousStep);
function previousStep() {
	const blocksForm = document.querySelectorAll('.form-register-item');
	const main = document.querySelector('.bg-site');
	blocksForm[1].classList.remove('active');
	blocksForm[0].classList.add('active');
	main.classList.remove('active');
}

inputSecond.forEach((item) => {
	item.addEventListener('input', function () {
		status11 = inputSecond[0].value.length === 0;
		status22 = inputSecond[1].value.length === 0;
		status33 = inputSecond[3].value.length === 0;
		status44 = inputSecond[4].value.length === 0;
		status77 = select.value.length === 0;
		status55 = inputSecond[6].checked;
		status66 = inputSecond[7].checked;
		if (!status11 && !status22 && !status33 && !status44 && !status77 && status55 && status66) {
			btnSecond.removeAttribute('disabled');
		} else {
			btnSecond.setAttribute("disabled", "disabled");
		}
	});
});

$('.js-example-basic-single').on('select2:select', function (e) {
	let data = e.params.data.id.length;
	status11 = inputSecond[0].value.length === 0;
	status22 = inputSecond[1].value.length === 0;
	status33 = inputSecond[3].value.length === 0;
	status44 = inputSecond[4].value.length === 0;
	status77 = data === 0;
	status55 = inputSecond[6].checked === false;
	status66 = inputSecond[7].checked === false;
	if (!status11 && !status22 && !status33 && !status44 && !status77 && !status55 && !status66) {
		btnSecond.removeAttribute('disabled');
	} else {
		btnSecond.setAttribute("disabled", "disabled");
	}
});