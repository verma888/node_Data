const Course = {
     Name : "Node Js (Backend developer",
     Duration : " 45 Days",
     Timings : "7:30 AM to 9 AM",
     Requirement : "100% attendence and basic knowledge of any programming language",
     Faculty : "Mr Pradeep Naga",

}
for (let i in Course) {
    if(i == "Fees"){
        console.log( " Key is available");
        break;
    } 
    else {
        Course.Fees = "15000";
        console.log("Key has been added");
    }
}
console.log(Course);
