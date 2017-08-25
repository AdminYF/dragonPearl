(function(){
    function RateListView(){
        RateListView.__super.call(this);
        this.init();
    }
    Laya.class(RateListView,"RateListView",RateListUI);
    var _proto = RateListView.prototype;
    _proto.init = function(){
        this.panel.vScrollBar.visible = false;
    }
})();