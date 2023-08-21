const studentInfo = {
    name : 'raju',
    email : 'raju@gmail.com',
    password : 'sfsdlf'
};
console.log(studentInfo.name);
console.log(studentInfo.email);
console.log(studentInfo['password']);

studentInfo.password='asfdghjj';
//adding new key-value pair 
studentInfo.address='fghlkgh';
console.log(studentInfo);
const smartphone={
    brand : ' samsung',
    model:'galexy m31',
    color: ['blue','black','white'],
};
console.log(smartphone.color[1]);
smartphone.color[2]='green';
console.log(smartphone);
 

const smartphones = [ 
    {brand:'samsung',model:'Galexy s21', price:54656, color : ['blue','black']},
    {brand:'oppo',model:'oppo A25 s21', price:54656, color : ['white','pink']},
    {brand:'realme',model:'realme s21', price:54656, color : ['black','white']},
    {brand:'apple',model:'apple s21', price:54656, color : ['silver','black']},
];
console.log(smartphones[0].model);
console.log(smartphones[0].color[1]);
console.log(smartphones[2].price);
smartphones[1].model='c15';

//add a color of the oppo
smartphones[2].color.push('yollow');
console.log(smartphones[2]);

const brand = smartphones.map ((sm) =>  {return sm.brand});
console.log(brand);