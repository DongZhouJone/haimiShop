 $(function(){
        ////////轮播自定义函数
        function addlilunbo(){
           // console.log(i)
            s++;
            i++;
            if(s>lilength-2){
                s=0;
            }
            if(i>lilength-1){
                i=1;
                $('.banner_yueshu').css('left',0)
            }
            var ulleft = -i*100;
            $('.header_banner ol li').eq(s).addClass('current').siblings().removeClass('current')
            $('.banner_yueshu').stop().animate({'left':ulleft+'%'},1000)
        }
        function addlilunbol(){
            s--;
            i--;
            if(s< 0){
                s=lilength-2;
            }
            if(i< 0){
                i=lilength-2;
                var  leftcurrent= i*100;
                $('.banner_yueshu').css('left',-leftcurrent+'%')
            }
            var ulleft = -i*100;
            $('.header_banner ol li').eq(s).addClass('current').siblings().removeClass('current')
            $('.banner_yueshu').stop().animate({'left':ulleft+'%'},1000)
        }
        var addli=$('.banner_yueshu li').eq(0).clone(true);
        $('.banner_yueshu').append(addli);
        var lilength =$('.banner_yueshu li').length;
        for(var o = 0; o<lilength-1; o++){
            $('.header_banner ol').append('<li></li>')
        }
        var ulwidth = lilength*100;
        var liwidth = 100/lilength;
        var timer01 = null;
        var i=0;
        var s = 0;
        $('.header_banner ol li').eq(0).addClass('current');
        // timer01 = setInterval(addlilunbo,4000);
        $('.banner_yueshu').css('width',ulwidth+'%');
        $('.banner_yueshu li').css('width',liwidth+'%');
        ////////轮播按钮点击事件
        $('.header_banner .banner_r').click(function(event) {
            addlilunbo();

        });

        $('.header_banner .banner_l').click(function(event) {
            addlilunbol();
        });
        ////////悬停停止定时器
        $('.header_banner').mouseenter(function() {
            clearInterval(timer01);
        })
        $('.header_banner').mouseleave(function() {
           timer01 = setInterval(addlilunbo,4000);
        });
        $('.header_banner ol').on('click','li',function(event) {
            $(this).addClass('current').siblings().removeClass('current');
            s= i = $(this).index();

            var ulleft = -i*100;
            $('.banner_yueshu').stop().animate({'left':ulleft+'%'},1000)

        });
        $('#portfoliolist .portfolio img').css('height',$('#portfoliolist .portfolio:nth-of-type(1) img').width()*(278/376)+'px');
        $(window).resize(function(event) {
            $('#portfoliolist .portfolio img').css('height',$('#portfoliolist .portfolio:nth-of-type(1) img').width()*(278/376)+'px');
        });
})
