//쉬운거 하나부터 O
// 기존에 잇는 orange 삭제 ,첫번째 버튼을 누르면 orange 클래스 부착
// 기존에 잇는 show 삭제, 박스0에 show 클래스 부착

 
document.querySelectorAll('.tab-button')[0].addEventListener('click' ,function(){
   

    document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    
    document.querySelectorAll('.tab-content')[1].classList.remove('show');
    document.querySelectorAll('.tab-content')[2].classList.remove('show');


    document.querySelectorAll('.tab-button')[0].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.add('show');

        const tabButton1 = document.querySelectorAll('.tab-button')[0];
    const tabButton2 = document.querySelectorAll('.tab-button')[1];
    const tabButton3 = document.querySelectorAll('.tab-button')[2];

    const tabContent = document.querySelectorAll('.tab-content')[0];
    const tabContent2 = document.querySelectorAll('.tab-content')[1];
    const tabContent3 = document.querySelectorAll('.tab-content')[2];
});

// $('.tab-button').eq(0).on('click', function(){


// });