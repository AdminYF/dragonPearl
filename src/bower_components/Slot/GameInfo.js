(function(){
    function GameInfo(){
        GameInfo.__super.call(this);
        this.init();
    }
    Laya.class(GameInfo,"GameInfo",GameInfoUI);
    var _proto = GameInfo.prototype;
    _proto.init = function(){
        this.box.vScrollBar.visible = false;
    }
})();