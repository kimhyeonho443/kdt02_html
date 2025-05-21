document.addEventListener('DOMContentLoaded', () => {             //돔컨텐츠로드가 끝나면 변수를 시행하겠다는 의미
    const img = document.querySelector(".mdiv > img");
    const bt = document.querySelector(".mdiv > button");

    bt.addEventListener('click', () => {      
        //1. 1에서 6까지 랜던수 생성 
        let n = Math.floor(Math.random() *6) + 1 ; // 1~6까지의 랜덤수 

        //2. 랜덤수에 해당하는 이미지 변경 
        img.setAttribute('src', `../img/${n}.png`);
        img.setAttribute('alt', `${n}번 주사위`);
        
    });
});