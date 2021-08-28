// 1. Create an array named numbers and store 5 number values in it
let numbers=[1,2,3,5,15];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(let i=0;i<numbers.length;i++){
    
    sum=sum+numbers[i];
    console.log(numbers[i]);
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum/numbers.length);
// 4. Find the highest number in the array and print it to the console using console.log()
let high=numbers[0];
for(let i=0;i<numbers.length;i++){
   if(numbers[i]>high){
       high=numbers[i];
   }
    
}
console.log(`highest number is ${high}`);
// 5. Find the lowest number in the array and print it to the console using console.log()
let low=numbers[0];
for(let j=0;j<numbers.length;j++){
    if(numbers[j]<low){
        low=numbers[j];
    }
}
console.log(`lowest number is ${low}`);
// 6. Find the even numbers in the array and print them to the console using console.log()
for(num of numbers){
    if(num%2===0){
        console.log(`The even number is ${num}`)
    }
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(num of numbers){
    if(num%2===1){
        console.log(`The odd number is ${num}`)
    }
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(num of numbers){
    if(num%5===0){
        console.log(`The numbers divisible by 5 in array are ${num}`); 
    }
    
}
// 9. Log all the element of the array one by one
for(num of numbers){
    console.log(num);
}
// 10. Find all the number in the array that is divisible by 3
for(num of numbers){
    if(num%3===0){
        console.log(`The numbers divisible by 3 in array are ${num}`); 
    }
    
}