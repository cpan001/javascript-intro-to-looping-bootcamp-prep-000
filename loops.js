function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }

  }
  return array;
};

function whileLoop(num) {
  let i = num;
  while (i > 0) {
    console.log(i--);
  }
  return "done";
};

function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhileLoop(array) {
  do {
    array.pop();
    return array;
  } while (maybeTrue() && array.length > 0);
};
