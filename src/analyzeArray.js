function analyzeArray(nums) {
  let object = {
    average: getAverage(nums),
    min: getMin(nums),
    max: getMax(nums),
    length: nums.length,
  };
  return object;
}

function getAverage(nums) {
  let n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return Math.round(sum / n);
}

function getMin(nums) {
  let n = nums.length;
  let smallest = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return smallest;
}

function getMax(nums) {
  let n = nums.length;
  let largest = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

module.exports = analyzeArray;
