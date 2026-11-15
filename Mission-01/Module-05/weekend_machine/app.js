function getDayType(day) {
  const normalizedDay = day.trim().toLowerCase();
  const weekendDays = ["friday","Friday", "saturday", "sunday"];
  const workingDays = ["monday", "tuesday", "wednesday", "thursday"];

  switch (true) {
    case weekendDays.includes(normalizedDay):
      return "Weekend";
    case workingDays.includes(normalizedDay):
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

const dayInput = document.getElementById("weekend-input");
const dayOutput = document.getElementById("weekend-output");

dayInput.addEventListener("input", () => {
  dayOutput.textContent = getDayType(dayInput.value);
});