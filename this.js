obj = {
 
    firstname : 'Ram',
    secondname : 'Singh',
    fullname : function(){
        return this.firstname+this.secondname;
    },
}
console.log (obj.fullname());
