
$("#menu").on("click", function(){
	$(".side-nav").toggleClass("hidden");
	checkHidden();
});

$("#close").on("click", function(){
	$(".side-nav").addClass("hidden");
	checkHidden();
});

$(".about-li").on("click", function(){
	if(!$(".services-ul").hasClass("hidden")){
		$(".services-ul").toggleClass("hidden");
	}
	$(".about-ul").toggleClass("hidden");
	checkHidden();
});

$(".services-li").on("click", function(){
	if(!$(".about-ul").hasClass("hidden")){
		$(".about-ul").toggleClass("hidden");
	}
	$(".services-ul").toggleClass("hidden");
	checkHidden();
});

function checkHidden(){
	if($(".side-nav").hasClass("hidden")){
		$("body,html").css("overflow", "visible");
	} else {
		$("body,html").css("overflow", "hidden");
	}
}

