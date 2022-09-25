// console app to return exact change base on number

//failing first recursion try
/*
const makeChange = (num) => {
  let quarters;
  let dimes;
 let nickels;
 let pennies;

 if (num <= 0) {
   return;
 } else if(num % 1 > 0) {
     pennies = ((num - (num % 1)) / 1);
     return makeChange(num - (num % 1));
      } else if (num % 5 > 0) {
       nickels = ((num - (num % 5)) / 5);
       return makeChange(num - (num % 5));
     } else if (num % 10 > 0) {
       dimes = ((num - (num % 10)) / 10);
       return makeChange(num - (num % 10));
       } else if (num % 25 > 0) {
       quarters = ((num - (num % 25)) / 25);
       return makeChange(num - (num % 25));
       }

   let money = [quarters, dimes, nickels, pennies]
   //let results = money.map(money => Math.floor(money));
  console.log(money);
  
  
}

makeChange(499)
*/


//wrong math
// const makeChange = (num) => {
//   if (num === 0) {
//     return;
//   } else if (num % 1 > 0) {
//     const pennies = Math.floor((num - (num % 1)) / 1);
//     return `${pennies} pennies` + makeChange(num - (num % 25));
//   } else if (num % 5 > 0) {
//     const nickels = Math.floor((num - (num % 5)) / 5);
//     return `${nickels} nickels` + makeChange(num - (num % 5));
//   } else if (num % 10 > 0) {
//     const dimes = Math.floor((num - (num % 10)) / 10);
//     return `${dimes} dimes` + makeChange(num - (num % 10));
//   } else if (num % 25 > 0) {
//     const quarters = Math.floor((num - (num % 25)) / 25);
//     return `${quarters} quarters` + makeChange(num - (num % 25));
//   }

//   // let money = `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
//   // return money;
// }

const makeChange = (num) => {
  if (num === 0) {
    return;
  } else if (num >= .25) {
    const quarters = Math.floor(num / .25);
    console.log(quarters);
    return `${quarters} quarters`  + makeChange((num - (quarters * .25)).toFixed(2));
  } else if (num >= .10) {
    const dimes = Math.floor(num / .10);
    console.log(dimes);
    return ` ${dimes} dimes`  + makeChange((num - (dimes * .10)).toFixed(2));
  } else if (num >= .05) {
    const nickels = Math.floor(num / .05);
    console.log(nickels);
    return ` ${nickels} nickels`  + makeChange((num - (nickels * .05)).toFixed(2));
  } else {
    const pennies = Math.floor(num / .01);
    console.log(pennies);
    return ` ${pennies} pennies`;
  }
};

makeChange(4.99)