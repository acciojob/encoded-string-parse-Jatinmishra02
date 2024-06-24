const parseCode = (str) => {
  // Split the string by '0'
  let parts = str.split('0');
  
  // Filter out any empty strings that result from consecutive zeros
  parts = parts.filter(part => part !== '');

  // Destructure the parts into firstName, lastName, and id
  const [firstName, lastName, id] = parts;

  // Return the resulting object
  return { firstName, lastName, id };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
