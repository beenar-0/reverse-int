module.exports = function reverse(n) {
   if (n < 0) {
      n = -n;
   }
  n = n.toString(10)
   let temp = []
   let len = (n.length)
   for (let i = 0; i < len; i++) {
      temp.unshift(n[i])
   }
   n = temp.join("")
   return +n
}
