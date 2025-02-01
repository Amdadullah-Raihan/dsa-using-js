function textTurncate(text, length) {
  let turncatedTxt = " ";
  if (text.length > length) {
    turncatedTxt = text.substring(0, length);
  } else {
    turncatedTxt = text;
  }
  return turncatedTxt;
}

console.log(textTurncate("We are doing JS string exercises."));

console.log(textTurncate("We are doing JS string exercises.", 19));
