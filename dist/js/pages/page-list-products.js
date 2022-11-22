const arrSvg2 = [
	`Filters
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z" fill="#FEFEFE"/>
	</svg>`,
	`Filters
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M20.781 3.21888C20.8508 3.28854 20.9062 3.37131 20.944 3.46243C20.9818 3.55354 21.0013 3.65122 21.0013 3.74988C21.0013 3.84853 20.9818 3.94621 20.944 4.03733C20.9062 4.12844 20.8508 4.21121 20.781 4.28088L4.28097 20.7809C4.14014 20.9217 3.94913 21.0008 3.74997 21.0008C3.55081 21.0008 3.3598 20.9217 3.21897 20.7809C3.07814 20.64 2.99902 20.449 2.99902 20.2499C2.99902 20.0507 3.07814 19.8597 3.21897 19.7189L19.719 3.21888C19.7886 3.14903 19.8714 3.09362 19.9625 3.05581C20.0536 3.018 20.1513 2.99854 20.25 2.99854C20.3486 2.99854 20.4463 3.018 20.5374 3.05581C20.6285 3.09362 20.7113 3.14903 20.781 3.21888Z" fill="#FEFEFE"></path>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.21888 3.21888C3.14903 3.28854 3.09362 3.37131 3.05581 3.46243C3.018 3.55354 2.99854 3.65122 2.99854 3.74988C2.99854 3.84853 3.018 3.94621 3.05581 4.03733C3.09362 4.12844 3.14903 4.21121 3.21888 4.28088L19.7189 20.7809C19.8597 20.9217 20.0507 21.0008 20.2499 21.0008C20.449 21.0008 20.64 20.9217 20.7809 20.7809C20.9217 20.64 21.0008 20.449 21.0008 20.2499C21.0008 20.0507 20.9217 19.8597 20.7809 19.7189L4.28088 3.21888C4.21121 3.14903 4.12844 3.09362 4.03733 3.05581C3.94621 3.018 3.84853 2.99854 3.74988 2.99854C3.65122 2.99854 3.55354 3.018 3.46243 3.05581C3.37131 3.09362 3.28854 3.14903 3.21888 3.21888Z" fill="#FEFEFE"></path>
	</svg>`,
];

let btn_mob_filter = document.querySelector('#filter-mob');

btn_mob_filter.addEventListener('click', () => {
	const item = btn_mob_filter.parentElement.parentElement.parentElement;

	if (item.classList.contains('active')) {
		btn_mob_filter.innerHTML = arrSvg2[0];
		item.classList.remove('active');
	} else {
		btn_mob_filter.innerHTML = arrSvg2[1];
		item.classList.add('active');
	}
});

let items = document.querySelectorAll('.filter-nav');
items.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
	});
});





let stepsSlider = document.getElementById('steps-slider');
let input0 = document.getElementById('input-with-keypress-0');
let input1 = document.getElementById('input-with-keypress-1');
let inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
	start: [0, 500],
	connect: true,
	tooltips: [true, wNumb({decimals: 1})],
	range: {
		'min': 0,
		'max': 1000
	}
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
	inputs[handle].value = values[handle];
});
// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

	input.addEventListener('change', function () {
		stepsSlider.noUiSlider.setHandle(handle, this.value);
	});

	input.addEventListener('keydown', function (e) {

		let values = stepsSlider.noUiSlider.get();
		let value = Number(values[handle]);

		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
		let steps = stepsSlider.noUiSlider.steps();

		// [down, up]
		let step = steps[handle];

		let position;

		// 13 is entered,
		// 38 is key up,
		// 40 is key down.
		switch (e.which) {

			case 13:
				stepsSlider.noUiSlider.setHandle(handle, this.value);
				break;

			case 38:

				// Get step to go increase slider value (up)
				position = step[1];

				// false = no step is set
				if (position === false) {
					position = 1;
				}

				// null = edge of slider
				if (position !== null) {
					stepsSlider.noUiSlider.setHandle(handle, value + position);
				}

				break;

			case 40:

				position = step[0];

				if (position === false) {
					position = 1;
				}

				if (position !== null) {
					stepsSlider.noUiSlider.setHandle(handle, value - position);
				}

				break;
		}
	});
});