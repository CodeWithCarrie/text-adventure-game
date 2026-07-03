/**** MAIN EXECUTION CODE ****/

import Game from "./classes/Game.js";

/*
   This simulation of the opening sequence of the classic 1986 NES game, 
   The Legend of Zelda, should give you an idea of how to think about 
   building an application modularly with classes and helper functions.
*/

function runProgram() {
	// Instantiate our unified modular controller engine
	const zeldaGame = new Game();

	// Run introduction text panel sequence
	zeldaGame.displayIntroduction();

	// CORE GAME INTERACTION LOOP: Keeps turning until conditions flags drop
	while (!zeldaGame.isGameOver) {
		zeldaGame.playNextTurn();
	}

	console.log("\n----------------------- Thanks for playing! ----------------------\n");
}

runProgram();
