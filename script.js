document.getElementById("showBtn").addEventListener("click", showWorkout);

const defaultWorkouts = {
  rygg: ["Marklyft 4x8", "Chins 3x8", "Skivstångsrodd 3x10"],
  ben: ["Knäböj 4x8", "Utfall 3x10", "Benspark 3x12"],
  armar: ["Bicepscurl 3x12", "Triceps pushdown 3x12", "Hantelcurl 3x10"]
};

// Gör en kopia av passen för alla veckodagar
const workouts = {};
["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"].forEach(day => {
  // kopiera så varje dag får egna listor
  workouts[day] = {
    rygg: [...defaultWorkouts.rygg],
    ben: [...defaultWorkouts.ben],
    armar: [...defaultWorkouts.armar]
  };
});

function showWorkout() {
  const day = document.getElementById("day").value;
  const workout = document.getElementById("workout").value;
  const resultDiv = document.getElementById("result");

  const chosenWorkout = workouts[day][workout];

  resultDiv.innerHTML = `
    <h2>${day} - ${workout}</h2>
    <ul>${chosenWorkout.map(ex => `<li>${ex}</li>`).join("")}</ul>
  `;
}
