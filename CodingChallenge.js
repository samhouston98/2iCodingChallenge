function countPairsWithSum(arr, X) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === X) {
        count++;
        left++;
        right--;
      } else if (sum < X) {
        left++;
      } else {
        right--;
      }
    }
  
    return count;
  }

  
  //The function assumes that the input array is already sorted in ascending order. The algorithm takes advantage of this sorting to efficiently find pairs.

  //The function employs a two-pointer approach, with one pointer (left) starting from the beginning of the array and the other (right) starting from the end. This approach takes advantage of the sorted nature of the array and optimises the search for pairs.
  
  //If the sum of the elements at the current left and right pointers is equal to the target sum (X), then a valid pair is found, and both pointers are moved to the next positions.

  //If the sum is less than X, the left pointer is moved to the right to potentially increase the sum.

  //If the sum is greater than X, the right pointer is moved to the left to potentially decrease the sum.

  // The function returns the count of pairs found.