// #### SNACK 1 ###
const bikes = [
  { nome: "MountainBike", peso: 15 },
  { nome: "Graziella", peso: 10 },
  { nome: "ElectricBike", peso: 20 },
];

let lighterBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso < lighterBike.peso) {
    lighterBike = bikes[i];
  }
}

console.log(lighterBike);

// #### SNACK 2 ####
let footballTeams = [
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
];
console.log(footballTeams);

function randomNumber() {
  footballTeams.forEach((team) => {
    team.puntiFatti = Math.floor(Math.random() * 10) + 1;
    team.falliSubiti = Math.floor(Math.random() * 10) + 1;
  });
}

randomNumber();
