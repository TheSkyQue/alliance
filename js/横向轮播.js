/**
 * Created by Administrator on 2016/12/6.
 */
$(function(){
    function Scroll(obj,speed,interval){
            $box = $("."+obj)
            $imgUL = $("#move1").children(".image_move");
            $imgLi = $imgUL.children("li");
            console.log($imgLi,$imgUL);
            n=$imgLi.length;
            width = $imgLi.width(),
                left = parseFloat($imgUL.css("left")),
                k = 0,
                // Player;
                //$imgUL.css("width",n*width);
                console.log(n);
            /* function scroll(){ //轮播事件
             $imgUL.stop().animate({left:-width},speed,function(){
             k += 1;
             $imgUL.css("left",0);
             $imgUL.children("li:first").appendTo($(this));
             //$btnLi.removeClass('cur');
             if(k >= n){
             k = 0;
             }
             //$btnUl.children("li").eq(k).addClass('cur');
             });
             };*/
            // };
    }
    Scroll("#move1",600,4000);
})