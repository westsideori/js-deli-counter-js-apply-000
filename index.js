// Given a line array and new customer name, adds new customer 
// to line array and returns a string welcoming the new customer and 
// informing them of their place in line.
// function takeANumber(lineArray, newPerson) {
//   lineArray.push(newPerson);
//   return `Welcome, ${newPerson}. You are number ${lineArray.length} in line.`;
// }

let personInLine = 1;
function takeANumber(lineArray) {
  lineArray.push(personInLine);
  personInLine++;
  return `Welcome. You are number ${personInLine} in line.`;
}

// Given a line array, returns a string if the line is empty and
// there's nobody to serve, or removes the person being served (next in
// line) from the line array and returns a string describing who
// is currently being served.
function nowServing(lineArray) {
  if (lineArray.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let servedPerson = lineArray.shift();
    return `Currently serving ${servedPerson}.`;
  }
}

// Given a line array, returns a string if the line is empty, or
// returns a string describing the current line order.
function currentLine(lineArray) {
  if (lineArray.length === 0) {
    return 'The line is currently empty.';
  } else {
    let lineWords = ['The line is currently: '];
    for (let i = 0; i < lineArray.length; i++) {
      lineWords.push(`${i + 1}. ${lineArray[i]}, `);
    }
    let finalString = lineWords.join('');
    return finalString.slice(0, finalString.length - 2);
  }
}