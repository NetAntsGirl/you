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
	

  // 五星评价
 $('#star-img>li').hover(function(){
      var startIndex=$(this).index();
      var start1Index=((startIndex+1)*-16)-80+'px';
      $('#star-img').css({"background-position-y":start1Index});
 },function(){
     $('#star-img').css({"background-position-y":0});
 });

 $('#star-img>li').click(function(){
     var start2Index=$(this).index();
     var start3Index=(start2Index+1)*-16+'px';
     $('#star-img').css({"background-position-y":start3Index});
     alert("你给此商品的评分是"+(start2Index+1)+"颗星");

     $('#star-img>li').mouseleave(function(){
       $('#star-img').css({"background-position-y":start3Index});
     })
 })
  // 产品介绍
  $('#introduce>ul>li').hover(function(){    
    $(this).children('div').show();
  },function(){    
    $(this).children('div').hide();
  })

  // 颜色选择
  var imgIndex;
  $('#colorList>ul>li').click(function(){  
     imgIndex=$(this).index();
    var attr1=['蓝白','黄白','粉绿'];
    $('#colorList>p>span').html(attr1[imgIndex]);
    $('#imgList1>ul').eq(imgIndex).show().siblings().hide();
    $('#imgSmall>ul').eq(imgIndex).show().siblings().hide();
  })

  // 尺寸选择
  $('#sizeList>ul>li').click(function(){
    var sizeIndex=$(this).index();
    var attr2=['S','L','SL','LL'];
    $('#sizeList>p>span').html(attr2[sizeIndex]);
     $('#sizeList>ul>li').eq(sizeIndex).addClass('active').siblings().removeClass('active')
  })


// 放大镜
$('#imgSmall').mouseover(function(e){
    $('#imgBig').prepend('<img>');
  });
  $('#imgSmall').mousemove(function(e){
    var currentLeft = e.pageX - $(this).offset().left - $('#small-box').width()/2;
    var currentTop = e.pageY - $(this).offset().top - $('#small-box').height()/2;
    if( currentLeft < 0 ){
      currentLeft = 0;
    }if( currentLeft > $(this).width() - $('#small-box').width()){
      currentLeft =  $(this).width() - $('#small-box').width();
    }
    if( currentTop < 0 ){
      currentTop = 0;
    }if( currentTop > $(this).height() - $('#small-box').height()){
      currentTop = $(this).height() - $('#small-box').height();
    }
    $('#small-box').show().css({top:currentTop,left:currentLeft});
    var $myimg = $('#small-box').siblings('img').attr('src').replace('small','big');
    $('#imgBig').show().find('img').attr('src',$myimg).css({
      position:'absolute',
      left:-currentLeft/($(this).width() - $('#small-box').width())*($('#imgBig').find('img').width() - $('#imgBig').width()),
      top:-currentTop/($(this).height() - $('#small-box').height())*($('#imgBig').find('img').height() - $('#imgBig').height())
    });
    $(this).mouseout(function(e){
      $('#small-box').hide();
      $('#imgBig').hide().find('img').remove();
    });
  });
  $('.detail-show>img').click(function(e){
    var current;
    switch($(this).index()){
      case 0:current = 'one';
      break;
      case 1:current = 'two';
      break;
      case 2:current = 'three';
      break;
    }
    $('#myimg').attr('src',$('#myimg').attr('src').replace('one',current));
    $('#myimg').attr('src',$('#myimg').attr('src').replace('two',current));
    $('#myimg').attr('src',$('#myimg').attr('src').replace('three',current));
    $(this).css({borderColor:'#999999'}).siblings('img').css({borderColor:'#fff'});
  });


// 选择图片
  $('#img-box>img').click(function(){
    var current;
    var currentColor;
    switch($(this).index()){
      case 0:current = 'blue';currentColor = '蓝白';
      break;
      case 1:current = 'yellow';currentColor = '黄蓝';
      break;
      case 2:current = 'green';currentColor = '绿蓝';
      break;
    }
    for( var i = 0 ; i < $('.detail-show>img').length ; i ++ ){
      $('.detail-show>img').eq(i).attr('src',$('.detail-show>img').eq(i).attr('src').replace('blue',current));
      $('.detail-show>img').eq(i).attr('src',$('.detail-show>img').eq(i).attr('src').replace('yellow',current));
      $('.detail-show>img').eq(i).attr('src',$('.detail-show>img').eq(i).attr('src').replace('green',current));
    }
    if($(this).index() < 2){
      $('#myimg').attr('src',$('#myimg').attr('src').replace('blue',current));
      $('#myimg').attr('src',$('#myimg').attr('src').replace('yellow',current));
      $('#myimg').attr('src',$('#myimg').attr('src').replace('green',current));
    }if($(this).index() == 2){
      $('#myimg').attr('src',$('#myimg').attr('src').replace('blue',current).replace('three','one'));
      $('#myimg').attr('src',$('#myimg').attr('src').replace('yellow',current).replace('three','one'));
      $('#myimg').attr('src',$('#myimg').attr('src').replace('green',current).replace('three','one'));
    }
    $(this).css({borderColor:'#999999'}).siblings('img').css({borderColor:'#fff'});
    $('.current-color').text(currentColor);
  });

  })