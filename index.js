"use strict";
// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_color = void 0;
exports.alien_color = "yellow";
if (exports.alien_color === "green") {
    console.log("Player just earned 5 points");
}
else if (exports.alien_color != "green") {
    console.log("Player just earned 10 points");
}
else {
}
