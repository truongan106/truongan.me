$( document ).ready(function() {
    console.log( "document loaded" );
    $(".container .welcome").text("Rất vui khi bạn ghé thăm nhà của An!").addClass("animated bounceIn");
    setTimeout(function(){
    	$(".liveshow").text("Có gì vui?").addClass("liveshow-button animated shake q01")
    	whatfun();
    },3000);

    
});

var whatfun = function(){
	$(".q01").on("click",function(e){
		$(e.currentTarget).remove();
		question01();
    });

};

var question01 =function() {
	$(".container .welcome").text("Bạn có biết An hông?");
	$(".contents").html("").append('<div class="answer-yes-button">Biết chứ!</div><div class="answer-no-button">Mày là ai?</div>').removeClass("liveshow-button").css({
		    display: "flex"

	});
  	$(".answer-yes-button").addClass("bounce animated").on("click",function(){
  		q02(1);
  	});
	$(".answer-no-button").addClass("bounce animated").on("click",function(){
  		 q02(2);

  	});
};

var q02 =function(con) {
	if(con==1){
		$(".container .welcome").text("Từ 1 đến 10, An ");
		$(".contents").html("").append('<div class="linkfb"><a href="https://www.facebook.com/truongan1006">https://www.facebook.com/truongan1006</a></div>');
	
	}else{
		$(".container .welcome").text("Làm quen nhé! Đây là Facebook của An!");
		$(".contents").html("").append('<div class="linkfb"><a href="https://www.facebook.com/truongan1006">https://www.facebook.com/truongan1006</a></div>');
	}
}