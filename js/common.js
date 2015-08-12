$(document).ready(function (){
	//소셜 좋아요 버튼 팝업창
	$("#header .like_btn").on("click",function  () {
		var href=$(this).parent().attr("action");
		console.log(href);
		window.open(href,"new", "top=200, left=900, width=500, height=300");
		return false;
	});
	//브레이킹뉴스 탭브라우징
	var tabList=$("#content .break_list");
	tabList.children(".btn").on("click",function  () {
		tabList.removeClass("on").children(".cnt").hide();
		$(this).parent().addClass("on").children(".cnt").show();
	});
	//뉴스레터
	var letter=$("#content .newsletter .letter");
	letter.children("input").on({
		click:function  () {
			$(this).prev().css("left","-9999px");
		},
		blur:function  () {
			$(this).val()==""?$(this).prev().css("left","32px"):$(this).prev().css("left","-9999px");
		}
	});
});