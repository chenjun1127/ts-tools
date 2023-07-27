// 节流函数：
export function throttle<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
  let lastTime = 0;
  return function (...args: Parameters<T>) {
    const currentTime = Date.now();
    if (currentTime - lastTime >= 0) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
}

// 在 TypeScript 中，F extends (...args: any[]) => any 是一个泛型约束，用于指定函数类型。

// F 表示一个函数类型，而 extends (...args: any[]) => any 表示 F 必须是一个接受任意数量参数且返回任意类型的函数。