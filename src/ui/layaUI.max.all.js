var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BetSettingUI=(function(_super){
		function BetSettingUI(){
			
		    this.summary=null;

			BetSettingUI.__super.call(this);
		}

		CLASS$(BetSettingUI,'ui.BetSettingUI',_super);
		var __proto__=BetSettingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetSettingUI.uiView);
		}
		BetSettingUI.uiView={"type":"View","props":{"width":800,"height":500},"child":[{"type":"Rect","props":{"width":800,"height":500,"fillColor":"#030303"}},{"type":"Rect","props":{"y":80,"x":51,"width":700,"lineWidth":1,"height":3,"fillColor":"#242424"}},{"type":"Rect","props":{"y":160,"x":53,"width":700,"lineWidth":1,"height":3,"fillColor":"#242424"}},{"type":"Label","props":{"y":112,"x":54,"text":"每条线的投币数量","fontSize":23,"color":"#ece1e1"}},{"type":"Label","props":{"y":29,"x":54,"text":"投币价值","fontSize":23,"color":"#ece1e1"}},{"type":"Rect","props":{"y":240,"x":53,"width":700,"lineWidth":1,"height":3,"fillColor":"#242424"}},{"type":"Label","props":{"y":192,"x":54,"text":"投注线","fontSize":23,"color":"#ece1e1"}},{"type":"Box","props":{"y":271,"x":137,"width":526,"height":35},"child":[{"type":"Circle","props":{"y":17,"x":17,"radius":17,"lineWidth":1,"fillColor":"#505050"}},{"type":"Rect","props":{"x":19,"width":491,"lineWidth":0,"height":34,"fillColor":"#505050"}},{"type":"Circle","props":{"y":17,"x":509,"radius":17,"lineWidth":1,"fillColor":"#505050"}}]},{"type":"Label","props":{"y":276,"x":153,"width":491,"var":"summary","text":"每线投注￥0.10 投注线20 赌注总额2.00","height":25,"fontSize":20,"color":"#f3ecec","align":"center"}}]};
		return BetSettingUI;
	})(View);
var BounsRoundUI=(function(_super){
		function BounsRoundUI(){
			
		    this.bouns=null;
		    this.title=null;
		    this.leftLabel=null;
		    this.leftImage=null;
		    this.itemBox=null;

			BounsRoundUI.__super.call(this);
		}

		CLASS$(BounsRoundUI,'ui.BounsRoundUI',_super);
		var __proto__=BounsRoundUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BounsRoundUI.uiView);
		}
		BounsRoundUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"commen/dpbbackground.png"},"child":[{"type":"Image","props":{"y":20,"x":156,"var":"bouns","skin":"commen/dpbtitle.png"}},{"type":"Label","props":{"y":106,"x":370,"var":"title","text":"选择","fontSize":30,"color":"#ffffff","alpha":0}},{"type":"Label","props":{"y":512,"x":353,"var":"leftLabel","text":"剩余::3","fontSize":30,"color":"#ffffff"}},{"type":"Image","props":{"y":406,"x":374,"var":"leftImage","skin":"number/3.png"}},{"type":"Box","props":{"y":171,"x":90,"var":"itemBox"},"child":[{"type":"Image","props":{"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"x":171,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"x":343,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"x":514,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"y":131,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"y":131,"x":171,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"y":131,"x":343,"skin":"commen/dpbonus_01.png","alpha":0}},{"type":"Image","props":{"y":131,"x":514,"skin":"commen/dpbonus_01.png","alpha":0}}]}]}]};
		return BounsRoundUI;
	})(View);
var ButtonUI=(function(_super){
		function ButtonUI(){
			
		    this.title=null;

			ButtonUI.__super.call(this);
		}

		CLASS$(ButtonUI,'ui.ButtonUI',_super);
		var __proto__=ButtonUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ButtonUI.uiView);
		}
		ButtonUI.uiView={"type":"View","props":{"width":150,"height":60},"child":[{"type":"Image","props":{"y":0,"x":0,"width":150,"skin":"commen/anniu.png","height":60},"child":[{"type":"Label","props":{"y":17,"x":15,"width":120,"var":"title","text":"确认","height":30,"fontSize":25,"align":"center"}}]}]};
		return ButtonUI;
	})(View);
var GameUI=(function(_super){
		function GameUI(){
			
		    this.background=null;
		    this.closeBtn=null;
		    this.settingBtn=null;
		    this.balance=null;
		    this.totalBet=null;
		    this.status=null;
		    this.amount=null;
		    this.bet=null;
		    this.win=null;
		    this.toastLabel=null;
		    this.leftBox=null;
		    this.rightBox=null;
		    this.runBtn=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"width":800,"var":"background","skin":"commen/background_run.png","height":600},"child":[{"type":"Image","props":{"y":2,"x":221,"skin":"commen/logo-lz.png"}},{"type":"Button","props":{"var":"closeBtn","top":23,"stateNum":1,"skin":"commen/btn_guangbi.png","left":16}},{"type":"Button","props":{"var":"settingBtn","top":23,"stateNum":1,"skin":"commen/btn_shezhi.png","right":16}},{"type":"Image","props":{"y":521,"x":0,"skin":"commen/sk.png"}},{"type":"Image","props":{"y":490,"x":182,"skin":"commen/kuai.png"}},{"type":"Label","props":{"y":531,"x":0,"width":250,"var":"balance","text":"余额 ","height":40,"fontSize":30,"font":"Arial","color":"#d6d1d1","align":"center"}},{"type":"Label","props":{"y":531,"x":275,"width":250,"var":"totalBet","text":"赌注总额 20","height":40,"fontSize":30,"color":"#e5dddd","align":"center"}},{"type":"Label","props":{"y":531,"x":582,"width":200,"var":"status","text":"赢","height":40,"fontSize":30,"color":"#ded3d2","align":"center"}},{"type":"Label","props":{"y":575,"x":37,"width":248,"var":"amount","height":25,"fontSize":20,"color":"#d7d0d0","align":"center"}},{"type":"Label","props":{"y":575,"x":402,"width":133,"var":"bet","text":"￥2.00","height":25,"fontSize":20,"color":"#e8e1e1","align":"center"}},{"type":"Label","props":{"y":575,"x":614,"width":147,"var":"win","height":25,"fontSize":20,"color":"#e8e1e1","align":"center"}},{"type":"Label","props":{"y":496,"x":182,"width":436,"var":"toastLabel","text":"请按转动！","height":20,"fontSize":18,"color":"#dcde23","align":"center"}},{"type":"Box","props":{"y":103,"x":11,"var":"leftBox"},"child":[{"type":"Image","props":{"y":327,"skin":"side/5.png","name":"5"}},{"type":"Image","props":{"y":292,"skin":"side/3.png","name":"3"}},{"type":"Image","props":{"y":254,"x":1,"skin":"side/9.png","name":"9"}},{"type":"Image","props":{"y":215,"skin":"side/10.png","name":"10"}},{"type":"Image","props":{"y":177,"skin":"side/6.png","name":"6"}},{"type":"Image","props":{"y":142,"skin":"side/1.png","name":"1"}},{"type":"Image","props":{"y":108,"skin":"side/7.png","name":"7"}},{"type":"Image","props":{"y":72,"x":1,"skin":"side/8.png","name":"8"}},{"type":"Image","props":{"y":34,"skin":"side/2.png","name":"2"}},{"type":"Image","props":{"skin":"side/4.png","name":"4"}}]},{"type":"Box","props":{"y":101,"x":764,"var":"rightBox"},"child":[{"type":"Image","props":{"skin":"side/15.png","name":"15"}},{"type":"Image","props":{"y":38,"skin":"side/16.png","name":"16"}},{"type":"Image","props":{"y":74,"skin":"side/13.png","name":"13"}},{"type":"Image","props":{"y":112,"skin":"side/19.png","name":"19"}},{"type":"Image","props":{"y":147,"skin":"side/20.png","name":"20"}},{"type":"Image","props":{"y":183,"skin":"side/18.png","name":"18"}},{"type":"Image","props":{"y":221,"skin":"side/17.png","name":"17"}},{"type":"Image","props":{"y":255,"skin":"side/14.png","name":"14"}},{"type":"Image","props":{"y":290,"skin":"side/12.png","name":"12"}},{"type":"Image","props":{"y":328,"skin":"side/11.png","name":"11"}}]}]},{"type":"Image","props":{"y":185,"x":662,"var":"runBtn","skin":"commen/onclick.png"}}]};
		return GameUI;
	})(View);
var GameInfoUI=(function(_super){
		function GameInfoUI(){
			
		    this.box=null;

			GameInfoUI.__super.call(this);
		}

		CLASS$(GameInfoUI,'ui.GameInfoUI',_super);
		var __proto__=GameInfoUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameInfoUI.uiView);
		}
		GameInfoUI.uiView={"type":"View","props":{"y":0,"width":800,"height":500},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":800,"var":"box","vScrollBarSkin":"commen/vscroll.png","height":500},"child":[{"type":"Text","props":{"y":10,"x":45,"text":"游戏规则","fontSize":25,"color":"#fdfdfd"}},{"type":"Text","props":{"y":42,"x":20,"wordWrap":true,"width":663,"text":"●  龙珠是一个5转轮,3行列20投注线的游戏,包含有免费游戏特别奖赏游戏.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":74,"x":20,"wordWrap":true,"width":501,"text":"●  投注额会根据玩游戏的线数,投币值和投币数目而定.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":105,"x":20,"wordWrap":true,"width":398,"text":"●  总赢额等于所赢取投币总数乘以投币值.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":137,"x":20,"wordWrap":true,"width":321,"text":"●  利用投币选择器去设定投币值.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":200,"x":20,"wordWrap":true,"width":750,"text":"●  自动游戏键自动以玩家设定的游戏数目自动进行游戏.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":231,"x":20,"wordWrap":true,"width":382,"text":"●  赢钱组合和派彩是根据赔率表来设定.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":263,"x":20,"wordWrap":true,"width":356,"text":"●  所有胜出结果已经与下注线相乘.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":294,"x":20,"wordWrap":true,"width":614,"text":"●  除了分散图案外,所有在投注线上的图案是要由左至右才算胜出.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":385,"x":20,"wordWrap":true,"width":750,"text":"●  同一时间内不同图案的胜出将会被计算在内.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":417,"x":20,"wordWrap":true,"width":750,"text":"●  只有最高奖励才会以赔付线支付.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":833,"x":20,"wordWrap":true,"width":114,"text":"● 游戏设定","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Box","props":{"y":896,"x":20,"width":720,"height":56},"child":[{"type":"Text","props":{"wordWrap":true,"width":115,"text":"●  转动设定","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":750,"text":"点击按钮开启转动设定选单,从而开启/关加快旋转速度,及可以设定","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":31,"x":25,"wordWrap":true,"width":619,"text":"自动旋转游戏的次数.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":958,"x":20,"width":399,"height":25},"child":[{"type":"Text","props":{"wordWrap":true,"width":115,"text":"●  下注设定","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"x":125,"wordWrap":true,"width":619,"text":"点击按钮开启下注设定选单","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":990,"x":20},"child":[{"type":"Text","props":{"wordWrap":true,"width":115,"text":"●  赔率表","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"x":106,"wordWrap":true,"width":619,"text":"点击按钮查看赔率表.                 ","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":1021,"x":20,"width":727,"height":25},"child":[{"type":"Text","props":{"wordWrap":true,"width":115,"text":"●  讯息设定","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"x":122,"wordWrap":true,"width":619,"text":"点击按钮开启下注设定选单.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":1053,"x":20,"width":725,"height":179},"child":[{"type":"Text","props":{"wordWrap":true,"width":115,"text":"●  附加资讯","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"y":33,"x":15,"wordWrap":true,"width":696,"text":"◦ 在游戏硬件/软件故障时,所有受影响的游戏投注和支出都作废,所有受影响的","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":94,"x":15,"wordWrap":true,"width":732,"text":"◦ 假如在免费游戏中途离开游戏,系统会继续自动生成游戏结果并储存在数据库中,","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":124,"x":15,"wordWrap":true,"width":619,"text":"所有赢取均会加到总赢取,所有游戏结果均能在游戏记录里读取.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":63,"x":15,"wordWrap":true,"width":619,"text":"赌注将会退还。","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":154,"x":15,"wordWrap":true,"width":619,"text":"V 1.0.1.0916","height":25,"fontSize":18,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":864,"x":20,"width":720,"height":25},"child":[{"type":"Text","props":{"wordWrap":true,"width":127,"text":"●  音响设定","height":25,"fontSize":22,"color":"#fbf6f6"}},{"type":"Text","props":{"x":124,"wordWrap":true,"width":619,"text":"点击按钮开启声音设定选单,从而开启/关闭声音和背景音乐.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":711,"x":20,"width":544,"height":115},"child":[{"type":"Text","props":{"wordWrap":true,"width":130,"text":"●  免费游戏","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":30,"x":20,"wordWrap":true,"width":519,"text":"◦ 在奖励特色游戏中有机会赢取最多16次免费游戏机会.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":60,"x":20,"wordWrap":true,"width":279,"text":"◦ 免费游戏启用奖励转轮.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":90,"x":20,"wordWrap":true,"width":372,"text":"◦ 所有免费游戏胜出的奖赏会乘以2倍.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":598,"x":20},"child":[{"type":"Text","props":{"wordWrap":true,"width":131,"text":"●  游戏奖励","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":27,"x":23,"wordWrap":true,"width":487,"text":"◦ 转轮上3,4 或5个分散的奖赏图案能启动奖励游戏.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":55,"x":23,"wordWrap":true,"width":650,"text":"◦ 假如在免费游戏中途离开游戏,系统会继续自动托管并完成该次奖励游戏","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":82,"x":23,"wordWrap":true,"width":619,"text":"所有赢取均会加到总赢取,所有游戏结果均能在游戏记录里读取.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":537,"x":20},"child":[{"type":"Text","props":{"wordWrap":true,"width":141,"text":"●  百搭图案","height":30,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":29,"x":25,"wordWrap":true,"width":475,"text":"◦ 除了奖赏图案之外,百搭图案能替代所有其它图案.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":449,"x":20},"child":[{"type":"Text","props":{"wordWrap":true,"width":701,"text":"●  赢取图案的总数是根据可赢取组合内中奖图案数目而定.总赢金额是赢取图案","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":29,"x":24,"wordWrap":true,"width":676,"text":"的总赢数目以对应赔率表上的数值.总括而言,总赢金额是计算不同种类赢取图","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":57,"x":24,"wordWrap":true,"width":619,"text":"的总计.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Box","props":{"y":326,"x":20},"child":[{"type":"Text","props":{"wordWrap":true,"width":700,"text":"●  当同一图案在同一转轮上出现赢取多于一次的最长组合时,额外的赢取结果才","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Text","props":{"y":28,"x":25,"wordWrap":true,"width":135,"text":"会计算在内.","height":25,"fontSize":20,"color":"#fbf6f6"}}]},{"type":"Text","props":{"y":168,"x":20,"wordWrap":true,"width":421,"text":"●  在投币视窗上显示玩家可压玩的投币数目.","height":25,"fontSize":20,"color":"#fbf6f6"}},{"type":"Rect","props":{"y":0,"x":0,"width":800,"lineWidth":1,"height":500,"fillColor":"#000000"}}]}]};
		return GameInfoUI;
	})(View);
var GifUI=(function(_super){
		function GifUI(){
			

			GifUI.__super.call(this);
		}

		CLASS$(GifUI,'ui.GifUI',_super);
		var __proto__=GifUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GifUI.uiView);
		}
		GifUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":175,"x":275,"skin":"commen/loading.png"}}]};
		return GifUI;
	})(View);
var LoadingUI=(function(_super){
		function LoadingUI(){
			
		    this.percent=null;
		    this.progress=null;

			LoadingUI.__super.call(this);
		}

		CLASS$(LoadingUI,'ui.LoadingUI',_super);
		var __proto__=LoadingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoadingUI.uiView);
		}
		LoadingUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":220,"x":200,"skin":"commen/dplogo.png"}},{"type":"Label","props":{"y":340,"x":381,"var":"percent","text":"0%","fontSize":18,"color":"#eee4e4"}},{"type":"ProgressBar","props":{"y":310,"x":250,"width":300,"var":"progress","skin":"commen/progress_time.png","height":20}}]};
		return LoadingUI;
	})(View);
var MusicPromptUI=(function(_super){
		function MusicPromptUI(){
			
		    this.yes=null;
		    this.no=null;

			MusicPromptUI.__super.call(this);
		}

		CLASS$(MusicPromptUI,'ui.MusicPromptUI',_super);
		var __proto__=MusicPromptUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ui.ButtonUI",ui.ButtonUI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MusicPromptUI.uiView);
		}
		MusicPromptUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"View","props":{"y":0,"x":0,"width":800,"height":600,"alpha":0.7},"child":[{"type":"Rect","props":{"width":800,"lineWidth":1,"height":600,"fillColor":"#1e1e1e"}}]},{"type":"Image","props":{"y":111,"x":67,"skin":"commen/mask.png"},"child":[{"type":"Label","props":{"y":30,"x":273,"text":"音响设定","fontSize":30,"color":"#fffbfb","align":"center"}},{"type":"TextArea","props":{"y":150,"x":210,"width":245,"text":"请问要开启声音吗","height":34,"fontSize":25,"color":"#fbfbfb","align":"center"}},{"type":"Box","props":{"y":250,"x":118},"child":[{"type":"Button","props":{"var":"yes","runtime":"ui.ButtonUI"}},{"type":"Button","props":{"x":280,"var":"no","runtime":"ui.ButtonUI"}}]}]}]};
		return MusicPromptUI;
	})(View);
var PromptUI=(function(_super){
		function PromptUI(){
			
		    this.bg=null;
		    this.bgImage=null;
		    this.label=null;
		    this.button=null;
		    this.btnTitle=null;

			PromptUI.__super.call(this);
		}

		CLASS$(PromptUI,'ui.PromptUI',_super);
		var __proto__=PromptUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PromptUI.uiView);
		}
		PromptUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"View","props":{"width":800,"var":"bg","height":600},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":800,"lineWidth":1,"height":600,"fillColor":"#1e1e1e"}}]},{"type":"Image","props":{"y":111,"x":67,"var":"bgImage","skin":"commen/mask.png"},"child":[{"type":"TextArea","props":{"y":130,"x":122,"width":421,"var":"label","text":"asdfqerferfaqwerqew3rfeqwfqqfqedfrqertqerfaqfqefdgrthrt","overflow":"visible","height":76,"fontSize":30,"color":"#f3ebea","align":"center"}},{"type":"Image","props":{"y":250,"x":232,"var":"button","skin":"commen/anniu.png","scaleX":0.8}},{"type":"Label","props":{"y":271,"x":303,"var":"btnTitle","text":"确认","fontSize":30}}]}]};
		return PromptUI;
	})(View);
var RateListUI=(function(_super){
		function RateListUI(){
			
		    this.panel=null;

			RateListUI.__super.call(this);
		}

		CLASS$(RateListUI,'ui.RateListUI',_super);
		var __proto__=RateListUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RateListUI.uiView);
		}
		RateListUI.uiView={"type":"View","props":{"y":0,"x":0,"width":800,"text":"除了分散图案之外，","height":500},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":800,"lineWidth":0,"height":500,"fillColor":"#000000"}},{"type":"Panel","props":{"y":0,"x":0,"width":800,"var":"panel","vScrollBarSkin":"commen/vscroll.png","height":500},"child":[{"type":"Image","props":{"y":10,"x":50,"skin":"symbols/S.png"}},{"type":"Image","props":{"y":180,"x":50,"width":120,"skin":"symbols/W.png","height":130}},{"type":"Box","props":{"y":204,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3:50","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4:1000","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5:5000","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":349,"x":50,"skin":"symbols/L1.png"}},{"type":"Box","props":{"y":375,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3：5","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：20","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：100","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":519,"x":50,"skin":"symbols/L3.png"}},{"type":"Box","props":{"y":544,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3：20","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：25","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：150","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":689,"x":50,"skin":"symbols/L5.png"}},{"type":"Box","props":{"y":712,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3：20","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：50","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：200","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":858,"x":50,"skin":"symbols/H1.png"}},{"type":"Box","props":{"y":881,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3：25","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：100","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：300","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":1028,"x":50,"skin":"symbols/H3.png"}},{"type":"Box","props":{"y":1050,"x":196},"child":[{"type":"Label","props":{"width":70,"text":"X3：30","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：200","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：1000","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":347,"x":440,"skin":"symbols/L2.png"}},{"type":"Box","props":{"y":369,"x":588},"child":[{"type":"Label","props":{"width":70,"text":"X3：5","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：20","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：100","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":516,"x":440,"skin":"symbols/L4.png"}},{"type":"Box","props":{"y":538,"x":588},"child":[{"type":"Label","props":{"width":70,"text":"X3：5","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：25","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：150","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":684,"x":440,"skin":"symbols/L6.png"}},{"type":"Box","props":{"y":706,"x":588},"child":[{"type":"Label","props":{"width":70,"text":"X3：20","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：50","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：200","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":852,"x":440,"skin":"symbols/H2.png"}},{"type":"Box","props":{"y":874,"x":588},"child":[{"type":"Label","props":{"width":70,"text":"X3：25","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":34,"width":70,"text":"X4：100","height":25,"fontSize":20,"color":"#fbf9f9"}},{"type":"Label","props":{"y":67,"width":70,"text":"X5：500","height":25,"fontSize":20,"color":"#fbf9f9"}}]},{"type":"Image","props":{"y":1199,"x":130,"skin":"setting/paylines.png"}},{"type":"Image","props":{"y":158,"x":50,"width":700,"skin":"setting/seting_line.png"}},{"type":"Image","props":{"y":327,"x":50,"width":700,"skin":"setting/seting_line.png","height":1}},{"type":"Image","props":{"y":495,"x":50,"width":700,"skin":"setting/seting_line.png","pivotY":8.695652173913004,"pivotX":6.521739130434753,"height":2}},{"type":"Image","props":{"y":664,"x":50,"width":700,"skin":"setting/seting_line.png"}},{"type":"Image","props":{"y":1172,"x":50,"width":350,"skin":"setting/seting_line.png","height":2}},{"type":"Image","props":{"y":834,"x":50,"width":700,"skin":"setting/seting_line.png"}},{"type":"Image","props":{"y":1003,"x":50,"width":700,"skin":"setting/seting_line.png"}},{"type":"Text","props":{"y":201,"x":440,"wordWrap":true,"width":250,"visible":true,"text":"除了分散图案之外，百搭图案能取代所有图案","height":94,"fontSize":20,"color":"#f8f4f4","align":"left"}},{"type":"Label","props":{"y":28,"x":196,"width":404,"text":"在转轴上的3、4、5个奖赏图启动奖赏游戏","height":90,"fontSize":20,"color":"#f9f6f6"}}]}]};
		return RateListUI;
	})(View);
var RoundParticleUI=(function(_super){
		function RoundParticleUI(){
			

			RoundParticleUI.__super.call(this);
		}

		CLASS$(RoundParticleUI,'ui.RoundParticleUI',_super);
		var __proto__=RoundParticleUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Particle2D",laya.particle.Particle2D);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RoundParticleUI.uiView);
		}
		RoundParticleUI.uiView={"type":"View","props":{"y":0,"x":0,"width":150,"height":370},"child":[{"type":"Particle2D","props":{"y":2,"x":0,"width":20,"visible":true,"url":"RoundParticle.part","name":"1","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":2,"x":26,"width":20,"visible":true,"url":"RoundParticle.part","name":"2","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":2,"x":52,"width":20,"visible":true,"url":"RoundParticle.part","name":"3","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":2,"x":79,"width":20,"visible":true,"url":"RoundParticle.part","name":"4","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":2,"x":105,"width":20,"visible":true,"url":"RoundParticle.part","name":"5","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":2,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"7","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":31,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"8","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":60,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"9","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":89,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"10","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":118,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"11","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":147,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"12","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":176,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"13","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":205,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"14","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":234,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"15","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":263,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"16","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":292,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"17","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":321,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"18","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":131,"width":20,"visible":true,"url":"RoundParticle.part","name":"20","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":101,"width":20,"visible":true,"url":"RoundParticle.part","name":"21","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":76,"width":20,"visible":true,"url":"RoundParticle.part","name":"22","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":52,"width":20,"visible":true,"url":"RoundParticle.part","name":"23","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":27,"width":20,"visible":true,"url":"RoundParticle.part","name":"24","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":350,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"25","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":329,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"27","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":308,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"28","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":286,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"29","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":265,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"30","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":243,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":222,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":201,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":179,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":158,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":136,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":115,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":93,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":72,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":50,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}},{"type":"Particle2D","props":{"y":29,"x":2,"width":20,"visible":true,"url":"RoundParticle.part","name":"31","height":20,"autoPlay":true,"alpha":1}}]};
		return RoundParticleUI;
	})(View);
var SettingUI=(function(_super){
		function SettingUI(){
			
		    this.title=null;
		    this.backBtn=null;
		    this.tab=null;

			SettingUI.__super.call(this);
		}

		CLASS$(SettingUI,'ui.SettingUI',_super);
		var __proto__=SettingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SettingUI.uiView);
		}
		SettingUI.uiView={"type":"View","props":{"width":800,"height":500},"child":[{"type":"Label","props":{"y":10,"x":325,"width":150,"var":"title","text":"声音设定","height":25,"fontSize":25,"color":"#ece3e2","align":"center"}},{"type":"Rect","props":{"y":100,"x":0,"width":800,"lineWidth":0,"height":3,"fillColor":"#242424"}},{"type":"Rect","props":{"y":0,"x":0,"width":800,"lineWidth":1,"height":100,"fillColor":"#191919"}},{"type":"Image","props":{"y":46,"x":149,"var":"backBtn","skin":"setting/back.png","scaleY":0.45,"scaleX":0.45}},{"type":"Tab","props":{"y":69,"x":261,"var":"tab","space":15,"selectedIndex":0,"direction":"horizontal"},"child":[{"type":"Button","props":{"y":30,"x":33,"width":70,"stateNum":1,"skin":"setting/audio_settings.png","pivotY":25,"pivotX":35,"name":"item0","height":50}},{"type":"Button","props":{"y":24,"x":118,"width":75,"stateNum":1,"skin":"setting/spin_settings.png","pivotY":27.5,"pivotX":37.5,"name":"item1","height":55}},{"type":"Button","props":{"y":24,"x":208,"width":75,"stateNum":1,"skin":"setting/bet_settings.png","pivotY":27.5,"pivotX":37.5,"name":"item2","height":55}},{"type":"Button","props":{"y":26,"x":298,"width":70,"stateNum":1,"skin":"setting/pays.png","pivotY":25,"pivotX":35,"name":"item3","height":50}},{"type":"Button","props":{"y":26,"x":383,"width":70,"stateNum":1,"skin":"setting/info.png","pivotY":25,"pivotX":35,"name":"item4","height":50}}]}]};
		return SettingUI;
	})(View);
var SliderUI=(function(_super){
		function SliderUI(){
			
		    this.lineBox=null;
		    this.fillView=null;
		    this.slider=null;

			SliderUI.__super.call(this);
		}

		CLASS$(SliderUI,'ui.SliderUI',_super);
		var __proto__=SliderUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SliderUI.uiView);
		}
		SliderUI.uiView={"type":"View","props":{"width":300,"height":14},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"lineBox","height":14},"child":[{"type":"Rect","props":{"x":0,"width":300,"name":"content","lineWidth":1,"height":14,"fillColor":"#ffffff"}},{"type":"Circle","props":{"y":7,"x":0,"radius":7,"name":"left","lineWidth":0,"fillColor":"#7aa016"}},{"type":"Circle","props":{"y":7,"x":300,"radius":7,"name":"right","lineWidth":0,"fillColor":"#ffffff"}}]},{"type":"View","props":{"y":0,"x":0,"width":300,"var":"fillView","height":14}},{"type":"Image","props":{"y":-13,"x":80,"width":40,"var":"slider","skin":"setting/sl_circle.png","height":40}}]};
		return SliderUI;
	})(View);
var SlotSettingUI=(function(_super){
		function SlotSettingUI(){
			
		    this.forwardBtn=null;

			SlotSettingUI.__super.call(this);
		}

		CLASS$(SlotSettingUI,'ui.SlotSettingUI',_super);
		var __proto__=SlotSettingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SlotSettingUI.uiView);
		}
		SlotSettingUI.uiView={"type":"View","props":{"width":800,"height":500},"child":[{"type":"Rect","props":{"width":800,"lineWidth":0,"height":500,"fillColor":"#060606"}},{"type":"Rect","props":{"y":80,"x":50,"width":700,"lineWidth":1,"height":3,"fillColor":"#242424"}},{"type":"Rect","props":{"y":160,"x":50,"width":700,"lineWidth":1,"height":3,"fillColor":"#242424"}},{"type":"Label","props":{"y":114,"x":53,"text":"自动旋转","fontSize":23,"color":"#ece1e1"}},{"type":"Label","props":{"y":38,"x":53,"text":"加快旋转速度","fontSize":23,"color":"#ece1e1"}},{"type":"Button","props":{"y":26,"x":612,"width":120,"var":"forwardBtn","stateNum":1,"skin":"setting/switch_off.png","scaleY":1.1,"scaleX":1.1,"height":41}}]};
		return SlotSettingUI;
	})(View);
var ToastUI=(function(_super){
		function ToastUI(){
			
		    this.title=null;

			ToastUI.__super.call(this);
		}

		CLASS$(ToastUI,'ui.ToastUI',_super);
		var __proto__=ToastUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ToastUI.uiView);
		}
		ToastUI.uiView={"type":"View","props":{"width":100,"height":60},"child":[{"type":"Rect","props":{"width":120,"lineWidth":0,"height":60,"fillColor":"#fdfdfd"}},{"type":"Label","props":{"y":12,"x":0,"width":120,"var":"title","text":"label","height":35,"fontSize":30,"color":"#030303","align":"center"}},{"type":"Pie","props":{"y":30,"x":0,"startAngle":90,"radius":30,"lineWidth":0,"fillColor":"#fdfdfd","endAngle":270}},{"type":"Pie","props":{"y":30,"x":120,"startAngle":270,"radius":30,"lineWidth":0,"fillColor":"#fdfdfd","endAngle":90}}]};
		return ToastUI;
	})(View);
var VioceSettingUI=(function(_super){
		function VioceSettingUI(){
			
		    this.voiceBtn=null;
		    this.musicBtn=null;

			VioceSettingUI.__super.call(this);
		}

		CLASS$(VioceSettingUI,'ui.VioceSettingUI',_super);
		var __proto__=VioceSettingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(VioceSettingUI.uiView);
		}
		VioceSettingUI.uiView={"type":"View","props":{"width":800,"height":500},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":800,"lineWidth":1,"height":500,"fillColor":"#030303"}},{"type":"Label","props":{"y":115,"x":55,"text":"音乐","fontSize":23,"color":"#ece1e1"}},{"type":"Label","props":{"y":39,"x":54,"text":"声音","fontSize":23,"font":"Arial","color":"#ece1e1"}},{"type":"Button","props":{"y":27,"x":620,"width":120,"var":"voiceBtn","stateNum":1,"skin":"setting/switch_off.png","scaleY":1.1,"scaleX":1.1,"height":41}},{"type":"Button","props":{"y":105,"x":620,"width":120,"var":"musicBtn","stateNum":1,"skin":"setting/switch_off.png","scaleY":1.1,"scaleX":1.1,"height":41}},{"type":"Rect","props":{"y":160,"x":50,"width":700,"lineWidth":0,"height":3,"fillColor":"#242424"}},{"type":"Rect","props":{"y":80,"x":50,"width":700,"lineWidth":0,"height":3,"fillColor":"#242424"}}]};
		return VioceSettingUI;
	})(View);