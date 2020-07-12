export function mean(arr: Array<number>) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
  }