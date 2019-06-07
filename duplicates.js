var a1= [2,5,7,5,6,2,4,3,2,4];
var a2 = a1.filter(function(num,index){
   return a1.indexOf(num) == index;
})
console.log(a2);
// The indexof function is used to find the actual index of the array element and we will compare both and pop the matching condition.//
