function getType(val) {
  const type = typeof val;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}