(function(){
    function PromptView(title){
        PromptView.__super.call(this);
        this.init();
        this.label.text = title;
    }
    Laya.class(PromptView,"PromptView",PromptUI);
    var _proto = PromptView.prototype;
    _proto.init = function(){
        this.bg.alpha = 0.3;
    }
    _proto.buttonClick = function(handler){
        var h = Laya.Handler.create(this,handler,null,false);
        this.button.on(Laya.Event.MOUSE_DOWN,this,function(cb){
            this.removeSelf();
            cb && cb.run();
        },[h]);
    }
})();