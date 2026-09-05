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

//Problem 3 Start 

function countHashtags(caption) {
     if (typeof caption !== "string") {
        return "Invalid";
    }
    const hashtags = caption
        .split(" ")
        .filter(word => word.startsWith("#") && word.length > 1)
        .map(word => word.slice(1));

          const longestTag = hashtags.reduce(
        (longest, current) =>
            current.length > longest.length ? current : longest,
        ""
    );

    return {
        hashtagCount: hashtags.length,
        longestTag: longestTag
    };
}

console.log(countHashtags(["#fun"]))





// Problem 3 Complete

//Problem 4 Start

function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0){
        return "Invalid";
    }
    let isValid= scores.every(score => typeof score === 'number');
    if(!isValid){
        return "Invalid";
    }
    scores = scores.map( (numbers)=>numbers+10)
    console.log(scores);
    let sum = scores.reduce((accumulator,element)=>{
        return accumulator+=element;
    
    });
    console.log(sum);
}
console.log(bonusScore([80, "90", 70]));

//  Problem 4 end 


// Problem 5 start 

function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    let isValid= students.every(student => typeof student === "object" &&
        student !== null &&
        "name" in student &&
        "score" in student &&
        typeof student.name === "string" &&
        typeof student.score === "number");
    if(!isValid){
        return "Invalid";
    }
    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}
// console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]));
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]

));

//  Problem 5 complete