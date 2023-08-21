// num=77;
// if(num%7==0 && num%11==0){
//     console.log('divisible by 7 and 11');
// }
// else if(num%11==0){
//     console.log('divisible by 11');

// }
// else if(num%7==0){
//     console.log('num is divisible by 7');
// }
// else{
//     console.log('num is not divisible');
// }
// //what's new 
// console.log('23234'===23234);//true
// console.log('234'==234);false
// console.log(7**2);//49
// console.log(7**3);//343
// console.log(49**.5);//7
// m=4;
// if(m%2==0){
//     myvar ='nice';
//     console.log('even');

// }
// else{
//     console.log('odd');
// }
// console.log(myvar);


//Q.1 WAP to check if a number is perfect square.
// console.log('Ans-1');
// x=5;
// a=Math.sqrt(x);
// if(Number.isInteger(a)){
//     console.log('perfect square number');
// }
// else{
//     console.log('not perfect square number');
// }

// console.log('Ans-2');
// //Q.2 WAP to print all perfect square in range of 100 - 500.

// for( let i=100;i<=500;i++){
//     let a=Math.sqrt(i);t
//     if(Number.isInteger(a)){
//         console.log(' perfect square number==',i)
//     }}
    //Ans -3
// let x=0;
// let y=1;
// let z=0;

// while(z<=50)
// {
//    console.log(z);
//    x=y;
//    y=z;
//    z=x+y;
// }

//


//Ans-4 check the number is prime or not 
let i,j;
let n=0;
for(i=100;i<=1000;i++){
    
    for( j=1;j<=i;j++){
        if(i%j==0)
        n++;

    }
    if(n==2)
    
        console.log(i);
        
    
       n=0
}
