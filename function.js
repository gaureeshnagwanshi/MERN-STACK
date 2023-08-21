function addNums(a,b){
  c=a+b;
console.log(c);
}
addNums(5,75);
//console.log (c);


const calcPercent= function(m1, m2,m3,m4,m5){
    let percent=(m1+m2+m3+m4+m5)/5;
    console.log(percent);
    console.log(`${percent} is the percent`)

}
calcPercent(74,79,88,92,85);

const fact= (n)=>{

    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;

    }
     console.log(f);
    return f;
}
 fact(5);
//console.log(ans);

console.log('hello');
// const Persqrt=(n )=>{
// let sqrt = n**.5;
// if(sqrt%1==0){
//     return true;
// }
// else{
//     return false;
// }
// }
// for(let i=100;i<=500;i++){
//     if(Persqrt(i)){
//         console.log(i);
//     }
// }
// ans 1

const perfct=(n)=> {
 num=n**.5;
if(num%1==0){
    console.log('perfect sqrt',n);

}

}
for(let i=1;i<=100;i++){
perfct(i);
}

//ans 2

const sprime=(a,b)=>{
let i;
n=0;
for(i=a;i<=b;i++)
{
    for( j=1;j<=i;j++){
        if(i%j==0)
        n++;

    }                                              
    if(n==2)
     console.log(i)
      n=0
}}
sprime(1000,4000);

//ans 3

console.log('\n  to fabonacci Series;');
const fabonacci= (a)=>{

x=0;
y=1;
z=0;
while(z<a){
    console.log(z);
    x=y;
    y=z;
    z=x+y;
}}
fabonacci(800);

//ans 5 
const printPyramid=(n)=>{
for(let i=1;i<=n;i++){

for(let j=1;j<=n-i;j++){
    process.stdout.write(' ');
}
for(let k=1;k<=i;k++){
    process.stdout.write('*');
}
console.log(' ');

}}

const printPyramid2=(n)=>{
    for(let i=1;i<=n;i++){
        process.stdout.write(' '. repeat(n-i));
        process.stdout.write('* '. repeat(i));
console.log();
    }
}
printPyramid2(5);






//calculate Permutation 

//ans 4 

console.log('permutation calculation');
const Permutation = (n,r)=>{
 var a=1;
 var b=1
for(i=1;i<=n;i++){
    a*=i;
}
// console.log(a)
for(i=1;i<=(n-r);i++){
    b*=i;
}
per= a/b;
console.log(per);
// console.log(b);
}
Permutation(5,5);

