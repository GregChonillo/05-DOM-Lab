function solve() {
	let text = document.getElementById("input").innerText;
	let tempText = text.split(".");
	console.log(tempText.length);
	while (tempText.indexOf("") != -1) {
		tempText.splice(tempText.indexOf(""), 1);
	}
	console.log(tempText.length);
	for (let i = 0; i < Math.ceil(tempText.length / 3); i++) {
		let p = document.createElement("p");
		for (let j = i * 3; j < (i + 1) * 3 && j < tempText.length; j++) {
			p.innerText += tempText[j] + ".";
		}
		document.getElementById("output").append(p);
	}
	console.log(tempText);
}

solve();

// function solve() {
// 	//----------- GET DATA -----------
// 	let p = document.getElementById('input');
// 	let div = document.getElementById('output');

// 	if (p === null || div === null) {
// 	  throw new Error('Something went wrong...');
// 	}

// 	//-------- CONSTRUCT AND FILL HTML --------
// 	let sentences = p.innerHTML.split('.').filter(x => x !== "");
// 	for (let i = 0; i < sentences.length; i += 3) {
// 	  let paragraph = document.createElement('p');
// 	  let str = '';
// 	  for (let j = 0; j < 3; j++) {
// 		if (i + j < sentences.length) {
// 		  str += sentences[i + j] + '.';
// 		}
// 	  }

// 	  paragraph.innerHTML = str;
// 	  div.appendChild(paragraph);
// 	}
//   }
