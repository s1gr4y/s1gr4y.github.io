//Util.js:

let starPosLeft = [];
let starPosRight = [];

let blkLeft = document.getElementById("star_blockLeft");
let textBlk = document.getElementById("textBLK");
let sizeHeight = parseInt(textBlk.offsetHeight);
blkLeft.style.height = sizeHeight + "px";

let sizeLeft = parseInt(getComputedStyle(blkLeft).height)/90;	//every 90 pixels should have 1 star
for (let i = 0; i < sizeLeft; i++) {
	let level = Math.floor(i/4);
	let horz = i % 4;
	starPosLeft.push({'number':i, 'x':(Math.floor(Math.random() * 61) - 30) + (70), 'y':(Math.floor(Math.random() * 51) - 30) + (85 * i + 50)});
	//starPosLeft.push({'number':i, 'x':(Math.floor(Math.random() * 61) - 30) + (70), 'y':(Math.floor(Math.random() * 71) - 40) + (140 * Math.floor(i/2)) + 45});
	//starPos.push({'number':i, 'x':(Math.floor(Math.random() * 41) - 20) + (((i % 2) + 1) * 75), 'y':(Math.floor(Math.random() * 81) - 40) + ((Math.floor(i/4) * 150)) + 80});	//new Object() or {}
}

let blkRight = document.getElementById("star_blockRight");
blkRight.style.height = sizeHeight + "px";
let sizeRight = parseInt(getComputedStyle(blkRight).height)/90;	//every 90 pixels should have 1 star
for (let i = 0; i < sizeRight; i++) {
	let level = Math.floor(i/4);
	let horz = i % 4;
	starPosRight.push({'number':i, 'x':(Math.floor(Math.random() * 61) - 30) + (70), 'y':(Math.floor(Math.random() * 51) - 30) + (85 * i + 50)});
	//starPos.push({'number':i, 'x':(Math.floor(Math.random() * 41) - 20) + (((i % 2) + 1) * 75), 'y':(Math.floor(Math.random() * 81) - 40) + ((Math.floor(i/4) * 150)) + 80});	//new Object() or {}
}

console.log("Nice too see you here...");

function set_stars_pos_Left() {
	let id = null;
	const elem = document.getElementById("star_blockLeft");
	//let lmao = document.createElement("div");
	//lmao.textContent = 'Hello world';
	//elem.appendChild(lmao);

	for (let i = 0; i < starPosLeft.length; i++) {
		//let part = elem.cloneNode(true);
		let new_row = document.createElement("img");
		new_row.className = "star";
		new_row.id = "star" + i;
		new_row.style.top = starPosLeft[i].y + "px";
		if (i % 2 == 0) {
			new_row.style.left = starPosLeft[i].x + "px";
		} else {
			new_row.style.right = starPosLeft[i].x + "px";
		}
		let picType = Math.floor(Math.random() * 10);	//0-9
		if (picType >= 4) {
			new_row.src="imgs/star_white.gif";
		} else {
			new_row.src="imgs/star_white_short.gif";
		}
		elem.appendChild(new_row);
	}
}

function set_stars_pos_Right() {
	let id = null;
	const elem = document.getElementById("star_blockRight");
	//let lmao = document.createElement("div");
	//lmao.textContent = 'Hello world';
	//elem.appendChild(lmao);

	for (let i = 0; i < starPosRight.length; i++) {
		//let part = elem.cloneNode(true);
		let new_row = document.createElement("img");
		new_row.className = "star";
		new_row.id = "star" + i;
		new_row.style.top = starPosRight[i].y + "px";
		if (i % 2 == 0) {
			new_row.style.right = starPosRight[i].x + "px";
		} else {
			new_row.style.left = starPosRight[i].x + "px";
		}
		let picType = Math.floor(Math.random() * 10);
		if (picType >= 4) {
			new_row.src="imgs/star_white.gif";
		} else {
			new_row.src="imgs/star_white_short.gif";
		}
		elem.appendChild(new_row);
	}
}
set_stars_pos_Left();
set_stars_pos_Right();

