// チームに振り分ける関数
function assignTeams() {
    const teamCount = parseInt(document.getElementById("team-count").value);
    const playerCount = parseInt(document.getElementById("player-count").value);
    const names = [];
    const teams = {};

    // 入力された名前を取得
    const inputAreas = document.querySelectorAll(".player-input");
    inputAreas.forEach(input => {
        const name = input.value.trim();
        if (name !== "") {
            names.push(name);
        }
    });

    // チームを初期化
    for (let i = 1; i <= teamCount; i++) {
        teams["Team " + i] = [];
    }

    // チームにランダムに名前を振り分ける
    let currentIndex = names.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temporaryValue = names[currentIndex];
        names[currentIndex] = names[randomIndex];
        names[randomIndex] = temporaryValue;
    }

    // チームに名前を振り分ける
    let teamIndex = 0;
    names.forEach(name => {
        teams["Team " + (teamIndex + 1)].push(name);
        teamIndex = (teamIndex + 1) % teamCount;
    });

    // チームを表示
    const teamResults = document.getElementById("team-results");
    teamResults.innerHTML = "";
    for (const [team, players] of Object.entries(teams)) {
        const card = document.createElement("div");
        card.className = "card mb-3";
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = team;
        const list = document.createElement("ul");
        list.className = "list-unstyled";
        players.forEach(player => {
            const listItem = document.createElement("li");
            listItem.textContent = player;
            list.appendChild(listItem);
        });
        cardBody.appendChild(title);
        cardBody.appendChild(list);
        card.appendChild(cardBody);
        teamResults.appendChild(card);
    }
}

// チームをリセットする関数
function resetTeams() {
    document.getElementById("team-results").innerHTML = "";
}

// 入力枠の数を設定する関数
function setPlayerInputs() {
    const playerCount = parseInt(document.getElementById("player-count").value);
    const inputAreas = document.getElementById("input-areas");
    inputAreas.innerHTML = ""; // 一度リセット

    for (let i = 0; i < playerCount; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "form-control player-input";
        input.placeholder = "Player " + (i + 1);
        inputAreas.appendChild(input);
        inputAreas.appendChild(document.createElement("br"));
    }
}

// セレクトボックスの変更時に入力枠を更新する
document.getElementById("player-count").addEventListener("change", setPlayerInputs);

// 初期状態で入力枠を設定する
setPlayerInputs();
