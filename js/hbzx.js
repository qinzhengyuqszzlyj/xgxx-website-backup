$(document).ready(function(){
	banner();

})	
	function banner(){
		var i=0;
		var timer=null;	
		//向右播
		$(".btn .next").click(function(){
			i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly()
		
		})
		
		//向左播	
		$(".banner .btn .prev").click(function(){
			i--;
			if(i<0){
				i=5;
			}
			paly();
		})
		
		//鼠标悬停小图标对应图片轮播  
		$(".banner .icon ul li").mouseover(function(){
			i=$(this).index();//点到谁就获取谁的序列号
			paly();
		})
		
		//自动轮播
		timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000)
		//鼠标悬停banner，自动播放停止	
		$(".banner").hover(function(){
			clearInterval(timer);
			$(".btn").show();
			},function(){
				
			timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000);	
			$(".btn").hide();	
		})	
		//封装
		function paly(){
			$(".banner .pic ul li").eq(i).addClass("active").siblings().removeClass("active");
			$(".banner .icon ul li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .txt ul li").eq(i).addClass("show").siblings().removeClass("show");		
			
			}
	}	
