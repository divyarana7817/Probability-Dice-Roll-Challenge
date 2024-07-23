document.addEventListener('DOMContentLoaded', function() {
    const rollBtn = document.getElementById('rollBtn');
    const diceDiv = document.getElementById('dice');
    const outcomeDiv = document.getElementById('outcome');

    rollBtn.addEventListener('click', function() {
        const diceRoll = rollDice();
        displayDice(diceRoll);
        displayOutcome(diceRoll);
    });

    function rollDice() {
        // Roll a six-sided die and return the result
        return Math.floor(Math.random() * 6) + 1;
    }

    function displayDice(diceRoll) {
        // Display the rolled dice value
        diceDiv.textContent = `🎲 ${diceRoll}`;
    }

    function displayOutcome(diceRoll) {
        // Display the outcome based on the rolled value
        if (diceRoll === 1) {
            outcomeDiv.textContent = 'You rolled a 1. Better luck next time!';
        } else if (diceRoll >= 2 && diceRoll <= 5) {
            outcomeDiv.textContent = 'You rolled between 2 and 5. Keep rolling!';
        } else {
            outcomeDiv.textContent = 'Congratulations! You rolled a 6!';
        }
    }
});
