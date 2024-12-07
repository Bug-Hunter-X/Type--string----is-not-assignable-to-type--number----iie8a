function combine(arr1: number[], arr2: number[]): number[] {
  if (!isArrayOfNumbers(arr1) || !isArrayOfNumbers(arr2)) {
    throw new Error('Both arrays must contain only numbers.');
  }
  return arr1.concat(arr2);
}

function isArrayOfNumbers(arr: any[]): arr is number[] {
  return arr.every(item => typeof item === 'number');
} 