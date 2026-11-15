function getDayType(day) {
  const normalizedDay = day.trim().toLowerCase();

  if (["friday", "Friday", "saturday", "sunday"].includes(normalizedDay)) {
    return "Weekend";
  }

  if (["monday", "tuesday", "wednesday", "thursday"].includes(normalizedDay)) {
    return "Working Day";
  }

  return "Invalid Day";
}

const dayInput = document.getElementById("weekend-input");
const dayOutput = document.getElementById("weekend-output");

dayInput.addEventListener("input", () => {
  dayOutput.textContent = getDayType(dayInput.value);
});