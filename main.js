// #### SNACK 1 ###
const bikes = [
  { nome: "MountainBike", peso: 15 },
  { nome: "Graziella", peso: 10 },
  { nome: "ElectricBike", peso: 20 },
];

let lighterBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].peso < lighterBike.peso) {
    lighterBike = bikes[i];
  }
}

console.log(lighterBike);
