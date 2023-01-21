

const num1Element = document.getElementById('num1') as HTMLInputElement;
const num12Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');
const numResults:Array<number> =[];
const textResults:string[] =[];

type NumorString = number | string;
type Result = {val:number;timestamp:Date};

interface ResultObj{
    val:number;
    timestamp:Date;
}

function add(num1:NumorString, num2:NumorString) {
    if(typeof num1 === 'number' && typeof num2 ==='number'){
        return num1 + num2;
    }
    else if(typeof num1==='string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
  }

  function printResult(resultObj:Result){
    console.log(resultObj.val);
  }
  
buttonElement.addEventListener('click',()=>{
const num1 = num1Element.value;
const num2 = num12Element.value;

//.value always return string, i.e why we put +sign to conver string into number
const result = add(+num1, +num2);
numResults.push(result as number);

const stringResult = add(num1,num2);
textResults.push(stringResult as string);

printResult({val:result as number, timestamp:new Date()});
console.log(numResults,textResults);
});

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked!');
    },1000);
});

myPromise.then((result)=>{
    console.log(result.split('w'));
});