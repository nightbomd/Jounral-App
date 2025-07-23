const calculateBtn = document.getElementById("calculate-1rm");
const paginationBtn = document.querySelectorAll("#pagination-btn");

const rpeChart = {
  1:  { 10: 100, 9.5: 98,   9: 95.5, 8.5: 93.9, 8: 92.2, 7.5: 90.5, 7: 88.7, 6.5: 87, 6: 85.2 },
  2:  { 10: 95.5, 9.5: 93.9, 9: 92.2, 8.5: 90.6, 8: 88.9, 7.5: 87.1, 7: 85.3, 6.5: 83.6, 6: 81.8 },
  3:  { 10: 92.2, 9.5: 90.6, 9: 88.9, 8.5: 87.2, 8: 85.5, 7.5: 83.7, 7: 81.9, 6.5: 80.2, 6: 78.4 },
  4:  { 10: 89,   9.5: 87.4, 9: 85.7, 8.5: 84.1, 8: 82.5, 7.5: 80.8, 7: 79,   6.5: 77.3, 6: 75.5 },
  5:  { 10: 86,   9.5: 84.4, 9: 82.8, 8.5: 81.2, 8: 79.6, 7.5: 77.9, 7: 76.2, 6.5: 74.5, 6: 72.8 },
  6:  { 10: 83.2, 9.5: 81.7, 9: 80.1, 8.5: 78.6, 8: 77,   7.5: 75.3, 7: 73.6, 6.5: 72,   6: 70.3 },
  7:  { 10: 80.5, 9.5: 79,   9: 77.5, 8.5: 76.1, 8: 74.5, 7.5: 72.9, 7: 71.2, 6.5: 69.6, 6: 67.9 },
  8:  { 10: 77.9, 9.5: 76.5, 9: 75,   8.5: 73.6, 8: 72.1, 7.5: 70.5, 7: 68.9, 6.5: 67.3, 6: 65.7 },
  9:  { 10: 75.4, 9.5: 74,   9: 72.5, 8.5: 71.2, 8: 69.7, 7.5: 68.2, 7: 66.6, 6.5: 65,   6: 63.5 },
  10: { 10: 73,   9.5: 71.6, 9: 70.1, 8.5: 68.8, 8: 67.4, 7.5: 65.9, 7: 64.4, 6.5: 62.9, 6: 61.3 },
  11: { 10: 70.7, 9.5: 69.3, 9: 67.8, 8.5: 66.5, 8: 65.2, 7.5: 63.7, 7: 62.2, 6.5: 60.7, 6: 59.2 },
  12: { 10: 68.5, 9.5: 67,   9: 65.6, 8.5: 64.3, 8: 63,   7.5: 61.5, 7: 60.1, 6.5: 58.6, 6: 57.2 }
};


function calculate1RM() {
  const lift = document.getElementById("lift").value;
  const unit = document.getElementById('unit').value;

  const weight = parseFloat(document.getElementById("weight-1rm").value);
  const reps = parseInt(document.getElementById("reps-1rm").value);
  const RPE = parseFloat(document.getElementById("RPE-selector").value);
  const output = document.getElementById("result");

  // Form Validation 
  if (isNaN(weight) || isNaN(reps) || isNaN(RPE)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  if (reps < 1 || reps > 12) {
    alert("Reps must be between 1 and 12.");
    return;
  }

  if (weight <= 0 || reps <= 0) {
    alert("Please enter realistic values.");
    return;
  }


  const RPEPercentage = rpeChart[reps][RPE];
  const result = Math.floor(weight / (RPEPercentage / 100));
  output.innerHTML = `<span>ESTIMATED ${lift} One Rep Max: </span> ${result} ${unit}`;
}

calculateBtn.addEventListener("click", calculate1RM);