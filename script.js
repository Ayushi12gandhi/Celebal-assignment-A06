function first(arr, n) {
  if (n == null) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.slice(0, n);
}

// Test outputs
const outputElement = document.getElementById("output");
const testResults = [
  first([7, 9, 0, -2]),
  first([], 3),
  first([7, 9, 0, -2], 3),
  first([7, 9, 0, -2], 6),
  first([7, 9, 0, -2], -3)
];

outputElement.textContent = testResults.map(r => JSON.stringify(r)).join('\n');
