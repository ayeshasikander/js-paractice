// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));


// function plaindrome(str){
//     let word=str.length
//     for(let i=0;i<word/2;i++){
//         if(str[i]!=str[word-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// let str1 = "eye";
// console.log(plaindrome(str1))

// function add(a:number,b:string){
//     return (a+b)
// }
// console.log(add(10,20))

// main.ts(4,20): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// [Compilation failed with exit code 2]

// function add2(a: number, b: number) {
//     return a + b;
// }
// console.log(add2("10",20))

// main.ts(4,17): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// [Compilation failed with exit code 2]

// function hello(a: number, b: number) {
//     return a + b;
// }
// console.log(hello(10,20))