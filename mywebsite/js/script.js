
	// swiper1
	var swiper1 = new Swiper('.swiper1',{
	           autoplay:5000,
	           autoplayDisableOnInteraction : false,
	           speed:500,
	           loop:true,
	           effect: 'cube',
	                 grabCursor: true,
	                 cubeEffect: {
	                   shadow: true,
	                   slideShadows: true,
	                   shadowOffset: 20,
	                   shadowScale: 0.94,
	                 },
	                 pagination: '.swiper-pagination',
	                 
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
	//
	$(window).resize(function(){
		   var w=$(".swiper-slide").find("img").height();
	                var h=$(".swiper-slide").find("img").height();
	                $(".swiper-wrapper,.swiper-slide").css("height",h)
	 })
	//让页面居中显示
	$(window).resize(function(){
		var win=$(window).width();
		if(win<800){
		$('.banner').height(win*0.8);
		}
		else if(win>800){
		$('.banner').height(800*0.8);
		}
	});
	$(function(){
		var win=$(window).width();
		if(win<800){
		$('.banner').height(win*0.8);
		}
		else if(win>800){
		$('.banner').height(800*0.8);
		}
	});

	
	$('.me').click(function(){
                     $('.tabli').removeClass('active');
                     $(this).addClass('active');
		$(window).scrollTop($('#me').prop("offsetTop")-60)
	})
	$('.job').click(function(){
		$('.tabli').removeClass('active');
		$(this).addClass('active');
		$(window).scrollTop($('#job').prop("offsetTop")-60)
	})
	$('.project').click(function(){
		$('.tabli').removeClass('active');
		$(this).addClass('active');
		$(window).scrollTop($('#project').prop("offsetTop")-60)
	})
	$('.contact').click(function(){
		$('.tabli').removeClass('active');
		$(this).addClass('active');
		$(window).scrollTop($('#contact').prop("offsetTop")-60)
	})

          $(window).scroll(function(){
	          	var height1=$('#me').prop("offsetTop")-60;
	          	var height2=$('#job').prop("offsetTop")-60;
	          	var height3=$('#project').prop("offsetTop")-60;
	          	var height4=$('#contact').prop("offsetTop")-60;
	          	
          	           if($(window).scrollTop()<height2){
          	           	$('.tabli').removeClass('active');
          	           	$('.tabli.me').addClass('active');
          	           }
          	           else if($(window).scrollTop()<height3){
          	           	$('.tabli').removeClass('active');
          	           	$('.tabli.job').addClass('active');
          	           }
          	           else if($(window).scrollTop()>height3){

          	           	if($(document).scrollTop()==$(document).height()-$(window).height()){
          	           		$('.tabli').removeClass('active');
          	           		$('.tabli.contact').addClass('active');
          	           	}else{
	          	           	$('.tabli').removeClass('active');
	          	           	$('.tabli.project').addClass('active');
	          	           }
          	           }
          	           

          })