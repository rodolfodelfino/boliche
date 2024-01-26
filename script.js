document.addEventListener("DOMContentLoaded", function () {
    const numberOfTeams = 6;
    const numberOfFrames = 10;

    // Gera a tabela de pontuação
    function generateScoreboard() {
        const scoreboard = document.getElementById("scoreboard");

        for (let i = 1; i <= numberOfTeams; i++) {
            const teamScoreDiv = document.createElement("div");
            teamScoreDiv.classList.add("team-score");
            teamScoreDiv.innerHTML = `<span>Time ${i}</span>`;
            
            for (let j = 1; j <= numberOfFrames; j++) {
                const input = document.createElement("input");
                input.type = "number";
                input.min = "0";
                input.max = "10";
                input.step = "1";
                input.dataset.team = i;
                input.dataset.frame = j;
                teamScoreDiv.appendChild(input);
            }

            const totalSpan = document.createElement("span");
            totalSpan.classList.add("total");
            teamScoreDiv.appendChild(totalSpan);

            scoreboard.appendChild(teamScoreDiv);
        }

        const calculateButton = document.createElement("button");
        calculateButton.textContent = "Calcular Total";
        calculateButton.addEventListener("click", calculateTotal);
        scoreboard.appendChild(calculateButton);
    }

    // Calcula o total para cada time
    function calculateTotal() {
        const teamScoreDivs = document.querySelectorAll(".team-score");

        teamScoreDivs.forEach(teamScoreDiv => {
            const inputs = teamScoreDiv.querySelectorAll("input");
            let total = 0;

            inputs.forEach(input => {
                total += parseInt(input.value) || 0;
            });

            const totalSpan = teamScoreDiv.querySelector(".total");
            totalSpan.textContent = `Total: ${total}`;
        });
    }

    generateScoreboard();
});
