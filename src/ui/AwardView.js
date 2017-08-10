(function(){

    var clickCount = 3;
    var awardType;
    var cb;
    function AwardView(lottery){
        clickCount = 3;
        awardType = lottery;
        AwardView.__super.call(this);
        this.init();
    }
    Laya.class(AwardView,"AwardView",BounsRoundUI);
    var _proto = AwardView.prototype;
    _proto.init = function(){
        window.playSound("tease");
        this.bouns.y = this.height / 2;
        this.bouns.alpha = 0;
        awardType.sort(function(){ return 0.5 - Math.random() });
        Laya.Tween.to(this.bouns,{alpha : 1,y : 20},1000,Laya.Ease.linearNone,Laya.Handler.create(this,function(){
            this.title.alpha = 1;
            for(var i = 0; i < this.itemBox.numChildren; i++){
                var item = this.itemBox.getChildAt(i);
                this.heightLight(item,i);
            }
        }));
        for(var i = 0; i < awardType.length; i++){
            var obj = awardType[i];
            if(obj.type == "freeGame"){
                obj.image = new Laya.Image("commen/dpbonus_04.png");
            }else{
                obj.image = new AcountImage(obj.value * 10);
                obj.image.scale(0.6,0.6);
            }
            obj.image.centerX = 0;
            obj.image.centerY = 0;
        }
    }

    _proto.mouseDown = function(handler){
        cb = Laya.Handler.create(this,handler,null,false);
        for(var i = 0; i < this.itemBox.numChildren; i++){
            var item = this.itemBox.getChildAt(i);
            item.on(Laya.Event.MOUSE_DOWN,this,this.itemClick,[item,cb]);
        }
    }
    _proto.heightLight = function(item,i){
        Laya.timer.once(i * 300,this,function(){
            Laya.Tween.to(item,{alpha : 1},1000 * (0 + 1));
            // 等待所有图标显示结束后 开始启动自动点击定时器
            if(i == this.itemBox.numChildren - 1){
                Laya.timer.once(3000,this,function(){
                    for(var n = 1; n <= clickCount; n++){
                        this.autoClick(n);
                    }
                });
            }
        });
    }

    _proto.autoClick = function(index){
        Laya.timer.once(20000 * index,this,function(){
            var current;
            for(var i = 0; i < this.itemBox.numChildren; i++){
                var item = this.itemBox.getChildAt(i);
                console.log('循环 :' + i);
                if(!item.pressed){
                    current = item;
                    break;
                }
            }
            if(current != null){
                this.itemClick(current,cb);
            }
        });
    }

    _proto.itemClick  = function(e,callBack){
        window.playSound("dpselected");
        this.controlItems(false);
        e.pressed = true;
        clickCount--;
        console.log(clickCount);
        if(clickCount >= 0){
            Laya.Tween.to(e,{y : e.y - 20},500,Laya.Ease.strongIn,Laya.Handler.create(this,function(){
                Laya.Tween.to(e,{y : e.y + 20},1000,Laya.Ease.elasticOut,Laya.Handler.create(this,function(){
                    e.skin = "commen/dpbonus_03.png";
                    e.addChild(awardType[clickCount].image);
                    this.controlItems(true);
                }));           
            }));
            this.leftImage.skin = "number/" + clickCount + ".png";
            this.leftLabel.text = "剩余::" + clickCount;

            if(clickCount == 0){
                this.title.text = "";
                Laya.timer.once(2000,this,function(){
                    for(var i = 0; i < this.itemBox.numChildren; i++){
                        var item = this.itemBox.getChildAt(i);
                        item.skin = "commen/dpbonus_03.png";
                    }
                });

                Laya.timer.once(4000,this,function(){
                    this.removeSelf();
                    Laya.timer.once(3000,this,function(){
                        Laya.timer.clearAll(this);
                        callBack && callBack.run();
                    });
                });
            }
        }
    }
    
    _proto.controlItems = function(enable){
        for(var i = 0; i < this.itemBox.numChildren; i++){
            var item = this.itemBox.getChildAt(i);
            if(enable && !item.pressed){
                item.mouseEnabled = true;
            }else{
                item.mouseEnabled = false;
            }
        }
    }
})();