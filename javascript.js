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

console.log(studentIntroduction());

//Problem 1 complete 