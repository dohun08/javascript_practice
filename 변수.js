
/*변수 let 중복선언 불가
let num = 10; 
console.log(num);

let num = 20;  //에러
console.log(num);

num = 20;
console.log(num);
*/

//const 중복선언불가, 재선언불가
const id = "name"
const pw = 1234

id = "id" //오류
pw = 4321 //오류

//호이스팅 var
console.log(a) //-> undefined
var a = 1;
console.log(a) //-> a

//호이스팅 let
console.log(a) 
let a = 1;
console.log(a) 

//함수스코프 var
function main1(){
	if(ture){
    	var x = 0; 
    }
    console.log(x);
}

function main2(){
    var x = 1;
  if(ture){
      var x = 0;
      console.log(x) // -> 0
  }
    console.log(x); // -> 0
}


//블록스코프 let
function main3(){
	if(ture){
    	let x = 0; 
    }
    console.log(x);  //오류
}

function main4(){
	if(ture){
    	let x = 0;
        console.log(x); //x
    }
}

function main5(){
    let x = 1;
  if(ture){
      let x = 0;
      console.log(x) // -> 0
  }
    console.log(x); // -> 1
}