/**
 * Created by 孙帅男 on 2017/7/20.
 */
$(function(){

    $.fn.extend({
        Tab : function(type,type1){//type移入哪个，type1是哪个元素来删除class,同时对应的下标加class
        let obj = $(this);
        obj.find(type).on("mouseover",function(){
            console.log(1);
            $(this).addClass("active").siblings().removeClass("active");
            obj.find(type1).removeClass("show");
            obj.find(type1).eq($(this).index()).addClass("show");
        })
    },
        Hove : function(){
          let obj = $(this);
            obj.hover(
                function(){
                    obj.find(".showList").toggleClass("show");
                }
            )
        }
    })
})