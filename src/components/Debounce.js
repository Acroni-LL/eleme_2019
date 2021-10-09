

const debounce = function (fn, delay) {
  let t = null
  return function () {
    if (t !== null) {
      clearTimeout(t)
    }
    t = setTimeout(() => {
      console.log();
      fn.call(this)
    }, delay);
  }
}


export default {
  name: 'debounce',

}
