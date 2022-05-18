/////One/////////
let obj = {
    name: "hend",
    address: "aswan",
    age: 27
}
let handler = {
    set(obj, propName, value) {
        ////1-A///
        if (propName === "name") {
            if (!isNaN(value))
                throw "this name not string ";
        }
        let min = 0;
        let max = 7;
        if (value <max) {
            throw "the name less than 7 char";
        }
        obj[propName] = value;
    

    ///1- B///
    if(propName === "address"){
        if(!isNaN(value)){
            throw "not address";

        }

    obj[propName]=value;
    }
//1- C////

if(propName==='age'){
    if(!isFinite(value)){
        throw "the age not integer";

    }
    if(value > 25 && value>60){
        throw "the age invalid";

    }
}
  obj[propName]=value;
}
}

let objProxy = new Proxy(obj,handler);
// objProxy.name ="gddddddddddd";
// console.log(objProxy.name);
// objProxy.address = 111;
// console.log(objProxy.address);
// objProxy.age = 100;
// console.log(objProxy.age);





///////Two/////////

class shape

{ 
    static count=0;
   
    constructor(x,y){
        shape.funCount()
    this.x=x;
 this.y=y;

    }

static funCount(){
    this.count++;
}
display(){
    console.log(x,y)
}
}

class rectagle extends shape
{
    constructor(long,width){
        super(long,width)
        this.long=long;
        this.width=width;
    }

recPer(long,width)
{
    return long+width*2
}
recearia(long,width){
    return long*width;

}
}
class square extends shape{
    constructor(long,width){
        super(long,width)
        this.long=long;
        this.width=width;

    }

    sqper(long){
        return long*4;
    }
    sqeraia(long)
    {
        return long*2;
    }

}
    class circle extends shape{
        constructor(x,y,r){
            super(x,y,r)
            this.r=r;
        }
        cirper(r){
            return 3.14*r*2;
        }

        cirearia(r){
            return 2*3.14*r;
        }
    }


    

   let sh1 = new shape(10,50); 
  console.log(sh1);
   
  let rect1=new rectagle();
  console.log(rect1.recearia(10,5));//
  console.log(rect1.recPer(10,5));




  let mycircle=new circle();
  console.log(mycircle.cirearia(10));
  console.log(mycircle.cirper(5));


  let mySqure = new square();
  console.log(mySqure.sqeraia(5));
  console.log(mySqure.sqper(5));



  //////////////3////////////
  function *fb(p)
  {
  let x = 0;
  let y=1; 
   count = x+y;
  for(let i=1;i<=p; i++){
  x=y;
  y=count;
  yield count;

}
}
let gggg =fb(10)
for(let val of gggg){
    console.log(val)
}

  ///////////////4////////////////////
function it(){
    let x = 0;
    let y = 15;
let formation ={
  next:function(){
      if(x<=y){
          x++;
          return{value:x , done:false}    
        }else {
            return{value:undefined,done:true}
  }
  }
}
return formation;
}
// let itfomation=formation[Symbol.iterator]=iterator();
//  let showiterotor=iterator() 

 obj[Symbol.iterator]=iterator=it 

for( let val of obj)
{
  console.log(val)
}