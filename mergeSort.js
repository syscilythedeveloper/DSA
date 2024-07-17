function merge(arr1, arr2) {
  // Compare arr1[0] to arr2[0]; if arr1[0] is smaller, push it to newArr
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //mergeSort()
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
mergeSort([10, 24, 76, 73, 1, 9]);

//merge([1,4,7], [2,3,6,8,12]) // [1,2,3,4,6,7,8, 12]
