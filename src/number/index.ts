// typeScript 实现数字转千分位，如果有小数会保留
export function formatToThousandSeparator(num: number): string {
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

export function formatToThousandSeparator2(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function formatToThousandSeparator3(num: number): string {
  return num.toLocaleString('en-US', { maximumFractionDigits: 20 });
}

// 测试用例
console.log(formatToThousandSeparator(1234567890)); // 输出: "1,234,567,890"
console.log(formatToThousandSeparator(1234567.890123)); // 输出: "1,234,567.890123"
console.log('----------------------------------');
console.log(formatToThousandSeparator(1234567890)); // 输出: "1,234,567,890"
console.log(formatToThousandSeparator(1234567.890123)); // 输出: "1,234,567.890123"
console.log('----------------------------------');
console.log(formatToThousandSeparator(1234567890)); // 输出: "1,234,567,890"
console.log(formatToThousandSeparator(1234567.890123)); // 输出: "1,234,567.890123"
console.log('----------------------------------');
export class CustomNumber extends Number {
  /**
   * 限制在某个区间内
   * @param min 最小值
   * @param max
   * @returns
   */
  public clamp(min: number, max: number): number {
    return Math.min(Math.max(this.valueOf(), min), max);
  }
  public toInt(): number {
    // 用于截断数字的小数部分，只保留整数部分。这意味着 Math.trunc() 会移除数字的小数部分，但不会进行四舍五入。
    return Math.trunc(this.valueOf());
  }
  public toDouble(): number {
    return Number(this.valueOf());
  }
}

const num = new CustomNumber(123.456);
console.log(num.toFixed(2)); // 123.4500
console.log(num.clamp(0, 100)); // 100
console.log(num.toInt()); // 123
console.log(num.toDouble()); // 123.456

// 下面的方法也可以;
export class NumberExtensions {
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  static toInt(value: number): number {
    return Math.trunc(value);
  }

  static toDouble(value: number): number {
    return Number(value);
  }
}
console.log('----------------------------------');
console.log(NumberExtensions.clamp(123.456, 0, 100)); // 100
console.log(NumberExtensions.toInt(123.456)); // 123
console.log(NumberExtensions.toDouble(123.456)); // 123.456
