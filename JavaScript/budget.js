// Total player cost calculation
document.getElementById('calculate-player-cost').addEventListener('click', function () {
    if (players.length > 5) {
        players.length = 5
    }
    const totalPlayer = players.length;
    const perPlayerCost = getInputFieldValueById("per-player-cost");
    if (totalPlayer === 0) {
        alert('You have to select one player')
        return;
    }
    else if (perPlayerCost < 0) {
        alert('Input value should be positive');
        return;
    }
    else if (isNaN(perPlayerCost)) {
        alert('You have to input the cost of per player')
        return;
    }
    else {
        const totalPlayerCost = (totalPlayer * perPlayerCost).toFixed(2);
        setTextElementValueById("total-player-cost", totalPlayerCost);
        return totalPlayerCost;
    }
})
// Total expense calculation
document.getElementById("calculate-total-cost").addEventListener('click', function () {
    const totalPlayerCost = getElementValueById("total-player-cost");
    const managerCost = getInputFieldValueById("manager-cost");
    const coachCost = getInputFieldValueById("coach-cost");


    if (managerCost < 0 || coachCost < 0) {
        alert('Input value should be positive');
        return;
    }
    else if (isNaN(managerCost)) {
        alert('You have to input the cost of a manager')
        return;
    }
    else if (isNaN(coachCost)) {
        alert('You have to input the cost of a coach')
        return;
    }
    else {

        const totalCost = (totalPlayerCost + managerCost + coachCost).toFixed(2);
        setTextElementValueById("total-cost", totalCost);
        return totalCost;
    }

})