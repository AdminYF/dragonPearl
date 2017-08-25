(function (){
    var borders = [
    ];
    var ani;
    function AnimateSprite(){
        AnimateSprite.__super.call(this);
        this.init();
    }
    AnimateSprite.cached = false;
    Laya.class(AnimateSprite,"AnimateSprite",Laya.Sprite);
    var _proto = AnimateSprite.prototype;
    _proto.init = function(){
        ani =  new Laya.Animation();
        ani.interval = 100;
        this.addChild(ani);
        if(!AnimateSprite.cached){
           console.log("cached");
            Laya.Animation.createFrames("res/atlas/border.atlas","borderAnimation");
             AnimateSprite.cached = true;
        }
        ani.play(0,true,"borderAnimation");
    }
})();