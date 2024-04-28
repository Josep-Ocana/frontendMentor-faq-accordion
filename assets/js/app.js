// Selectors
const button = document.querySelectorAll('.accordion-container-header');

// Iterate buttons of accordion
button.forEach(element => {
	element.addEventListener('click', e => {
		const idButton = element.getAttribute('aria-controls');
		const content = document.getElementById(idButton);
		const id = idButton.split('-')[2];
		const icon = document.getElementById(id);

		// Show / hide questions' content and change icon
		if (content.hidden) {
			content.hidden = false;
			icon.src = '/assets/images/icon-minus.svg';
		} else {
			content.hidden = true;
			icon.src = '/assets/images/icon-plus.svg';
		}
	});
});
