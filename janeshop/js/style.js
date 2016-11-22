$(function(){
	// 换肤
	$('#topright ul li').click(function(e){
		var $index=$(e.currentTarget);
		var attr=['#4869ae','#bbd83a','#f8b94d','#44c7d5','#e43c6f','#c967dc'];
		$('#topright ul li').eq($index.index()).css({"background-positionY":"-15px"}).siblings().css({"background-positionY":"0px"});	
		$('.nav').css({"background-color":attr[$index.index()]});
		$('.content>.content-left>h3').css({"background-color":attr[$index.index()]});
	})

	//导航
	$('.nav ul li').hover(function(){		
		$(this).children('div').show();	
		$(this).children('div').css({"z-index":"3"});				
	},function(){
        $(this).children('div').hide();	
	})
	// 轮播图
   var timer=setInterval(runLoop,2000);
   var index=0;
   function runLoop(){
   	index++;
   	if(index==5){
   		index=0;
   	}
   	$('.content>.content-right>.content-rightOfleft>ul>li').eq(index).addClass('active1').siblings('li').removeClass('active1');
   	$('.content>.content-right>.content-rightOfleft>img').eq(index).show().siblings('img').hide();
   }
   $('.content>.content-right>.content-rightOfleft>ul>li').hover(function(e){
   	   clearInterval(timer);
       var $cur=$(e.currentTarget);
       	$('.content>.content-right>.content-rightOfleft>ul>li').eq($cur.index()).addClass('active1').siblings('li').removeClass('active1');
     	$('.content>.content-right>.content-rightOfleft>img').eq($cur.index()).show().siblings('img').hide();
   },function(e){
   	   index=$(e.currentTarget).index();
   	   timer=setInterval(runLoop,2000);
   })

   // 文字
   var x=10;
   var y=20;
   $('#centerRight>ul>li>a').mouseover(function(e){   	
   	 var texts=$(this).text();
   	$('.showWenzi').text(texts).show().css({
      'left':(e.pageX+x)+'px',
      'top':(e.pageY+y)+'px',
      "font-size":"12px"});

    $('#centerRight>ul>li>a').mousemove(function(e){
    $('.showWenzi').text(texts).show().css({
      'left':(e.pageX+x)+'px',
      'top':(e.pageY+y)+'px',
      "font-size":"12px"});
     }) 	
   }).mouseout(function(){
   	$('.showWenzi').hide();  
   })


   // 图片左移
   $('#content-bottomId>ul:first>li').click(function(e){
   	 var $index1=$(this).index();
   	 $('#content-bottomId ul li').eq($index1).css({"background-color":"#fa5889"}).siblings().css({"background-color":"#e4e4e4"});
   	 $('#content-bottomId ul li').eq($index1).children('a').css({"color":"#fff"});
   	 $('#content-bottomId ul li').eq($index1).siblings().children('a').css({"color":"black"});     	 
      
     $('#contenImgBox').animate({'left':-$index1*812  +'px'},1000);
      // $('#contenImgBox').addClass('spanAction').siblings().removeClass('spanAction');   	
   })


})