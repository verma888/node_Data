function mult(x,y, callback){
    const res = x*y;
    callback(res);
}

mult(15,25, function(res){
    console.log(res);
});
