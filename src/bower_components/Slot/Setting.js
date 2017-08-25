(function(){
    var rate;
    var info;

    var box;

    var titles = [
        "音响设定",
        "转动设定",
        "下注设定",
        "赔率表",
        "讯息"
    ];

    var bar;
    var originX;
    function Setting(){
        Setting.__super.call(this);
        this.init();
    }
    Laya.class(Setting,'Setting',SettingUI);
    var _proto = Setting.prototype;
    _proto.init = function(){
         _this = this;
        this.initViews();

        originX = this.tab.x - 50;
        bar = new Laya.View();
        bar.size(this.tab.width/5,8);
        bar.pos(originX,105);
        bar.graphics.drawRect(0,0,100,8,"white");
        this.addChild(bar);

        this.tab.selectedIndex = titles.length - 1;
        this.onSelect(this.tab.selectedIndex);
        this.tab.selectHandler = new Laya.Handler(this,this.onSelect);
    }

    _proto.back = function(handler){
       
        this.backBtn.on(Laya.Event.MOUSE_DOWN,this,function(){
            window.playSound("click");
            // console.log("---------" + this.amountSet.amount);
            var set = {
                music : this.audioSet.musicEnable,//音乐
                volumn : this.audioSet.voiceEnable,//声音
                forward : this.scrollSet.forward,//加快转动速度
                autoScrollCount : this.scrollSet.auto,//自动旋转次数
                bet : this.amountSet.chipValue,//金币面值
                odds : this.amountSet.chips,//金币数量
                lines : this.amountSet.lineNumber,//投注线数量
                amount : this.amountSet.amount // 投注总额
            };

            var h = Laya.Handler.create(this,handler,[set],false);
            Laya.Tween.to(this,{y : -600},500,Laya.Ease.linearNone,h);
        });
    }

    _proto.onSelect = function(index){
        window.playSound("click");
        for(var i = 0 ; i < this.tab.numChildren;i++){
            var item = this.tab.getChildAt(i);
            if(i == index){
                item.scale(1.2,1.2);
                bar.x = originX + item.x; 
            }else{
                item.scale(1,1);
            }
        }
        
        this.title.text = titles[index];
        this.switchView(index);
    }
    _proto.switchView = function(index){
        // Laya.Tween.to(box,{x:-800*index},10);
        box.x = -800*index;

    }

    _proto.initViews = function(){
        box = new Laya.Box();
        box.pos(0,103);
        box.size(800, 500);
        this.addChild(box);

        this.audioSet = new AudioSetView();
        this.audioSet.pos(0,0);
        box.addChild(this.audioSet);
        
        this.scrollSet = new ScrollSetView();
        this.scrollSet.pos(800,0);
        box.addChild(this.scrollSet);

        this.amountSet = new BetSetView();
        this.amountSet.pos(2*800,0); 
        box.addChild(this.amountSet);

        rate = new RateListView();
        rate.pos(3*800,0);
        rate.size(800,1500);
        box.addChild(rate);

        var info = new GameInfo();
        info.pos(4 * 800,0);
        info.size(800,1500);
        box.addChild(info);
        
    }

    _proto.setOption = function(obj){
        this.audioSet.voiceEnable = obj.volumn;
        this.audioSet.musicEnable = obj.music;
        this.audioSet.setButtonSkin();
        console.log(obj);

    }
})();


