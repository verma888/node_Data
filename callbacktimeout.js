var arr = [2,4,6,8];
setTimeout(() => {
console.log("waiting.......");
},3000)
var arr1 = arr.map((num) => {
    return num/2;
})
console.log(arr1);
//This is called asynchronous programming.//