(function(){
    function AudioSetView(){
        AudioSetView.__super.call(this);
        this.init();
    }
    Laya.class(AudioSetView,"AudioSetView",VioceSettingUI);
    var _proto = AudioSetView.prototype;
    
    _proto.init = function(){
        this.voiceEnable = false;
        this.musicEnable = false;
        this.voiceBtn.on(Laya.Event.MOUSE_DOWN,this,this.voiceBtnPressed);
        this.musicBtn.on(Laya.Event.MOUSE_DOWN,this,this.musicBtnPressed);
    }
    _proto.voiceBtnPressed = function(){
        window.playSound("click");
        this.voiceEnable = !this.voiceEnable;
        this.setButtonSkin();
        window.soundEnable = this.voiceEnable;
        if(!this.voiceEnable){
            Laya.SoundManager.stopAllSound();
        }
    }
    _proto.musicBtnPressed = function(){
        window.playSound("click");
        this.musicEnable = !this.musicEnable;
        window.backgroundMusicPlay(this.musicEnable);
        this.setButtonSkin();
    }
    _proto.setButtonSkin = function(){
        if(!this.voiceEnable){
            this.voiceBtn.skin = "setting/switch_off.png";
        }else{
            this.voiceBtn.skin = "setting/switch_on.png";
        }


        if(!this.musicEnable){
            this.musicBtn.skin = "setting/switch_off.png";
        }else{
            this.musicBtn.skin = "setting/switch_on.png";
        }
    }
})();
