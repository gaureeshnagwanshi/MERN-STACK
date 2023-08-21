const nums=[2,5,5,5,5,46,5,7];

// for(let i=0;i<nums.length;i++){
//     a=nums[i]**2;
//     console.log(a);
// }

// for(let i of nums){
//     console.log(i**2);
// }
// nums.forEach((e)=>{console.log(e**2)});
//  //print all even number in the nums

 for(let i of nums){
    if (i%2==0){
        console.log(i);
        
    }
 }
 let newArr=[];
 for(let i of nums){
    if (i%2===0) newArr.push(i)
       
        
    }
console.log(newArr);

//filter
//call back function ()=>{} when the outside function is call then call back funtion will be call;

const filteredArr= nums.filter((n)=>{return n%2===0});
 console.log
console.log(filteredArr);

const prices =[120,4500,700,1200,999,2300,640,140];
const pricesArr=prices.filter((n)=>{return n>=1000 && n<=3000});
console.log(pricesArr);

const cell =[120,55,77,85,96,75]
const newcell=cell.filter((pr)=>{return pr%2==0});
console.log(newcell);


const colors=['red','green','blue','pink','orange','black','white'];

const colfilter=colors.filter(color =>{return color.length >4} );
console.log(colfilter);
const result= nums.map((n)=>{return n**2});
 console.log(result);

 const prices2 = ['$656.299','$6546.545','$7874.51'];
 console.log('$6545.5454'.slice(1));
 const doller = prices2.map((pri)=>{return parseInt (pri.slice(1))});
 console.log(doller);