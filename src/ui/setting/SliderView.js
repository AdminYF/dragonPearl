(function (){
    var defaultValue;
    function SliderView(def,max){
        defaultValue = def;
        this.maxValue = max;
        SliderView.__super.call(this);
        this.init();
    }
    Laya.class(SliderView,"SliderView",SliderUI);
    var _proto = SliderView.prototype;
    _proto.init = function (){
        this.value = defaultValue;
        var l = (defaultValue/this.maxValue) * this.width;
        this.fillView.graphics.drawRect(0,0,l,this.height,"#7aa016"); 
        this.slider.x = l - 5;


        //  this.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
         
    }

    _proto.onMouseDown = function(handler){
        
        // this.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        // this.on(Laya.Event.MOUSE_UP,this,this.onMouseUp);
        // this.on(Laya.Event.MOUSE_OUT,this,this.onMouseUp);
        // return this.value;
        // callBack = Laya.Handler.create(this,this.onMouseDown);


        var cafn = Laya.Handler.create(this, handler,null,false); //第四个参数必须是false
        this.on(Laya.Event.MOUSE_DOWN,this,this.callBack,[cafn]);

        //  cafn && cafn.runWith(20);
    }

    _proto.callBack = function(cb){
        window.playSound("click");
        this.slider.x = this.mouseX;
        this.value =  Math.ceil((this.mouseX/this.width) * this.maxValue);;
        this.fillView.graphics.clear();
        this.fillView.graphics.drawRect(0,0,this.slider.x + 5,this.height,"#7aa016");
        
        cb && cb.runWith(this.value);
    }




    
    // _proto.onMouseMove = function(){
        
    // }
    // _proto.onMouseUp = function(){
        
    //     this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
	// 	this.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
	// 	this.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
        
    // }
})();