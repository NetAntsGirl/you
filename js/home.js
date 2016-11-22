$(function(){
	// 顶部首尔站
	$('.Seoul-red').hover(function(){
		$('.Seoul-red').html('Seoul Station').css({"fontSize":'12px'});
	},function(){
		$('.Seoul-red').html('首尔站');
	})

	// banner导航
	$('#banner-List li').hover(function(e){
		var $index=$(e.currentTarget);
		$index.css({"background":"#666"}).find('.title').find('a').css({"color":"#fff"}).parent().siblings('p').find('a').css({"color":"#fff"});
		$index.find('.title').find('.yund').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.huwai').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.nvxie').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.nanz').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.tongz').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.xiangb').addClass('active').siblings().removeClass('active');
		$index.find('.title').find('.shouer').addClass('active').siblings().removeClass('active');
		$index.children('.banner-nav-Con').css({"display":'block'});
	},function(e){
		var $index=$(e.currentTarget);
		$index.css({"background":"#fff"}).children().find('a').css({"color":"#666"});
		$index.find('.title').find('.yund').removeClass('active');
		$index.find('.title').find('.huwai').removeClass('active');
		$index.find('.title').find('.nvxie').removeClass('active');
		$index.find('.title').find('.nanz').removeClass('active');
		$index.find('.title').find('.tongz').removeClass('active');
		$index.find('.title').find('.xiangb').removeClass('active');
		$index.find('.title').find('.shouer').removeClass('active');
		$index.children('.banner-nav-Con').css({"display":'none'});
	})

	// 轮播图
	var timer=setInterval(runloop,2000);
	var count=0;
	runloop();
	function runloop(){
		$(".scrollImg a").eq(count).show().siblings('.scrollImg a').hide();
		$(".scrollImg .scrollImg-list span").eq(count).addClass("active").siblings().removeClass('active');
		count++;
		if(count == 6){
			count = 0;
		}
	}
	$(".scrollImg a").hover(function(e){
		clearInterval(timer);
		count=$(e.currentTarget).index();
	},function(){
        timer=setInterval(runloop,2000);
	});
	$(".scrollImg .scrollImg-list span").hover(function(e){
		clearInterval(timer);
        $item=$(e.currentTarget);
        $(".scrollImg a").eq($item.index()).show().siblings('.scrollImg a').hide();
        $(".scrollImg .scrollImg-list span").eq($item.index()).addClass("active").siblings().removeClass('active');
	},function(e){
		count=$(e.currentTarget).index();
		timer=setInterval(runloop,2000);
	})

	// hotBrand的轮播
	$('.next').click(function(){
		$('.brand_wallwrap ul').animate({"left":"-1106px"});
	})
	$('.pre').click(function(){
		$('.brand_wallwrap ul').animate({"left":"0px"});
	})

	// 特卖区导航
	$("#specila-List li").hover(function(){
		var $specialIndex=$(this).index();
		$("#specila-List li").eq($specialIndex).css({"background":"#000"}).siblings().css({"background":"#fff"});
		$("#specila-List li").eq($specialIndex).find('a').css({"color":"#fff"}).parent().siblings().find('a').css({"color":"#666"})
		$("#specila-List li").eq($specialIndex).find('span').css({"display":"block","color":"#fff"}).parent().siblings().find('span').css({"display":"none"});
		$("#special-rgt .rgt-List").eq($specialIndex).show().siblings().hide();

	})

	// 竖排导航
	$(window).scroll(function(){
		if($(document).scrollTop()>192){
			$('#cen-Scroll').css({top:$(document).scrollTop()-192+15+"px"});
		}
	})
	// 优购导航
	$('#shopGuide-List .next').click(function(){
		$('#shopGuide-List .brand2').css({"display":"block"}).siblings('.brand1').css({"display":"none"});
	})
	$('#shopGuide-List .prev').click(function(){
		$('#shopGuide-List .brand1').css({"display":"block"}).siblings('.brand2').css({"display":"none"});
	})

})