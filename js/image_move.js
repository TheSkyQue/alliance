window.onload=function(){
	//alert("载入js成功");
	//这里用id获取，不然获取不到style
	var oMove = document.getElementById("i_m");
	//console.log(oMove.style);
	//运动函数
	function funMove(pos){
		var move = function(){
			var curPos=parseInt(oMove.style.top,10);
			console.log(curPos);
			var speed = 60;
			if(Math.abs(curPos-pos)>speed){
				//判断移动方向
				curPos-=((curPos-pos)/Math.abs(curPos-pos))*speed;
				oMove.style.top = curPos+"px";
				setTimeout(move,30);
			}else{
				oMove.style.top = pos +"px";
			}
		};
		setTimeout(move,10);
	};
	var oclick=document.getElementById("ima_name").getElementsByTagName("li");
	for(var i=0; i<oclick.length; i++) {
		var flag = 0;
		var timeout;
		//闭包
		oclick[i].onmouseover =(function(num){
			return function(){
				oclick[num].style.background = "#36AB87";
				oclick[num].style.color = "white";
			}
			//funMove(-330*i);
		})(i);
		oclick[i].onmouseout =(function(num){
			return function(){
				oclick[num].style.background = "";
				oclick[num].style.color = "black";
			}
		})(i);
		if(i === 0){
			var step = function(){
				flag = flag>=oclick.length-1?0:flag+1;
				funMove(-330*flag);
				timeout = setTimeout(step,4000);
			};
			setTimeout(step,4000);
		}
	}
};