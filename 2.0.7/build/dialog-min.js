/*!build time : 2014-09-22 2:49:28 PM*/
KISSY.add("kg/departurelayer/dialog",function(a,b,c){function d(a,b){return this._handle=a,this._during=b||4e3,this}function e(){}var f="javascript:void(0)",g="kb-slider-cur J_KBSlider-cur";d.prototype={constructor:d,start:function(){return this.stop(),this._id=setInterval(this._handle,this._during),this},stop:function(){return this._id&&(clearInterval(this._id),this._id=null,delete this._id),this}};var h={render:function(b){var d,e=this;if(a.isString(b))d=b;else{b=a.mix({updateUrl:"http://windows.microsoft.com/zh-cn/windows/downloads?spm=608.2291429.20140707.12.KdZxog",updateGuid:"\u5176\u5b9e...\u4eb2\u6709\u66f4\u597d\u7684\u9009\u62e9",closeWarn:"\u4e0d\uff0c\u6211\u8fd8\u8981\u7528\u8fd9\u60b2\u50ac\u7684\u65b9\u5f0f\u6d4f\u89c8",updateBtn:"http://gtms03.alicdn.com/tps/i3/TB1RcVQFVXXXXbvXFXXcgZpFXXX-140-48.png",slider:[{img:"http://gtms01.alicdn.com/tps/i1/TB1UpxsFVXXXXbIXXXXIXul4XXX-860-342.png",href:f,alt:""},{img:"http://gtms02.alicdn.com/tps/i2/TB1d9prFVXXXXc1XXXXl0Cl4XXX-860-343.png",href:f,alt:""},{img:"http://gtms03.alicdn.com/tps/i3/TB1OORrFVXXXXcbXXXXIXul4XXX-860-342.png",href:f,alt:""}]},b,!0,null,!0);var g=[],h=[];if(b.slider.length<2)return a.log("Error: Dialog slider config error, the slider must be [Array]{2-5}"),!1;a.each(b.slider.slice(0,5),function(a,b){g.push('<a class="kb-slider-item J_KBSlider-item J_KBSlider-item'+b+'" href="'+a.href+'"><img data-src="'+a.img+'" alt="'+(a.alt||"")+'" /></a>'),h.push('<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=dot'+b+'" data-index="'+b+'" class="kb-slider-step J_KBSlider-step"></a>')});var i=['<div class="kb-slider J_KBSlider">','<div class="kb-slider-screen">',g.join(""),"</div>",'<div class="kb-slider-handle">','<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=prev" class="kb-slider-prev J_KBSlider-prev">\u2039</a><div>',h.join(""),'</div><a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=next" class="kb-slider-next J_KBSlider-next">\u203a</a>',"</div>","</div>"].join(""),j=['<a class="kb-dialog-btn" data-spm-click="gostr=/ued;locaid=btn1" target="_blank" href="',b.updateUrl,'">',"<span>",b.updateGuid,"</span>",'<img data-src="',b.updateBtn,'" alt="" />',"</a>"].join("");d=i+j}var k=c('<div class="kb-mask"></div>').appendTo("body"),l=e.$dialog=c(['<div class="kb-dialog" data-spm="20140707"><!--[if IE 6]><span class="kb-dialog-refer"></span><![endif]--><div class="kb-dialog-wrapper J_KBDialog">','<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=close" class="kb-dialog-close-wrapper J_KBClose">','<span class="kb-close">\u2715</span>',b.closeWarn?'<span class="kb-warn">'+b.closeWarn+"</span>":"","</a>",'<div class="kb-dialog-content">',d,"</div>","</div></div>"].join("")).appendTo("body").delegate("click.close",".J_KBClose",function(){e.hide()});return a.isString(b)||e._bindSliderEvt(l,k),e._bindEvt(l,k),this},_bindSliderEvt:function(a){var b;a.on("slider.start",function(){b||a.one(".J_KBSlider-step").item(0).fire("click"),b=b||new d(function(){a.one(".J_KBSlider-next").fire("click")}),b.start()}).on("slider.stop",function(){b&&b.stop()}).delegate("mouseenter.stop",".J_KBSlider",function(){a.fire("slider.stop")}).delegate("mouseleave.start",".J_KBSlider",function(){a.fire("slider.start")}).delegate("slider.show",".J_KBSlider-item",function(a){c.one(a.target).animate({left:0},".4","boundBothStrong")}).delegate("slider.hide",".J_KBSlider-item",function(a){var b=c.one(a.target).animate({left:"-100%"},".4","boundBothStrong",function(){b.css("left","100%")})}).delegate("click.prev",".J_KBSlider-prev",function(){{var b=a.one(".J_KBSlider-cur");b.attr("data-index")}(b.prev()||b.parent().last(".J_KBSlider-step")).fire("click")}).delegate("click.next",".J_KBSlider-next",function(){{var b=a.one(".J_KBSlider-cur");b.attr("data-index")}(b.next()||b.siblings().item(0)).fire("click")}).delegate("click.step",".J_KBSlider-step",function(b){var d=c.one(b.target);if(d.hasClass(".J_KBSlider-cur"))return!1;var e=a.one(".J_KBSlider-cur")||d.parent().last(".J_KBSlider-step");d.siblings().removeClass(g),d.addClass(g);var f=a.one(".J_KBSlider-item"+d.attr("data-index")),h=a.one(".J_KBSlider-item"+e.attr("data-index"));h.fire("slider.hide"),f.fire("slider.show")})},_bindEvt:function(a,b){var d=this;a.on("show",function(){c.one("body").addClass("body-fix"),b.show().animate({opacity:".75"},".4","easeBothStrong"),a.show().one(".J_KBDialog").animate({opacity:1},".4","easeBothStrong",function(){d.fire("show")}),a.fire("slider.start"),a.all("img").each(function(){var a=c.one(this);a.attr("src",a.attr("data-src"))})}).on("hide",function(){a.fire("slider.stop"),b.animate({opacity:0},".4","easeBothStrong"),a.one(".J_KBDialog").animate({opacity:0},".4","backBothStrong",function(){a.hide(),b.hide(),c.one("body").removeClass("body-fix"),d.fire("hide")})})},show:function(){return this.$dialog.fire("show"),this},hide:function(){return this.$dialog.fire("hide"),this}},i={};return b.extend?b.extend(h):a.extend(e,h,i)},{requires:["base","node"]});