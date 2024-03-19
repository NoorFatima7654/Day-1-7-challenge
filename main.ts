//Question no 49
//Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies:string[]){
   //Loops through each hobby in the array
    hobbies.forEach(hobby  =>{
    //logs a statement for each hobb y
    console.log(`I enjoy ${hobby}.`);
   });
}
//calls the function with three hobbies
logHobbies("reading","coding","cycling");
 
// QUESTION NO 50
//using template lioterals to define a multiline string
let myIdealDay = `MY ideal day would involve:
1.Waking up early and going for a job.
2.Spending a few hours  coding on a personal projects.
3.Ending the day by readings agoos books`; 

//logging the multiline strings to the console
console.log(myIdealDay);
//Question no 51
// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle

