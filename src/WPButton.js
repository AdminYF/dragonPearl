(function(){
    var source;
    var title;
    function WPButton(src,t){
        source = src;
        title = t;
        WPButton.__super.call(this);
        this.init();
    }
    Laya.class(WPButton,"WPButton",Laya.Image);
    var _proto = WPButton.prototype;
    _proto.init = function(){
        this.skin = source;
        this.label = new Laya.Label(title);
        this.label.fontSize = 25;
        this.label.color = "white";
        // this.label.bgColor = "white";
        this.label.x = (this.width - this.label.width) / 2;
        this.label.y = (this.height - this.label.height) / 2;
        this.addChild(this.label);
    }
})();