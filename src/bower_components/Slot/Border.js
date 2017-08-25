(function(){
    var name;
    function Border(src){
        name = src;
        Border.__super.call(this);
        this.init();
    }
    Laya.class(Border,"Border",Laya.Image);
    var _proto = Border.prototype;
    _proto.init = function(){
        var s = 0.825;
        this.skin = name;
        var sp = new AnimateSprite();   
        sp.size(s * sp.width,s * sp.height);
        sp.scale(s,s);

        sp.x = 10;
        sp.y = 10;

        // sp.x = (this.width - sp.width) / 2;
        // sp.y = (this.height - sp.height) / 2;
        
       

        // sp.centerX = 0;
        // sp.centerY = 0;      
        this.addChild(sp);
    }
})();