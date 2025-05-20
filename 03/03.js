/* function Hello(){
 alert("안녕하세요. 자바스크립트입니다.!");
 }
 */

//화살표 함수
const Hello = () => {

    //alert("안녕하세요. 자바스크립트입니다.!");
    console.log(name + "님 안녕하세요.");

    var name="PNU";
    console.log(name + "님 안녕하세요.");
}

const Hello2= () => {

    //alert("안녕하세요. 자바스크립트입니다.!");
    //console.log(name + "님 안녕하세요.");

   let name="PNU";
    //console.log(name + "님 안녕하세요.");
    console.log(`${name} 님 안녕하세요.`);
}

const check = () => {
    let s = '123';
    let x = '10';

    console.log(s);
    console.log(typeof(s));
    console.log(isNaN(s));
    if (!isNaN(s) && !isNaN(x)){      //s와 x가 둘다 숫자라면 연산을 하겠다
        s= parseInt(s);
        x= parseInt(x);
    }

    console.log(s+x);
    
}

const checkFor = () => {
    let s = "토마토,바나나";

    console.log(s[0]) ;
    console.log(s.charAt(0));

    console.log(s.split(','));
    console.log(s.indexOf(','));    //,가 몇번째에 있는지
    console.log(s.includes(','));   //','가 있는지

    for(let i = 0; i<s.length; i++) {   //반복문
        console.log(s[i]);
    }

    for(let c of s) {
        console.log(c) ;
    }
}