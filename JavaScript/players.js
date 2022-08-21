const players = [];
// Function to Display Players
function displayPlayer(updatedPlayers) {
    const tableBody = document.getElementById('selected-players');
    // tableBody.innerHTML = '';

    const tr = document.createElement('tr');
    if (updatedPlayers.length <= 5) {
        for (let i = 0; i < updatedPlayers.length; i++) {
            const name = players[i].playerName;
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
            `;
        }
        tableBody.appendChild(tr);
    }
    else {
        alert('You can select 5 players only!')
    }

}
// Players Selection Function
function playerSelection(element) {
    const playerName = element.parentNode.parentNode.children[0].children[0].innerText;
    element.disabled = true;
    const playerNameObject = { playerName: playerName };
    players.push(playerNameObject);
    displayPlayer(players);
}