(function (){
    function ToastView(){
        ToastView.__super.call(this);
        this.init();
    }
    Laya.class(ToastView,"ToastView",ToastUI);
    var _proto = ToastView.prototype;
    _proto.init = function(){
        this.alpha = 0;
    }
    _proto.hide = function(){
        Laya.Tween.to(this,{alpha:0},1000);
    }
    _proto.show = function(text){
        this.title.text = text;
        Laya.Tween.to(this,{alpha:1},1000);
        Laya.timer.once(3000,this,this.hide);
    }
})();