/*
combined files : 

kg/departurelayer/toptip

*/
KISSY.add('kg/departurelayer/toptip',function (S, Base, Node) {
  function Toptip () {}
  var props = {
    render: function (config) {
      var self = this;
      var content;
      if (S.isString(config)) {
        content = config;
      } else {
        config = S.mix({
          title : '亲，您的浏览器版本过低导致网页打开速度过慢，为享受极速体验，我们建议亲：',
          button: {
            name: 'ie',
            title: '升级IE浏览器',
            href: 'http://windows.microsoft.com/zh-cn/windows/downloads'
          },
          others : [
            {
              name: 'uc',
              title: 'UC浏览器',
              href: "http://down2.uc.cn/pcbrowser/index.php?id=101&pid=4415"
            },
            {
              name: 'chrome',
              title: '谷歌浏览器',
              href: 'http://www.google.cn/intl/zh-CN/chrome/browser/?installdataindex=chinabookmarkcontrol&brand=CHUN&gclid=CIDzwJGo3cECFQZvvAodnwMAsA'
            }
          ]
        }, config, true, null, true);

        content = '<span class="kb-toptip-title">'+
          config.title+
          '</span><a href="'+
          config.button.href+
          '" target="_blank" data-spm-click="gostr=/ued;locaid=btn2" class="kb-toptip-btn kb-toptip-ie">'+config.button.title+'</a>';
        if (config.others && config.others.length) {
          content += '<span class="kb-toptip-title">或者点击下载</span>';
          var _tmp = [];
          S.each(config.others, function (info) {
            _tmp.push('<a href="'+info.href+'" class="kb-toptip-btn kb-toptip-'+info.name+'" data-spm-click="gostr=/ued;locaid=btn'+info.name+'" target="_blank">'+info.title+'</a>');
          });
          content += _tmp.join('或');
        }
      }
      var $toptip = self.$toptip = Node('<div data-spm="20140707" class="kb-toptip kb-toptip-wrapper">' + 
          content + 
          '</div>').prependTo('body').hide().on('show', function () {
        $toptip.show().animate({
          marginTop: 0
        }, '.4', 'easeBothStrong', function(){
          self.fire('show');
        });
      }).on('hide', function () {
        $toptip.animate({
          marginTop: -45
        }, '.4','easeBothStrong', function () {
          $toptip.hide();
          self.fire('hide');
        });
      });
      return this;
    },
    show: function () {
      this.$toptip.fire('show');
      return this;
    },
    hide: function () {
      this.$toptip.fire('hide');
      return this;
    }
  };
  var members = {};
  if (Base.extend) {
    return Base.extend(props, members);
  } else {
    return S.extend(Toptip, props, members);
  }
},{
  requires:['base', 'node']
});
