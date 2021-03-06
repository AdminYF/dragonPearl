(function (){
    var W;
    var H;
    var imageName;
    var color
    var offsetY;
    var offsetX;
    // var icon;
    var scaleX;
    var scaleY;
    
    function SlotIcon(width,height,source,col){
        imageName = source;
        color = col;
        W = width;
        H = height;
        SlotIcon.__super.call(this);
        this.init();
    }
    Laya.class(SlotIcon,"SlotIcon",Laya.View);
    var _proto = SlotIcon.prototype;
    _proto.init = function(){
        this.added = false;
        this.size(W,H);
        this.resizeIcon(imageName);
    }

    _proto.clearChild = function(){
        this.removeChildAt(0);
    }
    _proto.resizeIcon = function(name){
        this.icon = new Laya.Image(name);
        var wh_scale = this.icon.width / this.icon.height;
        if(this.icon.width >= 120 && this.icon.width <= 130){
            offsetX =  W - 10;
        }else if(this.icon.width > 130){
            (window.gameType == 8) ? offsetX = 150 : offsetX = 126;
        }else if(this.icon.width >= 200){
            offsetX = 200;
        }else{
            offsetX = this.icon.width;
        }

        offsetY = offsetX/wh_scale;
        
        scaleX = offsetX/this.icon.width;
        scaleY = offsetY/this.icon.height;
        this.icon.scale(scaleX,scaleY);
        this.icon.size(offsetX,offsetY);
        this.originScaleX = scaleX;
        
        this.icon.centerX = 0;
        if(name == "style/F.png"){
            this.icon.y = 2;
            // this.graphics.drawRect(0,0,this.width,this.height,"red");
        }else{
            this.icon.centerY = 0;
        }
        this.addChild(this.icon);
    }

    _proto.scaleAnimate = function(){
        if(this.info.index == 0 || this.info.index == 1){
            Laya.Tween.to(this.icon,{
                scaleX : 1.2,
            },200,Laya.Ease.strongIn,Laya.Handler.create(this,function(){
                Laya.Tween.to(this.icon,{
                    scaleX : this.originScaleX,
                },300,Laya.Ease.bounceOut);
            }));
        }
    }

    _proto.showMarkIcon = function(){
        if(this.icon.numChildren > 0){
            this.icon.removeChildren(0,this.icon.numChildren);
        }
        switch (this.info.index) {
            case 0:
                this.addMarkIcon("commen/sq.png");
                break;
            case 1:
                this.addMarkIcon("commen/free_spins.png");
                break;
            default:
                break;
        }
    }

    _proto.addMarkIcon = function(name){
        var mark = new Laya.Image(name);
        mark.centerX = this.icon.centerX;
        mark.y = this.icon.height - mark.height;
        this.icon.addChild(mark);
    }


    _proto.fuzzySkin = function (){
        var skin = this.icon.skin;
        var index = 8;
        (window.gameType == 8) ? index = 6 : index = 8; 
        var name = skin.substring(index,skin.length);
        this.icon.skin = "fuzzy/" + name;
        this.markIconDisplay(0);
        
    }
    _proto.clearlySkin = function(){
        var skin = this.icon.skin;
        // var index = 8;
        var path = 'style/';
        // (window.gameType == 8) ? index = 6 : index = 8;
        (window.gameType == 8) ? path = 'style/' : path = 'symbols/';
        var name = skin.substring(6,skin.length);
        this.icon.skin = path + name;
        this.markIconDisplay(1);
    }

    _proto.markIconDisplay = function(a){
        if(this.icon.numChildren > 0){
            switch (this.info.index) {
            case 0:
                this.icon.getChildAt(0).alpha = a;
                break;
            case 1:
                this.icon.getChildAt(0).alpha = a;
                break;
            default:
                break;
            }
        }
    }

    _proto.playAnimation = function(){
        // /*
        if(this.info.animation == "span"){
            Laya.Tween.to(this.icon,{
                scaleX : 1.2,
                scaleY : 1.2,
            },500,Laya.Ease.strongInOut,Laya.Handler.create(this,function(){
                Laya.Tween.to(this.icon,{
                    scaleX : 1, 
                    scaleY : 1
                },500,Laya.Ease.strongInOut,Laya.Handler.create(this,function(){
                    for(var i = 0; i < 2; i++){
                        this.span(this.icon,i);
                    }
                }));
            }));
        }else{
            this.icon.alpha = 0;
            if(!this.added){
                this.added = true;
                var animation = new Laya.Animation();
                animation.interval = 100;
                animation.play(0,true,this.info.animation);
                
                animation.size(animation.width * this.info.scale,animation.height * this.info.scale);
                animation.scale(this.info.scale,this.info.scale);

                if(this.info.animation == "bead"){
                    animation.x = this.icon.x - 10;
                    animation.y = this.icon.y - 10;
                }else{
                    animation.x = this.icon.x;
                    animation.y = this.icon.y;
                }
                
                this.addChild(animation);

                // console.log(this.info);
                Laya.timer.once(2000,this,function(){
                    animation.stop();
                    animation.clear();
                    animation.removeSelf();
                    this.icon.alpha = 1;
                    this.added = false;
                });
            }
        }
        //*/
    }
    _proto.span = function(e,n){
        Laya.timer.once(1000 * n,this,function(){
            e.alpha = 0.5;
            Laya.timer.once(500,this,function(){
                e.alpha = 1;
            });
        });
    }
})();