(function(){
    var slider1;
    var slider2;
    var slider3;
    var sliderX = 430;
    var toast;

    var _this;
    function BetSetView(){
        BetSetView.__super.call(this);
        this.init();
    }
    Laya.class(BetSetView,"BetSetView",BetSettingUI);
    var _proto = BetSetView.prototype;
     
    _proto.init = function(){
        _this = this;

        slider1 = new SliderView(0.1,10);
        this.chipValue  = slider1.value;
        slider1.pos(sliderX,40);

        slider2 = new SliderView(1,5);
        this.chips = slider2.value;
        slider2.pos(sliderX, 120);

        slider3 = new SliderView(20,20);
        this.lineNumber = slider3.value;
        slider3.pos(sliderX,200);

        this.addChild(slider1);
        this.addChild(slider2);
        this.addChild(slider3);

        toast = new ToastView();
        toast.pos((this.width - toast.width)/2,400);
        this.addChild(toast);
       
        slider1.onMouseDown(function(value){
            _this.chipValue = value;
            toast.show(value);
            _this.showPrompt();
            
        });
        slider2.onMouseDown(function(value){
            _this.chips = value;
            toast.show(value);
            _this.showPrompt();
            
        });
        slider3.onMouseDown(function(value){
            _this.lineNumber = value;
            toast.show(value);
            _this.showPrompt();
            
        });
        
        this.amount = this.chipValue * this.chips * this.lineNumber;
        var str = "每线投注 ¥" + window.formatCurrency(this.chipValue * this.chips) + "" + "投注线" + this.lineNumber  + "" + "赌注总额 ¥" + window.formatCurrency(this.amount);
        this.summary.text = str;
    }
    _proto.showPrompt = function(){
        this.amount = this.chipValue * this.chips * this.lineNumber;
        var str = "每线投注 ¥" + window.formatCurrency(this.chipValue * this.chips) + "" + "投注线" + this.lineNumber  + "" + "赌注总额 ¥" + window.formatCurrency(this.amount);
        this.summary.text = str;
    }
})();