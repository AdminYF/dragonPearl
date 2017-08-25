(function (){
    var _this;
    function ScrollSetView(){
        ScrollSetView.__super.call(this);
        this.init();
    }
    Laya.class(ScrollSetView,"ScrollSetView",SlotSettingUI);
    var _proto = ScrollSetView.prototype;
    
    _proto.init = function(){
        _this = this;
        this.sliderView = new SliderView(0,500);
        this.sliderView.pos(430,120);
        this.addChild(this.sliderView);
        this.forwardBtn.on(Laya.Event.MOUSE_DOWN,this,this.forwardBtnPressed);

        this.toast = new ToastView();
        this.toast.pos((this.width - this.toast.width)/2,400);
        this.addChild(this.toast);

        this.auto = 0;
        this.sliderView.onMouseDown(function(value){
            _this.auto = value;
            // console.log(_this.);
            _this.toast.show(value);
        });
        this.forward = false;
        

    }
    _proto.forwardBtnPressed = function(){
        window.playSound("click");
        this.forward = !this.forward;
        if(!this.forward){
            this.forwardBtn.skin = "setting/switch_off.png";
        }else{
            this.forwardBtn.skin = "setting/switch_on.png";
        }
    }

    _proto.callBack = function(handler){

    }
})();