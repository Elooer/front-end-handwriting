function toCamel(str) {
  return str.replace(/_(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}