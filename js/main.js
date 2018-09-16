'use strict';

var numberOfItems=$("#loop .list-group").length;
var limitPerPage=4;
$("#loop .list-group:gt("+ (limitPerPage-1) +")").hide();
var totalPages=Math.round(numberOfItems/limitPerPage);
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");
for(var i=2; i<=totalPages;i++){
	$(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>");

}
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label='next'><span aria-hiddin='true'>&raquo;</span></a></li>");

$(".pagination li.current-page").on("click",function(){
		if ($(this).hasClass("active")) {
			return false;
		}
		else{
			var currentPage=$(this).index();
			$(".pagination li").removeClass("active");
			$(this).addClass("active");
			$("#loop .list-group").hide();

			var grandTotal=limitPerPage * currentPage;

			for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
				$("#loop .list-group:eq(" + i + ")").show();
			}
		}

});

$("#next-page").on("click",function(){
		var currentPage=$(".pagination li.active").index();
		if (currentPage===totalPages) {
		return false;
	}
	else{
		 currentPage++;
		$(".pagination li").removeClass("active");
		$("#loop .list-group").hide();
		var grandTotal=limitPerPage * currentPage;

			for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
				$("#loop .list-group:eq(" + i + ")").show();
			}
		$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
	}
	
});

$("#previous-page").on("click",function(){
		var currentPage=$(".pagination li.active").index();
		if (currentPage===1) {
		return false;
	}
	else{
		 currentPage--;
		$(".pagination li").removeClass("active");
		$("#loop .list-group").hide();
		var grandTotal=limitPerPage * currentPage;

			for(var i=grandTotal-limitPerPage;i<grandTotal;i++){
				$("#loop .list-group:eq(" + i + ")").show();
			}
		$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
	}
	
});