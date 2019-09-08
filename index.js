function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let firstPerson = katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let i = 0;
    return "The line is currently: " + i + ". " + katzDeliLine.join(", ");
  } else {
      return "The line is currently empty.";
  }
}

function currentLine(katzDeliLine) {
  let i = 0;
  if (katzDeliLine.length > 0) {
      for (i = 0; i < katzDeliLine.length; i++) {
        // let number = i + 1;
      }
        return "The line is currently: " + i + 1 + ". " + katzDeliLine.join(", ") + katzDeliLine[i];
    } else {
      return "The line is currently empty.";
  }
}