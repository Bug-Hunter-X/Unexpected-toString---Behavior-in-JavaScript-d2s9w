function foo(x){
  if(x === null) return "null";
  if(x === undefined) return "undefined";
  if(isNaN(x)) return "NaN";
  return x.toString();
}
console.log(foo(null)); // Output: null
console.log(foo(undefined)); //Output: undefined
console.log(foo(10)); // Output: 10
console.log(foo({})); //Output: [object Object]
console.log(foo(NaN));//Output: NaN