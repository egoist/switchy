export default function switchy(conditions = {}) {
  return function (theCase) {
    if (typeof conditions[theCase] === 'function') {
      return conditions[theCase]()
    } else if (typeof conditions.default === 'function') {
      return conditions.default()
    }
  }
}
