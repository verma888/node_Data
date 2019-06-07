var Student = {

    Name : " Sushant Reddy",
    Batch : "2305",
    Branch : "Computer Science",
    Address : "Bangalore, Karnataka 560043",
    Fulldetails : function(){
           console.log(this.Name); 
           return 0; 
    }};
    console.log(Student);
Student.Name = "Rakesh Gupta";
delete Student.Name;
console.log(Student);