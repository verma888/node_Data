addition (2,3, function (res){
    console.log(res);
}
)
function addition (x,y, callback){
    const sum = x+y;
    callback(sum);
}