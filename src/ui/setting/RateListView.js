(function(){
    var W = 350;
    var H = 170;
    // var icons = [
    //     "symbols/H1.png",
    //     "symbols/H2.png",
    //     "symbols/H3.png",
    //     "symbols/L1.png",
    //     "symbols/L2.png",
    //     "symbols/L3.png",
    //     "symbols/L4.png",
    //     "symbols/L5.png",
    //     "symbols/L6.png",
    //     "symbols/S.png",
    //     "symbols/W.png"
    // ];

    // var data = [
    //     {img : "symbols/H1.png",text :"在转轴上的3、4、5奖赏图案启动奖励游戏在转轴上奖赏图案启动奖励游戏"},
    //     {img : "symbols/H2.png",text :""},
    //     {img : "symbols/H3.png",text :"在转轴上的3、4、5个奖赏图案启动奖励游戏"},
    //     {img : "symbols/L1.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     {img : "symbols/L2.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     {img : "symbols/L3.png",text :"在转轴上的3、4、5个奖赏图案启动奖励游戏"},
    //     {img : "symbols/L4.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     {img : "symbols/L5.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     {img : "symbols/L6.png",text :"在转轴上的3、4、5个奖赏图案启动奖励游戏"},
    //     {img : "symbols/S.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     {img : "symbols/W.png",text :"X3:50\nX4:1000\nX5:5000"}
    //     // {img : "symbols/W.png",text :"X3:50\nX4:1000\nX5:5000"},
    //     // {img : "paylines.png",text :""}
        
    // ];

    // var list;
    // function Item(){
    //     Item.__super.call(this);
    //     this.size(W,H);
    //     this.image = new Laya.Image();
    //     this.image.pos(0,20);
    //     // this.image.size(126,97);
    //     this.addChild(this.image);
    //     this.setImage = function(skin){
    //         this.image.skin = skin;
    //     }

    //     this.rateText = new Laya.Text();
    //     this.rateText.fontSize = 20;
    //     this.rateText.color = "white";
    //     this.rateText.pos(150,40);
    //     this.rateText.size(300,150);
    //     this.addChild(this.rateText);
    //     this.setText = function(text){
    //         this.rateText.text = text;
    //     }
    // }
    // Laya.class(Item,"Item",Laya.Box);

    function RateListView(){
        RateListView.__super.call(this);
        this.init();
    }
    Laya.class(RateListView,"RateListView",RateListUI);
    var _proto = RateListView.prototype;
    _proto.init = function(){

        this.panel.vScrollBar.visible = false;

        // this.box.vScrollBarSkin = " ";
        // list = new Laya.List();
        // list.pos(50,0);
        
        // list.itemRender = Item;
        // list.repeatX = 2;
        // list.repeatY = 3;
        // list.vScrollBarSkin = "";
        // list.renderHandler = new Laya.Handler(this,this.upDateItems);
        // this.graphics.drawRect(0,0,800,500,"black",null,0);
        // this.addChild(list);

        // list.array = data;

    }
    // _proto.upDateItems = function(cell,index){
    //     cell.setImage(cell.dataSource.img);
    //     cell.setText(cell.dataSource.text);
    //     if(index == 1){
    //         cell.image.visible = false;
    //     }
    // }
})();