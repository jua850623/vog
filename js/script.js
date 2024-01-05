// window.addEventListener('wheel', go);
let offset;
let sectionCounter = 0;
let count = 0;

window.addEventListener('wheel', go);

// document.querySelector(".gnb")
$(".gnb").click(mm);
$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".gnb").toggleClass("on");

    }

    
);

function mm(e){
    sectionCounter = $(e.target).parent().index();
    console.log(sectionCounter);

    offset = innerHeight*sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    godotmenu();
    sectionOn();
}



function go(e){
    count++;
    let goCount = count%6;
    console.log(goCount);


    if(e.wheelDelta>0){
        if(goCount == 5 && sectionCounter > 0){sectionCounter--}
        offset = innerHeight*sectionCounter;
    }else{
        if(goCount == 5 && sectionCounter < 6){sectionCounter++}
        offset = innerHeight*sectionCounter;
    }
    if(sectionCounter > 0){
        $(".dotmenu").addClass("on");
        $(".burger").addClass("show");
    }else{
        $(".dotmenu").removeClass("on");
        $(".burger").removeClass("show");
    }
    offset = innerHeight*sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");



godotmenu();
sectionOn();

}


function godotmenu(){
    $(".dotmenu a").removeClass("on");
    $(".dotmenu li").eq(sectionCounter).children("a").addClass("on");
}

function sectionOn(){
    $("section").removeClass("on");
    $("section").eq(sectionCounter).addClass("on");
}

// 스크롤 막기 시작
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('#element').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
//스크롤 막기 끝


//section2 날씨앱

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=34.794&lon=126.389&appid=458643516cbed25378552a40d0e56802&units=metric",current)
        

    function current(data){
        console.log(data.weather[0].main);
        console.log(data.main.temp);
        let time = new Date(data.dt * 1000);
        let month = time.getMonth() + 1;
        $(".title").html(data.weather[0].main);
        // $(".icon").html("<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>")
        $(".icon").html(`<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`)
        $(".time").html(

            time.getFullYear() + "년 " +
            month + "월" +
            time.getDate() + "일" 
            
        );
        $(".hour").html(

            time.getHours() + "시" +
            time.getMinutes() + "분"
        );
        $(".temp").html("온도 : " + data.main.temp +  "℃ <br> 체감온도 : " + data.main.feels_like + "℃");
        // $(".temp").html("체감온도 : " + data.main.feels_like);




    }