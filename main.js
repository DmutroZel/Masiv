let book = ["Don Kihot",
"Кобзар",
"Divine Comedy",
"Brave New World"
];
console.log(book);

let film = ["Batman",
"SpiderMan",
"IronMan",
"Dunus"
];
console.log(film);

let arr = ["1",
"3",
"123",
"228",
"1488",
"2",
"6",
"8",
"9",
"43"
];
let n = arr.length;
console.log(n);


let best = book.concat(arr); 
console.log(best);


let den = film.concat(best);
console.log(den);

let d = den.length;
console.log(d);

den.push("My pc: GTX 1650,Intel(R) Core(TM) i5-9400F");
console.log(den);

den.unshift("+380685601488");
console.log(den);

den.unshift("purple");
console.log(den);

den[1] = "+38068560****"
console.log(den);

den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
den.shift(den);
console.log(den);
