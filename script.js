document.getElementById("showBtn").addEventListener("click", showWorkout);

// Lista på dagar
const days = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];

// Fyller dropdown-menyn automatiskt
const daySelect = document.getElementById("day");
days.forEach(day => {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day.charAt(0).toUpperCase() + day.slice(1); // Gör första bokstaven stor
  daySelect.appendChild(option);
});

// Standardpass (mall)
const defaultWorkouts = {
  rygg: ["Marklyft 4x8", "Chins 3x8", "Skivstångsrodd 3x10"],
  ben: ["Knäböj 4x8", "Utfall 3x10", "Benspark 3x12"],
  armar: ["Bicepscurl 3x12", "Triceps pushdown 3x12", "Hantelcurl 3x10"]
};

// Kopierar passen till alla dagar
const workouts = {};
days.forEach(day => {
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
    <h2>${day.charAt(0).toUpperCase() + day.slice(1)} - ${workout}</h2>
    <ul>${chosenWorkout.map(ex => `<li>${ex}</li>`).join("")}</ul>
  `;
}
