//ne kadar döngüye girecegini bilmedigimiz ve array icinde yer alacak element sayisi hakkinda hic bilgimiz yoksa while kullanmak dogrudur. 

function addIndexes(array){
    let arrayTwo=[];
    for (let i=0; i<array.length; i++){
    arrayTwo.push(array[i] + i)
}
return arrayTwo;
}
let argumentArray = [-25, -14, 5, 12]
console.log(addIndexes(argumentArray));


// Soru: Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

//There will be two arguments.
//If at least one of them is 10 or sum of them is 10, the function will return true.
//we need a condition.

function isTrueOrFalse(number1, number2){ 

return(number1==10 || number2 ==10 || (number1 +number2 == 10))
//     if(number1==10 || number2==10 ||(number1+number2)==10){
//     return true;
// } else{
//     return false
// }
}
console.log(isTrueOrFalse(2,8))//burada number1 10 degil bu nedenle False, number2 10 degil bu da False. number1 ve number2 toplami 10 bu true.  or yano yada prensibine göre 1 true sonucu true olmasina yetiyordu. bu nedenle 2 ve 8 sonucu true olarak cikar. 
console.log(isTrueOrFalse(6,4))
console.log(isTrueOrFalse(4,8)) //sadece bu false döner.
console.log(isTrueOrFalse(3,7))


//örnek; REGEX SISTEM ONEMLI :::

// A palindrome is a AudioWorkletNode, phrase, number, or other sequence of characters which reads the same backward or forward
//write a function to check if the sentence is palindrome 
// convert all to the same format
//get rid of special characters
// find a way to get the reversed format
//compare the sentence with the reversed one.

function isPalindrome(str){
    var eliminateReg = /[\W_]/g; //buradaki karakterler regex sayfasindan. 
    let lowerCaseStr = str.toLowerCase(). replace(eliminateReg, '')
    let reversedStr= lowerCaseStr.split('').reverse().join('') //burada join bütün yazilanlari birada birlesik yazilmasinda faydali oldu. özelligi bu. 
    return (lowerCaseStr === reversedStr)
}
console.log(isPalindrome('ey edip adanada pide ye.'))// bu sekilde tersten okunusuda ayni ise true dönüyor bize. baska durumda tersi farkli ise False dönüyor. 


//aciklama icin örnek; reverse hakkinda...
// let a= 'asd'
// console.log(a.reverse()); //reverse metodu sadece array lerde kullanilir.yazilanlari terse cevirmeye yarar. 



 function isPalindrome(str){
var reg= /[\W_]/g;
let lowerCaseStr = str. toLowerCase(). replace(reg, '')
let strLength = lowerCaseStr. length;

for(let i = 0; i< strLength/2; i++){
if (lowerCaseStr[i] !== lowerCaseStr[strLength - 1 - i]) {

    return false;

}
 return true;
}

}

console.log((isPalindrome( 'ey edip adanada pide ye.'))) //yukaridaki ayni soruyu ayri bir teknikle cözduk.
console.log((isPalindrome( 'anababa babaana.')))
