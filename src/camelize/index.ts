// 驼峰转下划线
export function camelToUnderline(str: string) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}
// 下划线转驼峰
export function underlineToCamel(str: string) {
  return str.replace(/_(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
}
