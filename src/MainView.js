(function (){
    var _this;//始终表示当前的对象
    var setting;//设置界面
    // var award;//抽奖界面
    var orderArray;//排序后的图标数组
    var results  = [];
    var gameResult = [];

    var icons = [
        {
            index : 8,
            image : "symbols/H1.png",
            animation : "fire",
            scale : 0.9
        },
        {
            index : 9,
            image : "symbols/H2.png",
            animation : "money",
            scale : 0.85
        },
        {
            index : 10,
            image : "symbols/H3.png",
            animation : "golden",
            scale : 0.95
        },
        {
            index : 2,
            image : "symbols/L1.png",
            animation : "span",
            scale : 1
        },
        {
            index : 3,
            image : "symbols/L2.png",
            animation : "span",
            scale : 1
        },
        {
            index : 4,
            image : "symbols/L3.png",
            animation : "span",
            scale : 1
        },
        {
            index : 5,
            image : "symbols/L4.png",
            animation : "span",
            scale : 1
        },
        {
            index : 6,
            image : "symbols/L5.png",
            animation : "span",
            scale : 1
        },
        {
            index : 7,
            image : "symbols/L6.png",
            animation : "span",
            scale : 1
        },
        {
            index : 0,
            image : "symbols/S.png",
            animation : "bead",
            scale : 0.8
        },
        {
            index : 1,
            image : "symbols/W.png",
            animation : "dragon",
             scale : 0.8
        }
    ];

    var colors = [];
    var originY = [];

    var panelBox;
    var boxHeight = 370;
    var machineCount = 5;
    var elementCount = 3;
    var iconW = 126;
    var iconH = boxHeight/3;
    var spacing = 12;
    var eleHeight = icons.length * iconH;
    var mark;
    var reverseMark;//反向转动基准线
    var count = 0;
    
    var speed = 20;


    var maskContainer;
    var mask;
    var w;
    var h;


    // socket 连接
    var Event  = Laya.Event;
    var Socket = Laya.Socket;
    var socket;
    var output;
    var betObj = {
        "cmd" : "videoSlot",
        "bet" : 0.1,
        "odds":1,
        "lines" : 20,
        "gameType":7,

        // map:[  //用于测试 传入map返回的开奖以map为结果 没传map结果由服务端生成
        //     [0,2,9],
        //     [0,8,1],
        //     [0,3,4],
        //     [5,6,3],
        //     [7,9,2]
	    // ]
    };

    //抽奖结果
    var prizeDraw = [];

    // 每局赢钱
    var winAmount = 0;
    // 是否是抽奖游戏
    var isFree = false;
    // 解析后的socket数据
    var data;
    // 停止滚动的标识
    var flag = 0;

    // 当前余额
    var totalAmount = 0;

    // 设置项
    var option = {
        music : false,//音乐
        volumn : false,//声音
        forward : false,//加快转动速度
        autoScrollCount : 0,//自动旋转次数
        amount : 2 // 投注总额
    };

    var lineY = boxHeight / 10;
    var lines = [
        {
            id : 1,
            lineName : "line/xian_1.png",
            x : -20,
            y : 4*lineY
        },
        {
            id : 2,
            lineName : "line/xian_2.png",
            x : -20,
            y : 1*lineY + 10
        },
        {
            id : 3,
            lineName : "line/xian_3.png",
            x : -20,
            y : 8*lineY
        },
        {
            id : 4,
            lineName : "line/xian_4.png",
            x : -25,
            y : 10
        },
        {
            id : 5,
            lineName : "line/xian_5.png",
            x : -30,
            y : 1*lineY + 15
        },
        {
            id : 6,
            lineName : "line/xian_6.png",
            x : -25,
            y : 1*lineY + 10
        },
        {
            id : 7,
            lineName : "line/xian_7.png",
            x : -25,
            y : 3*lineY
        },
        {
            id : 8,
            lineName : "line/xian_8.png",
            x : -25,
            y : 1*lineY
        },
        {
            id : 9,
            lineName : "line/xian_9.png",
            x :-25,
            y : 5*lineY
        },
        {
            id : 10,
            lineName : "line/xian_10.png",
            x : -25,
            y : 1*lineY + 10
        },
        {
            id : 11,
            lineName : "line/xian_11.png",
            x : 25,
            y : 1*lineY + 15
        },
        {
            id : 12,
            lineName : "line/xian_12.png",
            x : 10,
            y : 1*lineY + 15
        },
        {
            id : 13,
            lineName : "line/xian_13.png",
            x : 10,
            y : 1*lineY + 15
        },
        {
            id : 14,
            lineName : "line/xian_14.png",
            x : 0,
            y : 2*lineY - 10
        },
        {
            id : 15,
            lineName : "line/xian_15.png",
            x : 10,
            y : 0*lineY
        },
        {
            id : 16,
            lineName : "line/xian_16.png",
            x : 0,
            y : 1*lineY
        },
        {
            id : 17,
            lineName : "line/xian_17.png",
            x : 10,
            y : 1*lineY + 15
        },
        {
            id : 18,
            lineName : "line/xian_18.png",
            x : 0,
            y : 1*lineY + 10
        },

        {
            id : 19,
            lineName : "line/xian_19.png",
            x : 0,
            y : 2*lineY 
        },
        {
            id : 20,
            lineName : "line/xian_20.png",
            x : 10,
            y : 2*lineY
        }
    ];


    var timer = 0;// 定时器

    var freeGameData = [];//免费游戏数据
    var freeIndex = 0;

    // 控制播放粒子动画对象
    var fireControl = {
        isFire : false,
        index : 0
    };

    //上次获取到的金额
    var lastAmount = 0;
    //粒子播放位置控制
    var fireIndex = 0;
    // 转动模式
    var scrollMode = 0;

    function MainView(){
        MainView.__super.call(this);
        this.init();
    }
    Laya.class(MainView,"MainView",GameUI);
    MainView.cached = false;
    var _proto = MainView.prototype;
    _proto.init = function (){
        _this = this;
        totalAmount = window.playerAmount;
        if(!window.isApp){
            this.connect();
        }else{
            this.musicToast();
        }
        var money = window.formatCurrency(totalAmount);
        this.balance.text = "余额 " + totalAmount * 10;
        this.amount.text = "¥" + money;

        panelBox = new Laya.Panel();
        panelBox.size(machineCount * iconW + 4 * spacing,boxHeight);
        var x = (this.background.width - panelBox.width)/2;
        panelBox.pos(x,100);
        this.background.addChild(panelBox);

        this.layoutIcons();

        setting = new Setting();
        setting.alpha = 0;
        setting.pos(0,-700);
        this.addChild(setting);

        this.runBtn.on(Laya.Event.MOUSE_DOWN,this,function(){
            window.playSound("click");
            ///*
            if(totalAmount < option.amount || totalAmount <= 0){
                var p = new PromptView("余额不足");
                _this.addChild(p);
                p.buttonClick(function(){
                    console.log("余额不足");
                });
            }else{
                //*/
                if(option.autoScrollCount > 0){//在自动旋转情况下
                    // 当前是开始按钮
                    if(this.runBtn.skin == "commen/control_panel_mobile_06.png"){
                        this.runBtn.skin = "commen/control_panel_mobile_03.png";
                        this.sendBet();
                        this.toastLabel.text = "自动旋转::" + option.autoScrollCount;
                    }else{//停止按钮
                        option.autoScrollCount = 0;
                        this.runBtn.skin = "commen/onclick.png";
                        this.runBtn.alpha = 0;
                    }
                }else{// 不是自动旋转
                    this.sendBet();
                    this.buttonDisplay(false);
                    this.toastLabel.text = "祝你好运！";
                }
            }
        });
         this.settingBtn.on(Laya.Event.MOUSE_DOWN,this,function(){
            window.playSound("click");
            setting.alpha = 1;
            Laya.Tween.to(setting,{y : 0},500);
            // 所有设置项的回调
            setting.back(function(obj){
                console.log(obj);
                _this.displayLines(obj.lines);
                
                betObj.bet = obj.bet;
                betObj.odds = obj.odds;
                betObj.lines = obj.lines;

                option.amount = obj.amount;
                option.autoScrollCount = obj.autoScrollCount;
                option.forward = obj.forward;

                _this.totalBet.text = "赌注总额" + 10 * obj.amount.toFixed();
                _this.bet.text = "¥" + window.formatCurrency(obj.amount);
                if(obj.autoScrollCount > 0){
                    _this.runBtn.skin = "commen/control_panel_mobile_06.png";
                }
                
                if(obj.forward){
                    speed = 30;
                }else{
                    speed = 20;
                }
                _this.changeSpeed(speed);
                option.volumn = obj.music;
                option.music = obj.volumn;
                window.soundEnable = obj.volumn;
                setting.alpha = 0;
            });
         });
         this.closeBtn.on(Laya.Event.MOUSE_DOWN,this,function(){
            window.playSound("click");
            this.removeSelf();
            window.closeWindow();
         });

        this.initMask();
        this.setTimer();
    }

    _proto.setTimer = function(){
         Laya.timer.loop(1000,this,function(){
            timer++;
            // console.log(timer);
            if(timer == 180){
                var p = new PromptView("您已有3分钟未有下注，将于2分钟后退出游戏");
                this.addChild(p);
                p.buttonClick(function(){});
            }
            if(timer == 300){
                var p = new PromptView("您已经超过5分钟未有下注，已经自动退出游戏");
                this.addChild(p);
                p.buttonClick(function(){
                    _this.removeSelf();
                    window.closeWindow();
                });
                Laya.timer.clearAll(this);
            }
        });
    }

    _proto.displayLines = function(num){
        for(var j = 0; j < this.leftBox.numChildren; j++){
            var left = this.leftBox.getChildAt(j);
            var right = this.rightBox.getChildAt(j);
             left.alpha = 0.3;
             right.alpha = 0.3;
        }
        for(var i = 0; i < num; i++){
            var obj = lines[i];
            var l = new Laya.Image(obj.lineName);
            l.x = obj.x;
            l.y = obj.y;
            maskContainer.addChild(l);
            for(var j = 0; j < this.leftBox.numChildren; j++){
                var left = this.leftBox.getChildAt(j);
                var right = this.rightBox.getChildAt(j);
                if(left.name == obj.id){
                    left.alpha = 1;
                }
                if(right.name == obj.id){
                    right.alpha = 1;
                }
            }
        }
        Laya.timer.once(1000,this,function(){
            maskContainer.removeChildren(1,maskContainer.numChildren);
        });
    }

    _proto.initMask = function(){
         maskContainer = new Laya.Sprite();
        // maskContainer.alpha = 0.8;
        maskContainer.pos(panelBox.x,panelBox.y);
        maskContainer.size(panelBox.width,panelBox.height);
        // maskContainer.graphics.drawRect(0,0,panelBox.width,panelBox.height,"#000000");
        maskContainer.cacheAs = "bitmap";
        this.background.addChild(maskContainer);
       
        w = (maskContainer.width - (4 * 12))/5;
        h = maskContainer.height/3;

        mask = new Laya.Sprite();
        mask.alpha = 0.3;
        mask.size(maskContainer.width,maskContainer.height);
        maskContainer.addChild(mask);
    }

    _proto.layoutIcons = function(){
        for(var n = 0; n < machineCount; n++){ 
            var box = new Laya.View();
            box.speed = speed; 
            box.size(iconW,icons.length * iconH);
            box.pos(n * (iconW + spacing), - (icons.length - 3) * iconH);
            icons.sort(function(){ return 0.5 - Math.random() });
            for(var i = 0 ;i < icons.length; i++){
                var obj = icons[i];
                var image = new SlotIcon(iconW,iconH,obj.image,colors[i]);
                image.pos(0,i * iconH);
                originY.push(i * iconH);
                image.offset = 0;
                box.addChild(image);
                image.info = obj;
                image.showMarkIcon();
            }
            panelBox.addChild(box);
            mark = box.height;
        }
    }
   // 转动模式切换 0 - 正常模式  1 - 反转模式
   _proto.switchMode = function(mode){
       var iconCount = icons.length;
       originY = [];
       scrollMode = mode;
        if(mode == 0){//正常转动
            for(var n = 0; n < machineCount; n++){
                var box = panelBox.getChildAt(n);
                box.round = 1 + i;//转动圈数
                box.reverse = false;
                box.pos(n * (iconW + spacing),  - (icons.length - 3) * iconH);
                for(var i = 0; i < iconCount; i++){
                    var slotIcon = box.getChildAt(i);
                    originY.push(slotIcon.y);
                }
                mark = box.height;
            }
        }else{//反转
            for(var n = 0; n < machineCount; n++){
                var box = panelBox.getChildAt(n);
                box.round = 2;//转动圈数
                if(n == 1 || n == 3){
                    box.reverse = true;
                    box.pos(n * (iconW + spacing), 0);
                }else{
                    box.reverse = false;
                    box.pos(n * (iconW + spacing),  - (icons.length - 3) * iconH);
                }
                for(var i = 0; i < iconCount; i++){
                    var slotIcon = box.getChildAt(i);
                    originY.push(slotIcon.y);
                }
                mark = box.height;
                reverseMark = -iconH;
            }
        }
   }

//转动前准备好开奖图标的排序
    _proto.prepareResult = function(){
        orderArray = [];
        for(var i = 0; i < gameResult.length; i++){
            var arr = gameResult[i];
            icons.sort(function(){ return 0.5 - Math.random() });
            if(scrollMode == 1){//反转模式
                if(i == 1 || i == 3){
                    var empty = [];
                    for(var m = 0; m < arr.length; m++){
                        var index = arr[m];
                        var target = this.foundTargrt(index);
                        empty.push(target);
                    }
                    for(var n = 0; n < icons.length - arr.length;n++){
                        empty.push(icons[n]);
                    }
                    orderArray.push(empty);
                }else{
                    this.pushArray(arr);
                }
            }else{//正常模式
                this.pushArray(arr);
            }
        }
    }
    _proto.pushArray = function(arr){
        var copyArray = icons.slice(0);
        for(var j = 0; j < arr.length; j++){
            var index = arr[j];
            var current = this.foundTargrt(index);
            copyArray.push(current);
            copyArray.splice(0,1);
        }
        orderArray.push(copyArray);
    }
    _proto.foundTargrt = function(index){
        for(var i = 0; i < icons.length; i++){
            var obj = icons[i];
            if(obj.index == index){
                return obj;
            }
        }
    } 
    
// 开始滚动
    _proto.scroll = function(){
        count = 0;
        flag = 0;
        fireControl.isFire = false;
        fireControl.index = 0;
        var index = this.forwardStartIndex();
        console.log(index);
        if(index > 1){
            fireControl.isFire = true;
            fireControl.index = index;
        }
        for(var i = 0; i < panelBox.numChildren; i++){
            var box = panelBox.getChildAt(i);
            if(fireControl.isFire){
                if(i >= index){
                    box.round = 6 + i;
                }else{
                    box.round = i + 1;
                }
            }else{
                if(scrollMode == 1){
                    box.round = 2;
                }else{
                    box.round = 1 + i;
                }
            }
            box.offset = 0;
            var arry = orderArray[i];
            for(var j = 0; j < box.numChildren; j++){
                var img = box.getChildAt(j);
                img.clearChild();
                img.resizeIcon(arry[j].image);
                img.info = arry[j];//在重新排序后  需要对该属性赋值 否则开奖时获取不到相应的图标
                img.showMarkIcon();
                img.fuzzySkin();
            }
        }
        Laya.timer.frameLoop(1,this,this.start);
    }
// 转动
   _proto.start = function (){
        for(var j = 0 ; j < panelBox.numChildren; j++){
            var box = panelBox.getChildAt(j);
            if(box.round > 0){
                for(var i = 0; i < box.numChildren; i++){
                    var ele = box.getChildAt(i);
                    if(box.reverse){
                        ele.y -= box.speed;
                        if(ele.y <= reverseMark){
                            box.offset++;
                            ele.pos(ele.x,(icons.length - 1) * iconH);
                        }
                    }else{
                        ele.y += box.speed;
                        if(ele.y >= mark){
                            box.offset++;
                            ele.pos(ele.x,mark - icons.length * iconH);
                        }
                    }
                    if(box.offset == box.numChildren){
                        box.round--;
                        box.offset = 0;
                        if(box.round <= 0){
                            // console.log(count);
                            if(fireControl.isFire && scrollMode == 0){
                                if(count + 1 >= fireControl.index){
                                    fireIndex++;
                                    // console.log(fireIndex);
                                    maskContainer.removeChildren(1,maskContainer.numChildren);
                                    if(count < 4){
                                        var b = panelBox.getChildAt(count + 1);
                                        b.speed = 30;
                                        var ani = new Laya.Animation();
                                        ani.loadAnimation("Particle.ani");
                                        ani.pos(b.x - 20,-15);
                                        maskContainer.addChild(ani);
                                        ani.play();
                                        ani.scale(0.8,0.85);
                                    }
                                }
                            }
                            count++;
                            window.playSound("reel_stop-" + count);
                            if(count == 5){
                                this.changeSpeed(speed);
                                fireIndex = 0;
                                Laya.timer.clear(this,this.start);
                                if(!option.forward){
                                    speed = 20;
                                }
                            }
                            for(var n = 0; n < box.numChildren; n++){
                                var ele = box.getChildAt(n);
                                ele.clearlySkin();
                                Laya.Tween.to(ele,{y : originY[n] },1000,Laya.Ease.elasticOut,Laya.Handler.create(this,this.stop));
                            }
                        }
                    }
                }
            }      
        }
    }
// 滚动结束
   _proto.stop = function(){
        flag++;
        if(flag == machineCount * icons.length){
            if(results.length != 0){
                mask.graphics.drawRect(0,0,maskContainer.width,maskContainer.height,"#000000");
                for (var i = 0; i < results.length; i++){
                    var obj = results[i];
                    var lineObj = null;
                    for(var n = 0; n < lines.length; n++){
                        var a = lines[n];
                        if(a.id == obj.lineId){
                            lineObj = a;
                        }
                    }
                    this.heightLightItem(lineObj,obj,i,results.length);
                }
                this.displayWinAmount(totalAmount,0);
                this.showWinText(winAmount);
                this.showAmount();
                
            }else{
                this.roundFinish();
            }
        }
    }
    _proto.showAmount = function(){
        var img = new AcountImage(winAmount * 10);
        img.scale(0,0);
        maskContainer.addChild(img);
        img.pivot(img.width/2,img.height/2);
        img.centerX = 0;
        img.y = maskContainer.height - ((h - img.height)/2 + img.height/2);
        Laya.Tween.to(img,{
            scaleX : 1,
            scaleY : 1
        },500,Laya.Ease.elasticOut,Laya.Handler.create(this,function(){
            Laya.timer.once(2000,this,function(){
                img.removeSelf();
            });
        }));
        window.playSound("win_summary");
    }
    _proto.heightLightItem = function(info,resultObj,i,num){
         Laya.timer.once(i * 2000,this,function(){
            this.toastLabel.text = "投注线" + info.id + "奖励：" + resultObj.win;
            var line = new Laya.Image(info.lineName);
            line.x = info.x;
            line.y = info.y;
            maskContainer.addChild(line);
            window.playSound("line_win");
            for(var j = 0; j < resultObj.points.length; j++){
                var obj = resultObj.points[j];
                var index = gameResult[obj.column][obj.row];
                var box = panelBox.getChildAt(obj.column);
                for(var m = 0; m < box.numChildren; m++){
                    var item = box.getChildAt(m);
                    if(item.info.index == index){
                        item.playAnimation();
                    }
                }
                var img = new Laya.Sprite();
                img.blendMode = "destination-out";
                img.size(obj.width,obj.height);
                img.x = obj.x;
                img.y = obj.y;
                img.graphics.drawRect(0,0,obj.width,obj.height,"#000000");
                maskContainer.addChild(img);

                var b_name = "kuang/" + info.id + ".png";
                var sp = new Border(b_name);
                sp.x = obj.x - 2;
                sp.y = obj.y - 0;
                maskContainer.addChild(sp);

                // 该投注线上中奖金额
                if(j + 1 == resultObj.points.length){
                    var number = new AcountImage(resultObj.win * 10);
                    sp.addChild(number);
                    number.width = 0.4 * number.width;
                    number.height = 0.4 * number.height;
                    number.scale(0.4,0.4);
                    number.x = (sp.width - number.width) / 2;
                    number.y = (sp.height - number.height) / 2;
                }
            }
           
            Laya.timer.once(1900,this,function(){
                maskContainer.removeChildren(1,maskContainer.numChildren);
                if(i + 1 == num){
                    mask.graphics.clear();
                    this.roundFinish();
                }
            });
        });
    }

    //  局结束
    _proto.roundFinish = function(){
        if(isFree){
            if(freeIndex == 0){//抽奖界面
                this.drawLottery();
            }else if(freeIndex == freeGameData.length && freeIndex != 0){// alert("免费转动游戏结束");
                var freeWin = 0;
                for(var i = 0; i < freeGameData.length; i++){
                    var obj = freeGameData[i];
                    for(var j = 0; j < obj.result.length; j++){
                        var a = obj.result[j];
                        freeWin += a.win;
                    }
                }
                this.scale(0.6,0.6);
                this.centerX = 0;
                this.centerY = 0;
                this.noFree(freeWin);
                this.displayWinAmount(totalAmount,0);

                this.switchMode(0);
            }else{//继续免费转动
                var a = 0;
                var obj = freeGameData[freeIndex];
                for(var i = 0; i < obj.result.length; i++){
                    var b = obj.result[i];
                    a += b.win;
                }
                
                this.displayWinAmount(lastAmount,a);
                // console.log(obj);


                this.freeStart(freeIndex);
                var l = freeGameData.length - freeIndex - 1;
                this.toastLabel.text = "免费转动游戏剩余::" + l;
                this.buttonDisplay(false);
            }
        }else{
            if(winAmount <= 0){
                this.toastLabel.text = "没有赢";
            }else{
            }
            if(option.autoScrollCount > 0){//自动转动游戏
                option.autoScrollCount--;
                Laya.timer.once(2000,this,function(){
                    this.sendBet();
                    this.toastLabel.text = "自动旋转::" + option.autoScrollCount;
                });
                this.buttonDisplay(true);
            }else{//手动旋转
                this.runBtn.skin = "commen/onclick.png";
                Laya.timer.once(1000,this,function(){
                    this.toastLabel.text = "请按转动！";
                });
                this.buttonDisplay(true);
            }
        }
    }

    _proto.freeGameFinish = function(){
        freeIndex = 0;
        freeGameData = [];
        this.buttonDisplay(true);
        this.toastLabel.text = "请按转动！";
        if(option.autoScrollCount > 0){
            option.autoScrollCount--;
            Laya.timer.once(2000,this,function(){
                this.sendBet();
                this.toastLabel.text = "自动旋转::" + option.autoScrollCount;
            });
        }
    }
    _proto.musicToast = function(){
        // /*
        Laya.timer.once(2000,this,function(){
            var music = new MusicEnable();
            this.addChild(music);
            music.buttonClicked(function(value){
                window.soundEnable = value; 
                option.volumn = value;
                option.music = value;
                music.removeSelf();      
                window.backgroundMusicPlay(option.music);
                setting.setOption(option);   
            });
            Laya.timer.once(3000,this,function(){
                music.removeSelf();
            })
        });
            // */
    }

// ============================================= socket =========================================================//
    _proto.connect = function(){
		socket = new Socket();
		socket.connect(window.socketInfo.ip, window.socketInfo.port);
		output = socket.output;
		socket.on(Event.OPEN, this, function(){
            console.log("Connected");
            socket.send(JSON.stringify({
                "cmd":"TrialGame",
                "versions":"1.0"
            }));

            Laya.timer.loop(15000,this,function(){
                socket.send(JSON.stringify({"cmd" : "Heartbeat"}));
            });

            this.musicToast();
            
        });
		socket.on(Event.CLOSE, this, function(){
            socket.offAll();
            var p = new PromptView("链接已断开，是否重连？");
            this.addChild(p);
            p.buttonClick(function(){
                _this.removeSelf();
                window.closeWindow();
            });
        });
		socket.on(Event.MESSAGE, this, this.onMessageReveived);
		socket.on(Event.ERROR, this, function(e){
            var p = new PromptView("链接出错，请检查网络");
            this.addChild(p);
            p.buttonClick(function(){
                _this.removeSelf();
                window.closeWindow();
            });
        });
    }

    _proto.sendBet = function(){
        if(totalAmount < option.amount || totalAmount <= 0){
            var p = new PromptView("余额不足");
            this.addChild(p);
            p.buttonClick(function(){
                console.log("余额不足");
            });
        }else{
            if(window.isApp){
                window.webkit.messageHandlers.slot.postMessage(JSON.stringify(betObj));
            }else{
                socket.send(JSON.stringify(betObj));
            }
            totalAmount -= option.amount;
            var money = window.formatCurrency(totalAmount);
            this.balance.text = "余额 " + totalAmount * 10;
            this.amount.text = "¥" + money;
            this.toastLabel.text = ""
            this.win.text = "";
            this.status.text = "赢";

            console.log(betObj);
            timer = 0;
        }
    }


    _proto.onMessageReveived = function(message){
        data = JSON.parse(message);
        // console.log(data);
         if(data.status == 0){
            switch (data.cmd){
                case "Login":
                    console.log("登录成功");
                    socket.send(JSON.stringify({"cmd" : "UserInfo"}));
                break;
                case "TrialGame":
                    socket.send(JSON.stringify({"cmd" : "UserInfo"}));
                break;
                case "UserInfo":
                    // console.log(data);
                    totalAmount = data.amount;
                    var money = window.formatCurrency(totalAmount);
                    this.balance.text = "余额 " + totalAmount * 10;
                    this.amount.text = "¥" + money;
                break;
                case "videoSlot":
                    console.log(data);
                    lastAmount = totalAmount;
                    totalAmount = data.amount;
                    gameResult = data.map;
                    winAmount = data.win;
                    isFree = data.isFreeGame;
                    if(isFree){
                        prizeDraw = data.prizeDraw;
                        freeGameData = data.freeGame;
                    }
                    this.prepareResultData();
                    this.prepareResult();
                    this.scroll();
                break;
                default:
                break;
            }
        }else{//错误处理
            var p = new PromptView("错误码：" + data.status);
            this.addChild(p);
            p.buttonClick(function(){
                _this.buttonDisplay(true);
            });
        }
        if (!isApp) {
            socket.input.clear();
        }
    }

    _proto.forwardStartIndex = function(){
        var symbolCount = [];
        var isFirst = true;
        for(var i = 0; i < gameResult.length; i++){
            var a = gameResult[i];
            for(var j = 0; j < a.length; j++){
                var value = a[j];
                if(value == 0){
                    if(isFirst){
                        isFirst = false;
                        symbolCount.push(i);
                    }
                    for(var n = 0; n < symbolCount.length; n++){
                        var o = symbolCount[n];
                        if(i != o){
                            symbolCount.push(i);
                        }
                    }
                }
            }
        }
        console.log(symbolCount);
        if(symbolCount.length == 2){
            return symbolCount[1] + 1;
        }else{
            return 0;
        }
    }

    _proto.prepareResultData = function(){
        if(data.result.length != 0){
            results = data.result;
            console.log(results);
        }else{
            results = [];
        }
        for (var i = 0; i < results.length; i++){
            var points = results[i].points;
            for(var j = 0; j < points.length; j++){
                var obj = points[j];
                obj.width = w;
                obj.height = h;
                obj.spacing = 12;
                obj.x = obj.column * (obj.width + obj.spacing);
                obj.y = obj.row * obj.height;
            }
        }
    }
//  显示抽奖界面
    _proto.drawLottery = function(){
        var award = new AwardView(prizeDraw);
        this.addChild(award);
        // 抽奖结束后，缩放
        award.mouseDown(function(){
            _this.scale(0.6,0.6);
            _this.centerX = 0;
            _this.centerY = 0;
            _this.freeSpins();
        });
    }
// 控制按钮的显示
    _proto.buttonDisplay = function(show){
        if(show){
            this.settingBtn.mouseEnabled = true;
            this.closeBtn.mouseEnabled = true;
            this.runBtn.mouseEnabled = true;
            this.closeBtn.alpha = 1;
            this.settingBtn.alpha = 1;
            this.runBtn.alpha = 1;
        }else{
            this.closeBtn.alpha = 0;
            this.settingBtn.alpha = 0;
            this.runBtn.alpha = 0;
            this.settingBtn.mouseEnabled = false;
            this.closeBtn.mouseEnabled = false;
            this.runBtn.mouseEnabled = false;
        }
    }
//  初始化奖品显示界面
    _proto.freeSpins = function(){
        var total = 0;//玩家获奖金额
        var free = 0;//免费转动次数
        for(var i = 0; i < prizeDraw.length; i++){
            var obj = prizeDraw[i];
            if(obj.type == "money"){
                total += obj.value;
            }else{
                free += obj.value;
            }
        }
        // 没有抽到免费转动
        if(free == 0){
            this.noFree(total);
        }else{
            this.awardWithFreeSpins(free);
        }
        if(total >= 1000){
            window.playSound("big_win");
            for(var i = 0; i < 10; i++){
                this.bigPrize(i);
            }
        }
        this.displayWinAmount(lastAmount,total);
    }

    _proto.displayWinAmount = function(base,s){
        base += s;
        lastAmount = base;
        var money = window.formatCurrency(base);
        this.balance.text = "余额 " + base * 10;
        this.amount.text = "¥" + money;
        if(s > 0){
            this.showWinText(s);
        }else{
            this.win.text = "";
            this.status.text = "赢";
        }
    }
    _proto.showWinText = function(value){
        this.status.text = "赢 " + (value * 10).toFixed();
        var m = window.formatCurrency(value);
        this.win.text = "¥" + m;
    }
// 没有免费转动
    _proto.noFree = function(total){
        var youWin = new Laya.Image("commen/you_win.png");
        youWin.centerX = 0;
        youWin.y = 50;
        Laya.stage.addChild(youWin);

        var clip = new AcountImage(0);
        Laya.stage.addChild(clip);
        
        clip.startCounter(total * 10);
        clip.y = 500;

        var step = total / 5;
        var a = 0;

        for(var i = 0; i < 5; i++){
            a  += step;
            this.increaseWin(a,i);
            clip.centerX = 0;
            this.spangleYouWin(youWin,i,5,function(){
                console.log("奖励结束");
                if(isFree){
                    _this.freeGameFinish();
                }
                youWin.removeSelf();
                clip.removeSelf();
                _this.scale(1,1);
               
            });
        }
       this.showWinText(total);
    }
    
    _proto.spangleYouWin = function(e,i,count,handler){
        Laya.timer.once(1000 * i,this,function(){
            e.alpha = 1;
            Laya.timer.once(500,this,function(){
                e.alpha = 0;
                if(i + 1 == count){
                    e.alpha = 1;
                    handler();
                }
            });
        });
    }
    _proto.increaseWin = function(value, i){
        Laya.timer.once(300 * i,this,function(){
            this.showWinText(value);
        });
    }
// 有免费转动
    _proto.awardWithFreeSpins = function(free){
        var start = new WPButton("commen/start.png","开始");
        start.centerX = 0;
        start.y = 480;
        Laya.stage.addChild(start);
        start.on(Laya.Event.MOUSE_DOWN,this,function(){
            freeCount.removeSelf();
            img.removeSelf();
            start.removeSelf();
            this.scale(1,1);
            this.freeStart(0);
            this.buttonDisplay(false);
            window.playSound("click");
        });
        
        var freeCount = new AcountImage(free);
        freeCount.centerX = 0;
        freeCount.y = 0;
        freeCount.width = 0.8 * freeCount.width;
        freeCount.height = 0.8 * freeCount.height;
        freeCount.scale(0.8,0.8);
        Laya.stage.addChild(freeCount);

        var img = new Laya.Image("commen/award.png");
        img.centerX = 0;
        img.y = freeCount.height;
        Laya.stage.addChild(img);
    }
    _proto.freeStart = function(index){
        if(index == 0){
            this.switchMode(1);
        }
        timer = 0;
        Laya.timer.once(1000,this,function(){
            freeIndex++;
            var game = freeGameData[index];
            data = game;
            console.log(data);
            gameResult = data.map;
            var a = 0;
            if(data.result.length > 0){
                for(var i = 0; i < data.result.length; i++){
                    var obj = data.result[i];
                    a += obj.win;
                }
            }
            winAmount = a;
            this.prepareResultData();
            this.prepareResult();
            this.scroll();
            this.win.text = "";
            this.status.text = "赢";
        });
    }

//  中大奖烟花
    _proto.bigPrize = function(i){
         Laya.timer.once(2000 * i,this,function(){
            var ani = new Laya.Animation();
            ani.loadAnimation("Firework.ani")
            var position = {
                x : Math.random() * 10 * 100,
                y : Math.random() * 10 * 50
            };
            ani.x = position.x;
            ani.y = position.y;
            Laya.stage.addChild(ani);
            ani.play();
            // console.log(i);
            window.playSound("firework");
            ani.on(Laya.Event.COMPLETE,this,function(){
                ani.removeSelf();
                // console.log("remove" + i);
            });
        });
    }

    _proto.changeSpeed = function(s){
        for(var m = 0; m < panelBox.numChildren; m++){
            var b = panelBox.getChildAt(m);
            b.speed = s;
        }
    }
})();


