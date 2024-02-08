// チーム生成関数
function generateTeams() {
    const teamForm = document.getElementById("team-form");
    const numTeams = parseInt(teamForm.elements["num-teams"].value);
    const randomTeamsDiv = document.getElementById("random-teams");
    randomTeamsDiv.innerHTML = '';

    for (let i = 1; i <= numTeams; i++) {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team");
        teamDiv.innerHTML = "<h3>" + (teamForm.elements["team-name" + i].value || "Team " + i) + "</h3>";

        const numMembers = parseInt(teamForm.elements["num-members-team" + i].value);
        const teamMembers = [];

        for (let j = 1; j <= numMembers; j++) {
            const memberInput = teamForm.elements["team" + i + "-member" + j];
            teamMembers.push(memberInput.value);
        }

        const randomTeam = shuffleArray(teamMembers);

        for (let j = 0; j < randomTeam.length; j++) {
            const listItem = document.createElement("p");
            listItem.textContent = "Member " + (j + 1) + ": " + randomTeam[j];
            teamDiv.appendChild(listItem);
        }

        randomTeamsDiv.appendChild(teamDiv);
    }
}

// 入力欄を更新する関数
function updateTeamInputs() {
    const teamForm = document.getElementById("team-form");
    const numTeams = parseInt(teamForm.elements["num-teams"].value);
    const teamsContainer = document.getElementById("teams-container");
    teamsContainer.innerHTML = '';

    for (let i = 1; i <= numTeams; i++) {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team");
        teamDiv.innerHTML = "<h3>Team " + i + "</h3>";

        const nameLabel = document.createElement("label");
        nameLabel.textContent = "チーム名:";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "team-name" + i;
        nameInput.className = "form-control mb-2";

        const label = document.createElement("label");
        label.textContent = "チーム人数:";
        const select = document.createElement("select");
        select.id = "num-members-team" + i;
        select.className = "form-control";
        select.onchange = updateMemberInputs;
        for (let j = 1; j <= 4; j++) {
            const option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            select.appendChild(option);
        }

        teamDiv.appendChild(nameLabel);
        teamDiv.appendChild(nameInput);
        teamDiv.appendChild(label);
        teamDiv.appendChild(select);

        const memberInputsDiv = document.createElement("div");
        memberInputsDiv.id = "team" + i + "-member-inputs";
        teamDiv.appendChild(memberInputsDiv);

        teamsContainer.appendChild(teamDiv);
    }
}

// チームごとのメンバー数を更新する関数
function updateMemberInputs(event) {
    const select = event.target;
    const teamNumber = select.id.replace("num-members-team", "");
    const numMembers = parseInt(select.value);
    const memberInputsDiv = document.getElementById("team" + teamNumber + "-member-inputs");
    memberInputsDiv.innerHTML = '';

    for (let i = 1; i <= numMembers; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "team" + teamNumber + "-member" + i;
        input.name = "team" + teamNumber + "-member" + i;
        input.className = "form-control mb-2";
        input.placeholder = "Member " + i;
        input.required = true;
        memberInputsDiv.appendChild(input);
    }
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 初期状態で入力欄を生成
updateTeamInputs();
