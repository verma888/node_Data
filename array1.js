var obj1 = {
    name : "gourav  verma",
    class: "first year"
}
var series = [1,5,7,8,5,25,40,65,8,91];
var str1 = JSON.stringify(obj1);
console.log(str1, typeof(str1));
str2 = JSON.parse(str1);
console.log(str2, typeof(str2));
console.log(series.indexOf(91));