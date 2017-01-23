/**
 * Created by Administrator on 2016/12/8.
 */
$(function(){
    console.log("video");
    $("#Jvideo").on("mouseover","li",function(event){
        $("#Jvideo").children("li").removeClass("current");
        $(this).addClass("current");
        var index = +$(this).attr("val");
        console.log(index);
        switch(index){
            case 1:
                $("#Jvideo_n1").css("display","block");
                $("#Jvideo_n1").siblings("ul").css("display","none");
                //alert("成功");
                break;
            case 2:
                $("#Jvideo_n2").css("display","block");
                $("#Jvideo_n2").siblings("ul").css("display","none");
               // alert("成功");
                break;
            case 3:
                $("#Jvideo_n3").css("display","block");
                $("#Jvideo_n3").siblings("ul").css("display","none");
                break;
            case 4:
                $("#Jvideo_n4").css("display","block");
                $("#Jvideo_n4").siblings("ul").css("display","none");
                //alert("成功");
                break;
            case 5:
                $("#Jvideo_n5").css("display","block");
                $("#Jvideo_n5").siblings("ul").css("display","none");
                //alert("成功");
                break;
            case 6:
                $("#Jvideo_n6").css("display","block");
                $("#Jvideo_n6").siblings("ul").css("display","none");
                //alert("成功");
                break;
        }
    });
    $("#Jvideo_n1 li a").on("mouseover",function(event){
        //alert(1);
        //console.log($(this).children());
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n1 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });
    $("#Jvideo_n2 li a").on("mouseover",function(event){
        //alert(1);
        //console.log($(this).children());
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n2 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });
    $("#Jvideo_n3 li a").on("mouseover",function(event){
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n3 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });
    $("#Jvideo_n4 li a").on("mouseover",function(event){
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n4 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });
    $("#Jvideo_n5 li a").on("mouseover",function(event){
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n5 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });
    $("#Jvideo_n6 li a").on("mouseover",function(event){
        $(this).children(".shadow2").css("display","block");
        $(this).children("i").css("display","block");
    });
    $("#Jvideo_n6 li a").on("mouseout",function(event){
        $(this).children(".shadow2").css("display","none");
        $(this).children("i").css("display","none");
    });

    $("#J_videoMore").click(function(){
            //alert(1);
        console.log($(".video-more"));
        $(".video-more").css("display","block");
        $("#J_videoMore").css("display","none");
        $("#J_videoInner").css("display","block");
    });
//赛事中心
    console.log("match");
    $("#Jmatch").on("mouseover","li",function(event) {
        $("#Jmatch").children("li").removeClass("current");
        $(this).addClass("current");
        var index_match = +$(this).attr("val");
        console.log(index_match);
        switch(index_match){
            case 1:
                $("#Jmatch_n1").css("display","block");
                $("#Jmatch_n1").siblings("div").css("display","none");
                //alert("成功");
                break;
            case 2:
                $("#Jmatch_n2").css("display","block");
                $("#Jmatch_n2").siblings("div").css("display","none");
                //alert("成功");
                break;
            case 3:
                $("#Jmatch_n3").css("display","block");
                $("#Jmatch_n3").siblings("div").css("display","none");
                //alert("成功");
                break;
            case 4:
                $("#Jmatch_n4").css("display","block");
                $("#Jmatch_n4").siblings("div").css("display","none");
                //alert("成功");
                break;
            case 5:
                $("#Jmatch_n5").css("display","block");
                $("#Jmatch_n5").siblings("div").css("display","none");
                //alert("成功");
                break;
            case 6:
                $("#Jmatch_n6").css("display","block");
                $("#Jmatch_n6").siblings("div").css("display","none");
                //alert("成功");
                break;
        };
    });

    // 在线客服
    console.log("online");
    $("#J_onlineTab").on("mouseover","li",function(event){
        $("#J_onlineTab").children("li").removeClass("current");
        $(this).addClass("current");
        var index_online = +$(this).attr("val");
        switch(index_online){
            case 1:
                $("#J_onlineContent1").css("display","block");
                $("#J_onlineContent2").css("display","none");
                break;
            case 2:
                $("#J_onlineContent2").css("display","block");
                $("#J_onlineContent1").css("display","none");
                break;
        };
    });

    //右边内容

    //新闻公告
    console.log("新闻公告");
    $("#J_newsTab").on("mouseover","li",function(){
        $("#J_newsTab").children("li").removeClass("current");
        $(this).addClass("current");
        var index_news = +$(this).attr("val");
        console.log(index_news);
        switch(index_news){
            case 1:
                $("#news-content1").css("display","block");
                $("#news-content1").siblings("div").css("display","none");
                break;
            case 2:
            $("#news-content2").css("display","block");
            $("#news-content2").siblings("div").css("display","none");
                  break;
            case 3:
                $("#news-content3").css("display","block");
                $("#news-content3").siblings("div").css("display","none");
                break;
            case 4:
                $("#news-content4").css("display","block");
                $("#news-content4").siblings("div").css("display","none");
                break;
        };
    });

    //英雄/皮肤
    console.log("英雄/皮肤");
    $("#J_heroTab").on("mouseover","li",function(){
        $("#J_heroTab").children("li").removeClass("current");
        $(this).addClass("current");
        var index_news = +$(this).attr("val");
        console.log(index_news);
        switch(index_news){
            case 1:
                $("#J_freeList").css("display","block");
                $("#J_heroNew").css("display","none");
                $("#J_newskin").css("display","none");
                break;
            case 2:
                $("#J_heroNew").css("display","block");
                $("#J_newskin").css("display","none");
                $("#J_freeList").css("display","none");

                break;
            case 3:
                $("#J_newskin").css("display","block");
                $("#J_heroNew").css("display","none");
                $("#J_freeList").css("display","none");
                break;
        };
    });
    $("#J_freeList .free-list ").on("mouseover","a",function(){
        //console.log($(this));
        $(this).children("span").css("display","block");
    });
    $("#J_freeList .free-list ").on("mouseout","a",function(){
        $(this).children("span").css("display","none");
    });
    $("#J_heroNew .hero-new-list ").on("mouseover","a",function(){
        //console.log($(this));
        $(this).children("span").css("display","block");
    });
    $("#J_heroNew .hero-new-list ").on("mouseout","a",function(){
        $(this).children("span").css("display","none");
    });
    $("#J_newskin .hero-skin-list ").on("mouseover","a",function(){
        //console.log($(this));
        $(this).children("span").css("display","block");
    });
    $("#J_newskin .hero-skin-list  ").on("mouseout","a",function(){
        $(this).children("span").css("display","none");
    });

    /*合作媒体*/
    console.log("合作媒体");
    console.log($("#Link-click"));
    console.log($("#Link-more"));
    $("#Link-click").click(function(i){
        $("#Link-more").css("display","block");
        /*阻止冒泡*/
        i.stopPropagation();
    });
    $(document).click(function(){
        $("#Link-more").css("display","none");
    });

    /*主菜单下拉框*/
    //console.log($("#J_nav"));
    $("#J_nav").on("mouseover",function(){
        //alert(1);
        $("#J_nav-more").css("visibility","visible");
    });
    //console.log($("#J_nav-more"));
     $("#J_nav-more").on("mouseover",function () {
         //alert(1);
         $("#J_nav-more").css("visibility","visible");
     });
    $("#J_nav-more").on("mouseout",function () {
        //alert(1);
         $("#J_nav-more").css("visibility","hidden");
    });
    /*下拉菜单鼠标移入变色*/
    //console.log($("#J_nav-more").children("ul").children("li").children("a"));
    $("#J_nav-more").children("ul").children("li").children("a").mouseover(function(){
        $(this).css("color","skyblue")
    });
    $("#J_nav-more").children("ul").children("li").children("a").mouseout(function(){
        $(this).css("color","white")
    });
});
