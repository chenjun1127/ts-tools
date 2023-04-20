// typeScript 实现数字转千分位，如果有小数会保留
export function formatNumber(num: number): string {
  const str = num.toString();
  const arr = str.split('.');
  const intPart = arr[0];
  const decimalPart = arr[1] || '';
  let result = '';
  let count = 0;
  for (let i = intPart.length - 1; i >= 0; i--) {
    result = intPart[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }
  return result + (decimalPart ? '.' + decimalPart : '');
}

 
