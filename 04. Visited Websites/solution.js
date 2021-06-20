function solve() {
	let websites = document.querySelectorAll(".link-1");
	Array.from(websites).forEach((website) => {
		website.addEventListener(`click`, (ev) => {
			let paragraph = website.querySelector("p");
			let counter = paragraph.textContent.split(` `)[1];
			counter++;
			paragraph.innerText = `visited ${counter} times`;
		});
	});
}
