//버튼을 눌렀을 때 사라지는 함수 
const lotto = () => {
    document.getElementById("nlist").innerHTML = "";

    let arr = [];       //새로운 배열 만들기

    //중복되지 않게 6개의 숫자 생성
    while (arr.length < 6) {
        let n = Math.floor(Math.random() * 45) + 1;  //1~45까지의 랜덤수 생성

        //랜덤수가 이미 있는 경우
        if (arr.includes(n)) continue;   //continue 반복문 처음으로

        //랜덤수를 배열에 추가 
        arr.push(n);
    }
    //배열 정렬
    arr.sort((a, b) => a - b);            //숫자 정렬을 할때는 내림차순으로 콜백해주어야함
    console.log(arr)

    //보너스 번호 
    let bonus = [];
    while(bonus.length < 1) {
        let n = Math.floor(Math.random() * 45) + 1;  //1~45까지의 랜덤수 생성

        //랜덤수가 이미 있는 경우
        if (arr.includes(n)) continue;   //continue 반복문 처  음으로\
        bonus.push(n);
    }

    //전체배열
    // arr.push('+');
    arr = [...arr, ...bonus];               //...는 전개연산자   전개연산자는 배열이나 객체의 요소를 개별적으로 분리하여 사용할 수 있게 해주는 기능
    console.log(arr);

    //span을 만드는 태그 배열   span은 HTML의 인라인 요소로, 주로 텍스트의 특정 부분을 스타일링하거나 조작하기 위해 사용, 특별한 의미를 가지지 않으며, 단순히 텍스트나 인라인 콘텐츠를 감싸는 역할
    let tags = arr.map( item => `<span class="sp${Math.floor(item/10)}">
                                ${item}</span>`
                            );
    tags.splice(6, 0, "<span id='spPlus'>+</span>");

    tags = tags.join('');
    console.log(tags)
    document.getElementById("nlist").innerHTML = tags;

} 