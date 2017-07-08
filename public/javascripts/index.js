$( document ).ready(function() {
    console.log( "document loaded" );
    $(".container .welcome").text("Rất vui khi bạn ghé thăm nhà của An!").addClass("animated bounceIn");
    setTimeout(function(){
    	$(".liveshow").text("na aaa aaa?").addClass("liveshow-button animated shake")
    	whatfun();
    },3000);

    
});

var whatfun = function(){
	$(".liveshow.liveshow-button.animated.shake").on("click",function(){
		question01();
    })

};

var question01 =function() {
	$(".container .welcome").text("Bạn có biết An hông?");
	$(".liveshow").html('<div class="answer-yes-button">Biết chứ!</div><div class="answer-no-button">Mày là ai?</div>')
	$(".answer-yes-button").addClass("bounce animated");
	$(".answer-no-button").addClass("bounce animated");

}