//쉬운거 하나부터 O
// 기존에 잇는 orange 삭제 ,첫번째 버튼을 누르면 orange 클래스 부착
// 기존에 잇는 show 삭제, 박스0에 show 클래스 부착

 
// document.querySelectorAll('.tab-button')[0].addEventListener('click' ,function(){

//     document.querySelectorAll('.tab-button')[1].classList.remove('orange');
//     document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    
//     document.querySelectorAll('.tab-content')[1].classList.remove('show');
//     document.querySelectorAll('.tab-content')[2].classList.remove('show');

//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');

// });

//좋은 관습 : 자주쓰는 셀렉터 변수에 넣어쓰기;
//var 버튼 = $('.tab-button)

//  $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
//   });

//   $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
//   });

//   $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');

//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
//   });

  //for 반복문
  
//   for (횟수){
//     console.log('안녕');
//   }

  // i가 0부터 시작해서 i를 1개씩 더하고 3이 되면 정지
  // 반복문 안에 있는 변수를 만들 때 항상 let 사용 (범위 차이)
  for (let i = 0; i < 3; i++){
    $('.tab-button').eq(i).on('click', function(){
        탭열기(i)

    // $('.tab-button').removeClass('orange');
    // $('.tab-button').eq(i).addClass('orange');

    // $('.tab-content').removeClass('show');
    // $('.tab-content').eq(i).addClass('show');
  });
  }
  

  const tabList = document.querySelectorAll('.tab-button', '.tab-content');
  // for (let i = 0; i < tabList.length;  i++){
  //확장성 있게 3를 지금 html에 있는 탭 버튼의 갯수를 확인함



  //함수로 축약하기

  function 탭열기(숫자){
    //축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 작동함 (i)      
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
  }