
var userPlacement = 2;
var userDivision = 5-1;
var gameType = 0;
var teamSize =2;
var totalEliminations = 2;


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function submitButton() {
    let checkBox = document.getElementById("gameTypeArena");
    if(checkBox.checked == true){
        gameType = 1;
    }
    else {
        gameType = 2;
    }
    userDivision = document.getElementById("userDiv").value;
    teamSize = document.getElementById("userTeamSize").value;
    userPlacement = document.getElementById("userPlacement").value;
    totalEliminations = document.getElementById("userElims").value;
    main()

}
var userPlacementPoints = 0;

const tournamentSoloPlacement = [75,50,40,35,30,25,15,10,9,8,7,6,5,4,3,2,1];
const tournamentSoloPoints = [1,1,1,1,1,2,2,2,1,1,1,1,2,1,2,3,5];

const tournamentDuoPlacement = [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
const tournamentDuoPoints = [1,1,2,2,3,3,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,25];

const tournamentTrioPlacement = [17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
const tournamentTrioPoints = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,4,5];

const soloPlacement = [50,35,30,25,20,15,10,5,3,2,1];
const soloPoints = [10,10,10,15,10,10,15,15,10,25,50];

const duoPlacement = [25,20,17,15,12,10,5,3,2,1];
const duoPoints = [10,5,5,5,5,10,10,10,25,50];

const trioPlacement = [15,10,9,8,7,6,5,4,3,2,1];
const trioPoints = [5,10,5,5,5,5,10,5,10,25,50];



const divisionsBusFair = [0,0,0,-10,-20,-30,-40,-60,-60,-70];

const soloElimPointsArena = 15;
const duoElimPointsArena = 15;
const trioElimPointsArena = 15;
const elimPointsTournament = 1;


function main (){
    if(gameType == 1){
        if(teamSize == 1){
            if (userPlacement <= 50 && userPlacement > 1){
                let i = 0;
                while (userPlacement <= soloPlacement[i]){
                    userPlacementPoints = userPlacementPoints + soloPoints[i];
                    i++;
                }
            }
            if (userPlacement == 1){
                userPlacementPoints = 180;
            }
            userPlacementPoints = userPlacementPoints + divisionsBusFair[userDivision];
            userPlacementPoints = userPlacementPoints + (totalEliminations * soloElimPointsArena);
            console.log(userPlacementPoints);
        }
        if(teamSize == 2){
            userPlacementPoints = 0;
            if (userPlacement <= 25 && userPlacement > 1){
                let i = 0;
                while (userPlacement <= duoPlacement[i]){
                    userPlacementPoints = userPlacementPoints + duoPoints[i];
                    i++;
                }
            }
            if(userPlacement == 1){
                userPlacementPoints = 180;
            }
            userPlacementPoints = userPlacementPoints + divisionsBusFair[userDivision];
            userPlacementPoints = userPlacementPoints + (totalEliminations *duoElimPointsArena);
            console.log(userPlacementPoints);
        }
        if (teamSize == 3){
            userPlacementPoints = 0;
            if (userPlacement <=15 && userPlacement > 1){
                let i =0;
                while (userPlacement <= trioPlacement[i]){
                    userPlacementPoints = userPlacementPoints + trioPoints[i];
                    i++;
                }
            }
            if (userPlacement == 1){
                userPlacementPoints = 180;
            }
            userPlacementPoints = userPlacementPoints + divisionsBusFair[userDivision];
            userPlacementPoints = userPlacementPoints + (totalEliminations * trioElimPointsArena);
            console.log(userPlacementPoints);
        }
    }
    if(gameType ==2){
        if(teamSize == 1){
            userPlacementPoints = 0;
            if (userPlacement <= 75 && userPlacement > 1){
                let i = 0;
                while (userPlacement <= tournamentSoloPlacement[i]){
                    userPlacementPoints = userPlacementPoints + tournamentSoloPoints[i];
                    i++;
                }
            }
            if(userPlacement == 1){
                userPlacementPoints = 28;
            }
            userPlacementPoints = userPlacementPoints + (totalEliminations * elimPointsTournament);
            console.log(userPlacementPoints);
        }
        if(teamSize == 2){
            userPlacementPoints = 0;
            if (userPlacement <= 25 && userPlacement > 1){
                let i = 0;
                while (userPlacement <= tournamentDuoPlacement[i]){
                    userPlacementPoints = userPlacementPoints + tournamentDuoPoints[i];
                    i++;
                }
            }
            if(userPlacement == 1){
                userPlacementPoints = 248;
            }
            userPlacementPoints = userPlacementPoints + (totalEliminations * elimPointsTournament);
            console.log(userPlacementPoints);
        }
        if(teamSize == 3){
            userPlacementPoints = 0;
            if (userPlacement <= 17 && userPlacement > 1){
                let i = 0;
                while (userPlacement <= tournamentTrioPlacement[i]){
                    userPlacementPoints = userPlacementPoints + tournamentTrioPoints[i];
                    i++;
                }
            }
            if(userPlacement == 1){
                userPlacementPoints = 248;
            }
            userPlacementPoints = userPlacementPoints + (totalEliminations * elimPointsTournament);
            console.log(userPlacementPoints);
        }
    }
}














