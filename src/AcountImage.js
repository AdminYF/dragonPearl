(function(){
    function AcountImage(number){
        this.acount = number;
        AcountImage.__super.call(this);
        this.init();
        // this.scale(scale,scale);
    }
    Laya.class(AcountImage,"AcountImage",Laya.View);
    var _proto = AcountImage.prototype;
    _proto.init = function(){
        var string = this.acount.toString();
        for(var i = 0; i < string.length; i++){
            var char = string.charAt(i);
            var name = '';
            if(char == ","){
                name = "number/comma.png";
            }else if(char == '.'){
                name = "number/dot.png";
            }else{
                name = "number/" + char + ".png";
            }
            var image = new Laya.Image(name);
            image.x = i * image.width;
            image.y = 0; 
            this.addChild(image);
        }
    }
    // 调用此方法时，必须提供一个位的初始值
    _proto.startCounter = function(value){
        this.acount = value;
        window.playSound("big_win_rollup",true);
        this.removeChildren(0,this.numChildren);
        var step = value / 5;
        var a = 0;
        for(var i = 0; i < 5; i++){
            a += step;
            this.addValue(a,i,5);
        }
    }

    _proto.addValue = function(value,index, num){
        Laya.timer.once(300 * index,this,function(){
            var n = Math.floor(value * 10000) / 10000;
            var string = n.toString();
            var l = string.length;
            ///*
            while(this.numChildren != l){
                var icon = new Laya.Image();
                icon.skin = "number/0.png";
                icon.x = this.numChildren * icon.width;
                this.addChild(icon);
                if(this.numChildren == l){
                    break;
                }
                // console.log(" 图片数：" + this.numChildren);
            }
            //*/
            console.log(index);
            this.skinImage(string);

            var s = (Math.floor(this.acount * 10000) / 10000).toString();
            console.log(string   +  '  ' + s);
            if(index + 1 == num || string == s){
                 window.stopSound("big_win_rollup");
            }
        });
    }

    _proto.skinImage = function(s){
        for(var i = 0; i < this.numChildren; i++){
            var c = s.charAt(i);
            var name = '';
            if(c == ","){
                name = "number/comma.png";
            }else if(c == '.'){
                name = "number/dot.png";
            }else{
                name = "number/" + c + ".png";
            }
            var ele = this.getChildAt(i);
            ele.skin = name;
        }
    }
})();