// 防抖函数
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timerId: number;
  return function (...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 在 TypeScript 中，F extends (...args: any[]) => any 是一个泛型约束，用于指定函数类型。

// F 表示一个函数类型，而 extends (...args: any[]) => any 表示 F 必须是一个接受任意数量参数且返回任意类型的函数。