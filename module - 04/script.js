var names = ["John", "Alice", "Bob", "Jane", "Mike"];

// Loop through the names
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];
  
  // Check the first letter of the name
  var firstLetter = name.charAt(0);

  // Convert the first letter to uppercase for comparison
  firstLetter = firstLetter.toUpperCase();

  // Check if it starts with 'J'
  if (firstLetter === 'J') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}