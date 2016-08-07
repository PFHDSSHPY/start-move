(function($){
    $.fn.startmove=function(obj,iTarget,attr){
        function getStyle(obj,name){
            if(obj.currentStyle){
                return obj.currentStyle[name];
            }else{
                return getComputedStyle(obj,false)[name];
            }
        }
        var cur=0;
        var timer=null;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            if(attr=='opacity'){
                cur=parseFloat(getStyle(obj,attr))*100;
                Math.round(cur);
            }else{
                cur=parseInt(getStyle(obj,attr));
            }
            var speed=(iTarget-cur)/5;
            speed=speed>0?Math.floor(speed):Math.ceil(speed);

            if(iTarget==cur){
                clearInterval(obj.timer);
            }else{
                if(attr=='opacity'){
                    obj.style[attr]=(cur+speed)/100;
                    obj.style.filter='alpha(opacity:'+(speed+cur)+')';
                }else{
                    obj.style[attr]=cur+speed+'px';
                }
            }
        },30)
    }
})(jQuery)
