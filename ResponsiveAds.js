// You have an array.
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]
const pokes = getPokes();
console.log("Pokes", pokes);

// Problem 1: Filter by type
// - Populate `answer1` with Pokemon names that contain the type string
const type = "grass";
const answer1 = []; // TODO

pokes.forEach(element=>{
    element.types.includes(type) ? answer1.push(element.name) : null
})

console.log(answer1)

//Time Complexity : Worst Case is O(n*m) where N is the length of the pokes array and M is the average length of the types array inside each element of pokes array.
//Space Complexity : Worst Case is O(n) where N is the length of the res array, the length of the array containing the names of the Pokemons that match the type.
//More efficient solution using hashmaps doesn't seem possible...


// Problem 2: Filter by types (AND / OR)
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
const answer2Or = []; // TODO
const answer2And = []; // TODO

/*
Problem 2: Filter by Types (AND/OR)
Populate 'answer20r' with Pokemon names that satisfy at least one of the given types. (Same as above problem)
*/

pokes.forEach(element=>{
    element.types.includes(type) ? answer2Or.push(element.name) : null
})

//Time Complexity: .forEach and .includes both are linear time complexity. time complexity is O(n*m) where n is the length of pokes array and m is the average length of types inside each element in pokes array.
//Space Complexity: O(n) where n is the size of the array containing Pokemons that satisfy at least one of the given types.


pokes.forEach(element=>{
    //JSON.stringify has a time complexity of O(n)
    JSON.stringify(element.types) === JSON.stringify(types) ? answer2And.push(element.name) : null
})

//Time Complexity : O((m+p)*n) where m is the length of types array, p is the average length of the types array inside the pokes array, and n is the length of the pokes array.
//Space Complexity : O(n) where n is the size of the result array being created.

// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}
