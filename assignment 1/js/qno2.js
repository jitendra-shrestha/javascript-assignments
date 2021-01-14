
person = {
    name:"jitendra shrestha",
    address:"bungmati",
    emails:"tjiten123@gmail.com",
    interest:"games",
    education:[
        {
            name:"advance academy",
            enrolledDate: "2014"
        },
        {
            name:"Kantipur city college",
            enrolledDate: "2016"
        },        
    ]
}

var edukeys = person.education;

edukeys.forEach(function(element){
    educationDetails = "Name: "+ element.name + " EnrolledDate: "+element.enrolledDate;
    console.log(educationDetails);
})

