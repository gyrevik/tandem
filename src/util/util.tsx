import * as _ from 'lodash';

export function mean(arr: Array<number>) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
}

export function median(arr: Array<number>) {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
  
export function mode(numbers: Array<number>) {
    var modes = [], count: Array<number> = [], i, number, maxIndex = 0;
  
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
  
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
  
    return modes;
}
  
export function standard_deviation(array: Array<number>) {
    var avg = _.sum(array) / array.length;
    return Math.sqrt(_.sum(_.map(array, (i) => Math.pow((i - avg), 2))) / array.length);
};
  
export function standard_deviation_2(array: Array<number>) {
    const n = array.length;
    const mean = array.reduce((a,b) => a+b)/n;
    const s = Math.sqrt(array.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/n);
    return s;
}