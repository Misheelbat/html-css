const textBody = document.querySelector('.text-content');
const numberBody = document.querySelector('.number');
const dice = document.querySelector('.dice');

/* fetch('https://api.adviceslip.com/advice')
	.then(res => res.json())
	.then(data => console.log(data.slip.advice));
 */

const fetchAdvice = async () => {
	const rand = Math.floor(Math.random() * 100);
	const res = await fetch(`https://api.adviceslip.com/advice/${rand}`);
	return res.json();
};
const displayText = async () => {
	const data = await fetchAdvice();
	numberBody.textContent = `ADVICE #${data.slip.id}`;
	textBody.textContent = `"${data.slip.advice}"`;
};
displayText();
dice.addEventListener('click', () => {
	displayText();
});
