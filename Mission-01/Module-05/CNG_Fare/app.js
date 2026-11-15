// CNG Fare Meter
const distanceInput = document.getElementById("distance-input");
const waitingInput = document.getElementById("waiting-input");
const nightInput = document.getElementById("night-input");
const fareOutput = document.getElementById("fare-output");

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  if (distance <= 0) {
    return "Invalid distance";
  }

  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare *= 1.2;
  }

  return fare;
}

function updateFare() {
  fareOutput.textContent = getCngFare(
    parseFloat(distanceInput.value),
    nightInput.checked,
    parseFloat(waitingInput.value) || 0
  );
}

distanceInput.addEventListener("input", updateFare);
waitingInput.addEventListener("input", updateFare);
nightInput.addEventListener("change", updateFare);