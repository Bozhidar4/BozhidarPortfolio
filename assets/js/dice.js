function rollingDice() {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var result = die1 + die2;

    if (die1 == die2) {
        alert("Congratulations, doubles! You rolled:\n " + die1 + " and " + die2 + " = " + result);
    }
    else {
        alert("You rolled:\n " + die1 + " and " + die2 + " = " + result);
    }
}