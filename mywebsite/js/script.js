
	// swiper1
	var swiper1 = new Swiper('.swiper1',{
	           nextButton: '.swiper-button-next',
	           prevButton: '.swiper-button-prev',
	           autoplay:5000,
	           autoplayDisableOnInteraction : false,
	           speed:500,
	           loop:true,
	           spaceBetween: 10,
	           effect: 'fade',
	           paginationClickable: true,
	           observer:true,//修改swiper自己或子元素时，自动初始化swiper
	           observeParents:true,//修改swiper的父元素时，自动初始化swiper
	           simulateTouch:false//启用内部的a链接
	});
	// swiper3
	var swiper3 = new Swiper('.swiper3', {
	    speed:500,
	    loop:true,
	    pagination: '.swiper2-pagination',
	    paginationClickable: true,
	    observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
	    // mousewheelControl:true,
	   nextButton: '.swiper-button-next',
	   prevButton: '.swiper-button-prev',
	   pagination: '.swiper-pagination',
	   paginationType: 'fraction',
	});
	// 
	// 自动播放：

	// 弹出微信二维码
	function IsPC() {
	    var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone",
	                "SymbianOS", "Windows Phone",
	                "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
	    return flag;
	}
	$(function(){ 
		if(IsPC()){
			$('.wxTool').hover(function(){
					$('.wxid').show();
				}, 
			function(){ 
			$('.wxid').hide(); 
			});
		}else{
			$('.wxTool').click(function(){
					$('.wxid').show();
			});
			$('#width').click( function(){ 
			$('.wxid').hide(); 
			});
		}
	            
	})
	// 视觉差
	$.stellar({
	  horizontalOffset: false
	});
	//
	$(window).resize(function(){
		   var w=$(".swiper-slide").find("img").height();
	                var h=$(".swiper-slide").find("img").height();
	                $(".swiper-wrapper,.swiper-slide").css("height",h)
	 })
	//让页面居中显示
	$(window).resize(function(){
		var win=$(window).width();
		if(win<600){
		$('.banner').height(0.5*win);
		}
		else if(win>1440){
		$('.banner').height(660);
		}
		else{
		$('.banner').height(520);	
		}
	});
	$(function(){
		var win=$(window).width();
		if(win<600){
		$('.banner').height(0.5*win);
		}
		else if(win>1440){
		$('.banner').height(660);
		}
		else{
		$('.banner').height(520);	
		}
	});

