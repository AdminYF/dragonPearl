
//判断当前渲染模式是WebGL还是Canvas
if (Laya.Render.isWebGL) {
    Laya.init(800, 600, Laya.WebGL);
    Config.isAlpha = true; //设置画布是否透明，只对2D(WebGL)、3D有效。
    Laya.stage.bgColor = "none"; //背景透明
} else {
    Laya.init(800, 600);
    Laya.stage.bgColor = null; //背景透明
}
Laya.stage.scaleMode = "showall";
Laya.stage.screenMode = "horizontal";
Laya.stage.alignH = "center";
Laya.stage.alignV = "middle";

var bg = null;



var images = [


    // "RoundParticle.part",

    "res/atlas/commen.atlas",

    "res/atlas/symbols.atlas",
    "res/atlas/fuzzy.atlas",
    "res/atlas/side.atlas",
    "res/atlas/setting.atlas",
    "res/atlas/number.atlas",
    "res/atlas/border.atlas",

    "res/atlas/bead.atlas",
    "res/atlas/dragon.atlas",
    "res/atlas/fire.atlas",
    "res/atlas/golden.atlas",
    "res/atlas/money.atlas",
    "res/atlas/line.atlas",

    "res/atlas/firework.atlas",
    "res/atlas/kuang.atlas",
    "res/atlas/particle.atlas"

    ];
// webSocket 信息
this.socketInfo = {
    ip : "192.168.1.106",
    port : 22287
};

this.soundEnable = false;
this.index = 0;
this.loaded = false;

var player;
Laya.loader.load(images,laya.utils.Handler.create(this,onLoaded),Laya.Handler.create(this,loading,null,false),Laya.loader.JSON);

function loading(num){
    /*
    if(!this.load){
        this.load = new LoadingView();
        Laya.stage.addChild(load);
    }
    this.index++;
    counter(num,this.index);
    */
}
function counter(num,i){
    /*
    Laya.timer.once(100 * i,this,function(){
        this.load.value = num;
        this.load.progress.bar.width = num * this.load.progress.width;
        this.load.percent.text = (num * 100).toFixed() + "%";
        if(num == 1 && this.loaded){
            initViews();
            this.load.removeSelf();
        }
    });
    */
}

function initViews(){
    bg = new Laya.Image("commen/bg.png");
    bg.scale(800/bg.width,600/bg.height);
    bg.width = 800;
    bg.height = 600;
    Laya.stage.addChild(bg);

    main = new MainView();
    Laya.stage.addChild(main);
}

function onLoaded (setting){
    this.loaded = true;
    cacheFrameAnimation();
    
    player = document.createElement('audio');
    player.src = "mp3/dpmusic_main.mp3";
    player.loop = true;

    initViews();

    // var ani = new Laya.Animation();
    // ani.loadAnimation("Particle.ani");
    // Laya.stage.addChild(ani);
    // ani.play();


/*
    var clip = new AcountImage(0);
    Laya.stage.addChild(clip);
    this.soundEnable = true;
    clip.startCounter(1.005 * 10,10);
    clip.y = 200;
    clip.x = 200;
    */
/*
    var prizeDraw = [
    {
		value:800,//次数
		type:"money"//免费游戏
	},{
		value:200,//数量
		type:"money"//现金
	},{
		value:100,
		type:"money"
	}
    ];
    var award = new AwardView(prizeDraw);
    Laya.stage.addChild(award);
    // 抽奖结束后，缩放
    award.mouseDown(function(){
        console.log('抽奖结束');
    });
	*/
}


function formatCurrency(num) {  
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
        num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*100+0.50000000001);  
    cents = num%100;  
    num = Math.floor(num/100).toString();  
    if(cents<10)  
    cents = "0" + cents;  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
}  


Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
}

function playSound(url,isLoop){
    if(this.soundEnable){
        if(isLoop){
            Laya.SoundManager.playSound("mp3/" + url + ".mp3",0);
        }else{
            Laya.SoundManager.playSound("mp3/" + url + ".mp3");
        }
    }
}
function stopSound(url){
     Laya.SoundManager.stopSound("mp3/" + url + ".mp3");
}

function backgroundMusicPlay(enable){
    if(enable){
        if(isApp){
            window.webkit.messageHandlers.play.postMessage('play');
        }else{
            playBackgroundMusic();
        }
    }else{
        if(isApp){
            window.webkit.messageHandlers.pause.postMessage('pause');
        }else{
            stopBackgroundMusic();
        }
    }
}



/************************************ 与 native 交互部分 ****************************************************/
var main;
var isApp = false;
var playerAmount = 0;
var account = {
    "cmd": "Login",
    "loginName": "",
    "password": ""
};
function getAccountInfoFromNative(amount){
    isApp = true;
    playerAmount = amount;
}
function recieveMassage(message){
    main.onMessageReveived(message);
}
function playBackgroundMusic(){
    player.play();
}
function stopBackgroundMusic(){
    player.pause();
}

function closeWindow(){
    window.close();
    if(isApp){
        window.webkit.messageHandlers.close.postMessage('close');
    }
}
/****************************************************************************************/

function cacheFrameAnimation (){
    Laya.Animation.createFrames("res/atlas/bead.atlas","bead");
    Laya.Animation.createFrames("res/atlas/dragon.atlas","dragon");
    Laya.Animation.createFrames("res/atlas/fire.atlas","fire");
    Laya.Animation.createFrames("res/atlas/golden.atlas","golden");
    Laya.Animation.createFrames("res/atlas/money.atlas","money");
}

// function recieveMassage (message){
//     alert(message);
// }
// function setErrorCode (){
//     this.errorCode.set("-1","标识码错误");
//     this.errorCode.set("-2","会员不存在");
//     this.errorCode.set("-3","桌暂时无法使用");
//     this.errorCode.set("-4","");
//     this.errorCode.set("-5","账户或密码不正確");
//     this.errorCode.set("-6","服务器错误");
//     this.errorCode.set("-7","标识码错误");
//     this.errorCode.set("-8","标识码错误");
//     this.errorCode.set("-9","标识码错误");
// }

/*
NSString * const errorCode_1 = @"标识码错误";
NSString * const errorCode_2 = @"会员不存在";
NSString * const errorCode_3 = @"桌暂时无法使用";
NSString * const errorCode_4 = @"";
NSString * const errorCode_5 = @"账户或密码不正確";
NSString * const errorCode_6 = @"服务器错误";
NSString * const errorCode_7 = @"注册会员失败";
NSString * const errorCode_8 = @"注册用户名已被使用";
NSString * const errorCode_9 = @"";
NSString * const errorCode_10 = @"金额不能为零";
NSString * const errorCode_11 = @"金额操作失败";
NSString * const errorCode_12 = @"金额不足";
NSString * const errorCode_13 = @"参数不正确";
NSString * const errorCode_14 = @"日期区间错误";
NSString * const errorCode_15 = @"用户未登录";
NSString * const errorCode_16 = @"代理账户验证不通过";
NSString * const errorCode_17 = @"金额记录不存在";
NSString * const errorCode_18 = @"验证码不正确";
NSString * const errorCode_19 = @"已封盘";
NSString * const errorCode_20 = @"后台未开启此投注项";
NSString * const errorCode_21 = @"投注项异常";
NSString * const errorCode_22 = @"桌错误";
NSString * const errorCode_23 = @"局错误";
NSString * const errorCode_24 = @"未开盘";
NSString * const errorCode_25 = @"停止投注";
NSString * const errorCode_26 = @"禁止投注";
NSString * const errorCode_27 = @"限红值异常";
NSString * const errorCode_28 = @"低于最小投注金额";
NSString * const errorCode_29 = @"高于最大投注金额";
NSString * const errorCode_30 = @"系统维护";
NSString * const errorCode_31 = @"网络连接失败";
NSString * const errorCode_32 = @"业务逻辑限制";
NSString * const errorCode_33 = @"数据库操作失败";
NSString * const errorCode_34 = @"意外异常";
NSString * const errorCode_35 = @"无效的SessionKey";
NSString * const errorCode_36 = @"没有进桌权限";
NSString * const errorCode_37 = @"桌位置已有人";
NSString * const errorCode_38 = @"已下注不能退桌";
NSString * const errorCode_39 = @"旧密码验证错误";
NSString * const errorCode_40 = @"不在此桌不能下注";
NSString * const errorCode_41 = @"游戏已结算";
NSString * const errorCode_42 = @"账号被冻结";
NSString * const errorCode_43 = @"客户端版本不匹配";
*/