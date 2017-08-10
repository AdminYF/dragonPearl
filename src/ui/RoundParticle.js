(function(){
    function RoundParticle(){
        RoundParticle.__super.call(this);
        this.init();
    }
    Laya.class(RoundParticle,"RoundParticle",RoundParticleUI);
    var _proto = RoundParticle.prototype;
    _proto.init = function(){
        this.round = 0;
        var numChildren = this.numChildren;
        for(var i = 0; i < numChildren; i++){
            var obj = this.getChildAt(i);
            obj.alpha = 0;
        }
    }

    _proto.loop = function(){
        // window.playSound("spin_loop",true);
        // console.log("--- 循环 ----" + this.round);
        var numChildren = this.numChildren;
        for(var i = 0; i < numChildren; i++){
            var obj = this.getChildAt(i);
            this.fn(obj,i);
        }
        this.round++;
    }


    _proto.fn = function(obj,i){
        Laya.timer.once(10 * i,this,function(){
            obj.alpha = 1;
            obj.autoPlay = true;
            obj.play();
            Laya.Tween.to(obj,{alpha : 0},1000,Laya.Ease.linearNone,Laya.Handler.create(this,function(){
                obj.stop();
                obj.autoPlay = false;
                obj.alpha = 0;
                if(this.round > 0 && this.round <= 2){
                    if(i == this.numChildren - 1){
                        this.loop();
                    }
                }else{
                    console.log("stop");
                    this.round = 0;
                }
            },null,false));
        });
    }
})();