
//1//
// let x = 20;
// let y =30;
// [x,y] = [y,x]; //Destruct

//2//

// function maxAndimum(...value){

// max = Math.max(...value);
// min = Math.min(...value);

// return max,min;


// }
// maxAndimum(10,50,80,150,20,5)
// console.log(max);
// console.log(min);

////3///

// let obj={
//     name:"hend",
//     University:"Aswan",
//     faculty:"Agriculture",
//     grade:50
// }
// console.log(`${obj.name} is a student in faculty of ${obj.faculty} in university ${obj.University} And his final grad is  ${obj.grade}`);


///4////

// let arr =['Aswan' , 'Sohag' , 'Alex' , 'Qena' , 'Aswan' , 'Sohag']
// let myarr=new Set(arr);
// console.log(myarr);

//  function print(...myarr){
//     for (let i  of myarr) {
//         console.log(i);
        
//     }
// }
// print();

// let s =arr.length - myarr.size;
// console.log(s);





// Set.prototype.diffrent=function(s1)
// {
//     let newSet=new Set();
//     for(let val of s1)
//     {
//         if(!this.has(val))
//         {
//             newSet.add(val)
//         }
//     }
//     return newSet;
// }


// Set.prototype.union=function(s2)
// {
//     let newArr=[...s2,this];
//   return newArr;
//     }
  

// let s1=new Set(['Aswan' , 'Sohag' , 'Alex' , 'Qena']);
// let s2=new Set(['Aswan' , 'Sohag' , 'Alex' , 'Qena','Draw','Cairo']);
// console.log(s1.intersection(s2))
// console.log(s1.union(s2));



// let difference = new Set([...s1].filter(x => !s2.has(x)));
// s1.add('ffff');
// console.log(s1.has('ffff')); //true
// console.log(s1.has('gggg')); //false
// console.log(difference);
// console.log(s1.union(s2));

// console.log(s1.intersection(s2));


///5////

let obj= {Grades:[
    {Coursename:"JavaScript", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"React", Grade:"V.Good"},
    {Coursename:"ESNext", Grade:"Good"},
    {Coursename:"NodeJS", Grade:"V.Good"}]}
    


let mp=new Map();
mp.set("hend" , {Grades:[
    {Coursename:"JavaScript", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"React", Grade:"V.Good"},
    {Coursename:"ESNext", Grade:"Good"},
    {Coursename:"NodeJS", Grade:"V.Good"}]});







