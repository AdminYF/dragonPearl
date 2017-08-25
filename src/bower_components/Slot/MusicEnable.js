(function (){
    function MusicEnable(){
        MusicEnable.__super.call(this);
        this.init();
    }
    Laya.class(MusicEnable,"MusicEnable",MusicPromptUI);
    var _proto = MusicEnable.prototype;
    _proto.init = function(){
        this.yes.title.text = "是";
        this.no.title.text = "否";
    }
    _proto.buttonClicked = function(handler){
        var value = false;
        var h = Laya.Handler.create(this,handler,null,false);
        this.yes.on(Laya.Event.MOUSE_DOWN,this,function(){
            value = true;
            handler(value);
        },[h]);
        this.no.on(Laya.Event.MOUSE_DOWN,this,function(){
            value = false;
            handler(value);
        },[h]);
    }
}
)();