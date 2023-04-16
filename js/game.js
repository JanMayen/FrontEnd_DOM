
let field = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]

// выйгришные комбинации
const winCombinations = [
		[{x: 0, y: 0},{x: 1, y: 0},{x: 2, y: 0}],
		[{x: 0, y: 1},{x: 1, y: 1},{x: 2, y: 1}],
		[{x: 0, y: 2},{x: 1, y: 2},{x: 2, y: 2}],

		[{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
		[{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
		[{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],

		[{x: 0, y: 0},{x: 1, y: 1},{x: 2, y: 2}],
		[{x: 2, y: 0},{x: 1, y: 1},{x: 0, y: 2}]
	];

// 'x' - крестик, 'o' - нолик
let activePlayer = 'x';

const game = document.querySelector(".game");

let isEndGame = function() {
	let winner; //доделать

	winCombinations.forEach(winCombination => {
		let match_1 = winCombination[0],
			match_2 = winCombination[1],
			match_3 = winCombination[2];

		const isMatch_x = field[match_1.x][match_1.y] === 'x' 
			&& field[match_2.x][match_2.y] === 'x' 
			&& field[match_3.x][match_3.y] === 'x';

		const isMatch_y = field[match_1.x][match_1.y] === 'o' 
			&& field[match_2.x][match_2.y] === 'o' 
			&& field[match_3.x][match_3.y] === 'o';

		if (isMatch_x || isMatch_y) {
			console.log("WIN!");
			//winner - присвоить победителя
		}
	
	});
	return winner;
}

let togglePlayer = function() {
	activePlayer === 'x' 
		? activePlayer = 'o'
		: activePlayer = 'x';
}

let gameHandler = function(event) {
	const isButton = event.target.classList.contains("btn");
	if (isButton) {
		const button = event.target;
		const x = button.dataset.x;
		const y = button.dataset.y;
		if (field[x][y] === null) {
			button.textContent = activePlayer;
			field[x][y] = activePlayer;
			togglePlayer();
			isEndGame(); //
		}
		console.log(field);
	}
}

game.addEventListener("click", gameHandler);

/*
	Реализовать:
		- сброс полей (обнулить у всех текст-контент и обнулить матрицу)
		- вывод на экран победителя 
*/

