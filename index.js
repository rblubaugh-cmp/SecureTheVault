let code1;
code1 = 7 + 3;

let code2 = 84 / 2 - 2;

let code3 = 39 % 40;

const message = "The vault has been secured. The combination is: ";

const codeA = message + code1 + "-" + code2 + "-" + code3;

const codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
