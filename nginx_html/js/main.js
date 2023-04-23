

//이미지를 클릭하였을 때, 로그아웃 기능
$('.pro-img').click(function () {
    const result = confirm('정말 로그아웃 하시겠습니까?'); // confirm함수를 이용하여 alert형식으로 로그아웃과 취소를 할 수 있는 창 띄움

    if (result) {                                         //확인을 누르면 1(참)이 되고, fade out효과와 함께 index.html로 이동
        $('.all-element').fadeOut(400, function() {               
            window.location.href = 'index.html';          //fade out효과와 함께 INDEX.HTML을 불러옵니다.
        });
    }   
});

$('.food-find').click(function () {                       //register retaurant 버튼을 누르면
        $('.all-element').fadeOut(400, function() {       // fadeout효과와 함께 register-food.html로 이동
            window.location.href = '/tomcat/register-food.jsp';
        });
    });  

 $('.trip-find').click(function () {                      //search trip 버튼을 누르면
     $('.all-element').fadeOut(400, function() {          // fadeout효과와 함께 search-trip.html로 이동 
        window.location.href = '/tomcat/search-trip.jsp';
     });
 });  
    


$(document).ready(function(){                              //페이지 로드시, fadein효과를 줌 
    $('.all-element').fadeIn(600);
});
