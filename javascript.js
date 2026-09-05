// Problem 1 
function studentIntroduction(student) {
    student ={
      name: "Rafi",
      age: 18,
    course: "JavaScript"

   }
  if(typeof student !== "object" || Object.keys(student).length===0 ){
    return "Invalid"
  }
  else{
  return `My name is ${student?.name}. I am ${student?.age} years old. I am learning ${student?.course}.`;
    }
}

// console.log(studentIntroduction());

//Problem 1 complete  //


//Problem 2 Started //

function filterActiveUsers(users) {


if (!Array.isArray(users) || users.length === 0){
    return "Invalid";
}

const isValid = users.every(user =>
  typeof user === 'object' &&
  user !== null &&
  'name' in user &&
  'isActive' in user &&
  typeof user.isActive === 'boolean'
)
if (!isValid){
    return "Invalid"
}

return users.filter(user => user.isActive === true);

}
// console.log(filterActiveUsers("student"));
console.log(filterActiveUsers([
    { name: "Rahim", isActive: false },
    { name: "Karim", isActive: true },
    { name: "Hasan", isActive: true }
  ]));

// Problem 2 end
