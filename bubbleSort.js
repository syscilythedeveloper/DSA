function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true; // Initialize noSwaps as true at the start of each outer loop iteration

    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false; // Set noSwaps to false if a swap occurred
      }
    }

    // If no swaps were made during the inner loop, the array is sorted
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 7]));
