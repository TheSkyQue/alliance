/**
 * Created by Administrator on 2016/12/6.
 */
$(function(){
        function Scroll(obj,speed,interval){ //父级容器，轮播速度，切换间隔
                //alert(2);
                $("#"+obj).each(function(){
                            var $box = $(this),
                            $imgUl = $box.children(".image_move"),
                            $imgLi = $imgUl.children("li"),
                            $btnUl = $box.children(".image_name"),
                            $btnLi = $btnUl.children("li"),
                            n = $imgLi.length,
                            width = $imgLi.width(),
                            left = parseFloat($imgUl.css("left")),
                            k = 0,
                            Player;
                        $imgUl.css("width",n*width);
                        //alert(1);
                        function scroll(){ //轮播事件
                                $imgUl.stop().animate({left:-width},speed,function(){
                                        k += 1;
                                        $imgUl.css("left",0);
                                        $imgUl.children("li:first").appendTo($(this));
                                        $btnLi.removeClass('cur');
                                        if(k >= n){
                                                k = 0;
                                        }
                                        $btnUl.children("li").eq(k).addClass('cur');
                                });
                        }
                        $btnLi.click(function(){ //
                                var index = $btnLi.index(this);
                                $(this).addClass('cur').siblings("li").removeClass('cur');
                                if(index >= k){
                                        var dif = index-k;
                                        left = -dif*width;
                                        $imgUl.stop().animate({left:left},speed,function(){
                                                $imgUl.css("left",0);
                                                $imgUl.children("li:lt("+dif+")").appendTo($imgUl);
                                        });
                                }
                                else{
                                        var j = n-(k-index);
                                        $imgUl.css("left",(index-k)*width);
                                        $imgUl.children("li:lt("+j+")").appendTo($imgUl);
                                        $imgUl.stop().animate({left:0},speed);
                                }
                                k = index;
                        });
                        Player = setInterval(function(){scroll()},interval);
                });
        }
        //alert(1);
                Scroll("move1",600,4000);
})