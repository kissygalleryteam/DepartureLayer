/*
combined files : 

kg/departurelayer/dialog

*/
KISSY.add('kg/departurelayer/dialog',function (S, Base, Node) {
  var VOID_DEFAULT = "javascript:void(0)";
  var CURRENT_HANDLE_CLASS = 'kb-slider-cur J_KBSlider-cur';
  function Layter (handle, during) {
    this._handle = handle;
    this._during = during || 4000;
    return this;
  }
  Layter.prototype = {
    constructor: Layter,
    start: function () {
      this.stop();
      this._id = setInterval(this._handle, this._during);
      return this;
    },
    stop: function () {
      if (this._id){
        clearInterval(this._id);
        this._id = null;
        delete this._id;
      }
      return this;
    }
  };

  function Dialog () {}
  var props = {
    render: function (config) {
      var self = this;
      var content;
      if (S.isString(config)) {
        content = config;
      } else {
        config = S.mix({
          links: [{
            name: 'ie',
            title: "升级到IE最新版",
            ie6: 'http://gtms03.alicdn.com/tps/i3/TB1m0g7GpXXXXcyaXXXWZopIFXX-75-73.png',
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABJCAMAAABCWCvTAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAj8NL+Z6F6b0u0Ml48iTbpF9EGeG2UgGtbTZmEQvUlz3+WgahhRc1AAACoUlEQVRYw73X2ZKbMBAF0AbEDmbHGI/3+//fmOByBDEtgSCV8zYFI9PSbZDI3E97soJrlsV54tAeYRKnGGUJbVQlEb5de9qgzAU4dzJyvFSljb88ro3l5e/n/Fk9zN1zmzoVmErdZ0VvvQ0E6ybo3NSYc2niCoS0yHEFWLVbHOVdB8CiBUUMjTqRo0WISetuY0H2/NxqwT+S2svCCt2BBmcIzUr2GVYRxeJYJ6x2G27X1OjBQEfkwiaFG4zYlMMlngtDdoRid4FSyk/9GeYUUT1gC9ESo8YmjwPNWMoqXC9JrDxTXl9boe/Jnw1vD7Ce9IVvZ+/y1++5/JR9Jb9k1/u+bqmT5cdKK+YVyT7YiyZCMMLVIXwuNI+qOXLMRTR6pVzf8i5CX0Jp8hX1uPXWlhiRSsXELNC2j0dKV2YlK13mS1KydAvVYka3T3B0cS24jg1shSDCXK5Ll6FIhn6/TPbifrUM6n6+jMt+KbPC+54rwr9Qy0XcTwxjdYr6LTOn4W30UM2luQK8R0XGYiiEZKqCyolMnaASkKn8kzSBmQOplM639vfNx/ozOcy0NcTQfGh6vNnsPtUh1tHHTDQm4smmX3BV8uEe9nOJzGXA9Vi18sORHuUFl4ZqGf48ZK4yP824swjW7Ib6iH/fjANUmn1hdL5MztxgteNYsX5z7+dJ2ffl+RbrU91ND70ZNhE/k0WxZG9u4kzb0WO2AuvJ/74DYnL4TmCsIymDgL3jcBV8v3PCzYM1s0a90sgR2wqUEY3az19hccN6yezY779Hy2+WG6RD2toAq/gts8e+pWP9pyF43gPL8gtxfhwrCBrvGf65fGiwICpptbKDRlyQkd71wRJdS8YuTpfNJrwpKtooLJI8vma1n2Vx453vL/offgErN7BZiof7/wAAAABJRU5ErkJggg==",
            href: 'http://windows.microsoft.com/zh-cn/windows/downloads?spm=608.2291429.20140707.12.KdZxog'
          }, {
            name: 'uc',
            title:"下载UC浏览器",
            ie6:'http://gtms02.alicdn.com/tps/i2/TB1Hf.8FVXXXXc4aXXX3p3hIpXX-72-72.png',
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMA+g4G9v4JUfDZ6iUUAuQfGnaZh2wr1H9fVz29kkg33sW1MbBmz8uqonGMuULKxMpDAAAFTElEQVRYw51X2YKqMAyVUilFAdl3UDYV9f9/79IFpGwzc/M0g+1pepKcpAfRFHB6pje/wIltlUA5/J8p5tsuPl9rghL8B4x8chP4Ec1wSvnP7oQ39bOwYxue/4ZzSo3Pmh2N4E9IWQM/G6Y5f0B6Sp9tg8/fUq5b2mfP1PyXNLvaZ9+u4Fdhz/DnJ4t+A+QlR7VJktbYAWp/41CKuyguyxwFcJty72eg3M55eEFsbOaAuygDc3Gz8zd6F2PLp8c8f6/2bnZdjhtA/swh5wPD3YvWG0DG7MA+YW6n3ZxS14EKcZlLEh7pe0jJOlAirrqRb91umqbrQJ1YU9Tv6+U/gEKRIlbMtfL3q4mxzrnA4MDcBFpPpNtMvUbZ06wNorJVHCkSs8ianrGq6kq1CtQIZJxrKOQqWkFCq2kEQ33iTpnOFhVogWMmqyVyv0wC9rzCRbaWMxyQwtU6e38dim7azwoq19pqmY3pokdXbdVlyRIjVqwqf8C5BCGWtsQBTy6v53i9qynU20vt7/WZ50SqXqtO8xVeVyUt3lbQFxij8ViL+wtNKDTjsKsadfV6fjwk2QrOsXAW2nWOXRtLKwzUg3QeFzCwQr2/Jkpdy3IjlAPO5Tm2kgXrksN7v7Ygx3heZBAmvmEcVVUzjKJ5WWgYyNACKqW/vP35CfDmyb07p/PFy2qMJeYjVO03dytqRKg7rYxq4U49qx3Lh2zf0Q/POo2OI/SuihDkqiI76q08zA30xcE3tqHJ5O2B1SOHh3b/obyKOIZzoUycYhT1huKTTAMWvuBwfMYUMw7uSev7zfXW5f2GpyQG3SWrAHIqRg3ENwdRaM/Rhminscwc9fL3Oy4p7qkVazQE5Kx7MeWyqGqPouOBxcbxZm1NfwsOQVfpWQvwPKu025NeZqRB9dNsNtaI00LvstKpJHKvh33/zqhSUQFS2l9CJdWw3Vwew4GnB2M6UqpS4Zr8nNgew3wDazkn4TSSddbsRoPvfmuI23B6fzPA0kQJEV6WU5vJh0i4GOjJt7t528srfsMEkGakrsnxwZnqU6Yf5Kw+s0LP43gY5i6d+q2E810sf6hpqvQ6dFN5MslQB6gTwf3atu3dyXWK2rHNuCYZbEyjGYQIRZZ9sCdAlnIYPPAhP85neW4+GLMPcow1XsHOTC7FUyCIBtlt4VQmPZpumLmUkepxMJSkPrVOQF+bY5p8mDRnbcukm5lLKU+L+fNySnbicdnl8R0Vp1NoAjEet0bHYMTh46UcaozG6/1+5VVKpB0wfIw2gNBEnE7ffnLErqkfTBd/R0hL5Q1q3Uxp5lFc0HiErIgig8ISlhDrxM7GwAfaGUeIIt/5csCCUZMTMMv+jRlUdsSoyWxmHy6gI5ZhJJjN4Pe6lXBML0SBxBdaNgKZLQubt/X+uH/fQDKZXeifwTjKjEBesw8kI00YzTLIFEM4BpEfMFt02nwS2UPginxsKpA994FLYVUCG7Ja3Xlfxc3gUqD0ex2JNQpUlpnNN1NNltga+RfP7MIktcBwYdG2mHcWj759eXc4bBuwIZeXlOAG6kxJXeJEzb76Qu/YHNSlmPxnQwEnIAydqs9+0XKkGydc88h/nTZWvqRR2pUn/9AEoXcB2zzpnNZjQpUfVViVelNxhRSaI8VUpe+RqW/6VF9Vtoi+UkBmpY9Har1ZPlGcKVSVKVtIchlQhYUJYmt0AIZghMailflo+3ogdyuVSFEnEurZmojyM+vypawfvgT9wJs02kYMIlQ1fK1sOvLuYSngXEaWhc7sfqfQelpP13XrMEJZ7JlnQExRZJHuf54MoFG+QMpjAAAAAElFTkSuQmCC",
            href: "http://down2.uc.cn/pcbrowser/index.php?id=101&pid=4415"
          }, {
            name: "chrome",
            title: "下载谷歌浏览器",
            ie6: 'http://gtms01.alicdn.com/tps/i1/TB1fFWQGFXXXXbrapXXCCuUIpXX-71-71.png',
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAMAAABibqotAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMAM+/8BeH3OQHyIlVDCed1a0wWEMy4yByTjK+hXCvSxJyDe6gwvuvYKv1tKAAAA1RJREFUWMOd2OmaqjAMBuBI2UHZERDcl9z/FZ7aehwgQcH338wz1pL0S3Xgi3XnJEEQOr4Jv8qSurDwP3vfRI4LS22jUiDhNcEaFggLgROMagszJSV+Io4+zHC94TeiyuALsxY4wyaBj/wcZzp+Knjg4Wz5dJUiXGKzApZb4zJeCJwTLmVzC8W4nNHREgv8gZXCyA5/cjDHwbTxJ6fhmCFlnks4/UwVcikLf7LvPdkBZV5a/E38NygQHya4JRKirIPVF+/eu3tEjAAccvKj7aLph5KXjnvvRQtne6EHwaD3fJ5Dy+C0+uQIXQoZ3zO+Nex86dimFoNpcej3/uK+Xni6bYRnNfErAD63kNjqpr8EMmWo5bo0q9tftiu90tVGKnped+IdujW4elHPV308iUH3wsm5UKjD83aWOxBqfbXMZbz9ACTumHly+3Xvx63u/UbVuKJ1CPUxoWTI+tfVDiD1XttJuJGs7q2czcYde1TvVfnNBzKqiQpVkGFf6cre5wBTqbXTZ++5Qnc40Mre1yDdPoTbosNjEE7de+ieg81GVqOCRAsHIT8nr8h7gHSkzwvB+Dfb10jieSDVSNAXXD6uY/MnC5lTpQa3g7wNf0cZsMKx3H2mDnk3newxizsMaiypFPHJNj363mAKZnHpjCyff+YGwOJSp3NGFRPtkke3QeI4tSFxfT7Whi3FmWmuCuqBrQ4/yHw9TtgzlD7YfWZ3JCxdfSpQC+WjyKjZf0FqB1KDlKEGtHk2epEejmf6tgEyLH0Lpue9rljR6ouoFUh5ag6vDTYAV9AyJwyvJmixWobWTan4RMb021aALAcUXyCrDGHItJCTw8sFJ+Tx9v8SjqlvcL7KZEOEVRzrald6jSy6KiQ/H2iFeLY/+VcOvGU0MjSIHb/rHfQk+Nk9U7fE5BU798lilUNOMmpp/uUzsrn/9nFe8z+VKJn6OtTQs9oZOKXQ04Iq10CFNvJEp2Yptc+A43iIEzH0bW43GfCubH68lE9Os4Yp6Q0J9huDno7T3LPAAf0ptlz8DwVw9jTNLQ1DCt+Y8aDFB5d+w8tDmGMdbXppJjfcIXFhJrM9oHYZ3dD2zoFF/Kjw9M16/Cv5LshgOdOJA5kXG+27VV5OrQ/T/gEVfvREHGr3yQAAAABJRU5ErkJggg==",
            href: "http://www.google.cn/intl/zh-CN/chrome/browser/?installdataindex=chinabookmarkcontrol&brand=CHUN&gclid=CIDzwJGo3cECFQZvvAodnwMAsA"
          }],
          closeWarn: "不，我还要用这悲催的方式浏览",
          slider : [ 
            {
              img: 'http://gtms01.alicdn.com/tps/i1/TB1UpxsFVXXXXbIXXXXIXul4XXX-860-342.png',
              href: VOID_DEFAULT,
              alt: ""
            }, {
              img:'http://gtms02.alicdn.com/tps/i2/TB1d9prFVXXXXc1XXXXl0Cl4XXX-860-343.png',
              href: VOID_DEFAULT,
              alt: ""
            },{
              img: 'http://gtms03.alicdn.com/tps/i3/TB1OORrFVXXXXcbXXXXIXul4XXX-860-342.png',
              href: VOID_DEFAULT,
              alt: ""
            }
          ]
        }, config, true, null, true);
        var _slides = [];
        var _handles = [];
        if (config.slider.length < 2) {
          S.log('Error: Dialog slider config error, the slider must be [Array]{2-5}');
          return false;
        }

        S.each(config.slider.slice(0,5), function (slide, i) {
          _slides.push('<a class="kb-slider-item J_KBSlider-item J_KBSlider-item'+i+'" href="'+slide.href+'" target="_blank"><img data-src="' + slide.img + '" alt="'+(slide.alt||'')+'" /></a>');
          _handles.push('<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=dot'+i+'" data-index="' + i + '" class="kb-slider-step J_KBSlider-step"></a>');
        });
        var slider = [
          '<div class="kb-slider J_KBSlider">',
            '<div class="kb-slider-screen">',
              _slides.join(''),
            '</div>',
            '<div class="kb-slider-handle">',
              '<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=prev" class="kb-slider-prev J_KBSlider-prev"></a><div>',
              _handles.join(''),
              '</div><a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=next" class="kb-slider-next J_KBSlider-next"></a>',
            '</div>',
          '</div>'
        ].join('');
        var links = [];
        if (!config.links || !config.links.length) {
          throw Error('Links must be array');
        }
        S.each(config.links, function (link) {
          links.push([
            '<a href="',
              link.href,
            '" class="kb-dialog-btn kb-dialog-',
              link.name,
            '">',
            '<img src="',(!-[1,] && !window.XMLHttpRequest && link.ie6 ? link.ie6 : link.icon),'" alt="',link.title,'" /> ',
            '<span class="kb-dialog-title">',link.title,'</span>',
            '</a>'].join(''));
          alert(!-[1,] + '  ' + !window.XMLHttpRequest)
        });
        var footer = [
          '<div class="kb-dialog-footer clearfix">',
            '<div class="pull-right">',
              links.join(''),
            '</div>',
            '<div class="pull-left">',
              '<div class="kb-dialog-txt kb-dialog-big-txt">其实...</div>',
              '<div class="kb-dialog-txt kb-dialog-mid-txt">亲有更好的选择</div>',
            '</div>',
          '</div>'
        ].join('');
          // '<a class="kb-dialog-btn" data-spm-click="gostr=/ued;locaid=btn1" target="_blank" href="',config.updateUrl,'">',
          //   '<img data-src="',config.updateBtn,'" alt="" />',
          // '</a>'
        content = slider + footer;
      }
      var $mask = Node('<div class="kb-mask"></div>').appendTo('body');
      var $dialog = self.$dialog = Node([
        '<div class="kb-dialog" data-spm="20140707"><!--[if IE 6]><span class="kb-dialog-refer"></span><![endif]--><div class="kb-dialog-wrapper J_KBDialog">',
          '<a href="javascript:void(0);" data-spm-click="gostr=/ued;locaid=close" class="kb-dialog-close-wrapper J_KBClose">',
            '<span class="kb-close"></span>',
            config.closeWarn ? '<span class="kb-warn">'+config.closeWarn+'</span>':'',
          '</a>',
          '<div class="kb-dialog-content">',
            content,
          '</div>',
        '</div></div>'
      ].join('')).appendTo('body').delegate('click.close', '.J_KBClose', function () {
        self.hide();
      });
      if (!S.isString(config)) {
        self._bindSliderEvt($dialog, $mask);
      }
      self._bindEvt($dialog, $mask);
      return this;
    },
    _bindSliderEvt: function ($dialog, $mask) {
      var _later;
      var self = this;
      $dialog.on('slider.start', function () {
        if (!_later) {
          $dialog.one('.J_KBSlider-step').item(0).fire('click');
        }
        _later = _later || new Layter(function () {
          $dialog.one('.J_KBSlider-next').fire('click');
        });
        _later.start();
      }).on('slider.stop', function () {
        _later && _later.stop();
      }).delegate('mouseenter.stop', '.J_KBSlider', function () {
        $dialog.fire('slider.stop');
      }).delegate('mouseleave.start', '.J_KBSlider', function () {
        $dialog.fire('slider.start');
      }).delegate('slider.show', '.J_KBSlider-item', function (e) {
        Node.one(e.target).animate({
          left: 0
        }, '.4', 'boundBothStrong');
      }).delegate('slider.hide', '.J_KBSlider-item', function (e) {
        var $this = Node.one(e.target).animate({
          left: '-100%'
        }, '.4', 'boundBothStrong', function () {
          $this.css('left', '100%');
        });
      }).delegate('click.prev', '.J_KBSlider-prev', function (e) {
        var $current = $dialog.one('.J_KBSlider-cur');
        var curIndex = $current.attr('data-index');
        ($current.prev() || $current.parent().last('.J_KBSlider-step')).fire('click');
      }).delegate('click.next', '.J_KBSlider-next', function (e) {
        var $current = $dialog.one('.J_KBSlider-cur');
        var curIndex = $current.attr('data-index');
        ($current.next() || $current.siblings().item(0)).fire('click');
      }).delegate('click.step', '.J_KBSlider-step', function (e) {
        var $this = Node.one(e.target);
        if ($this.hasClass('.J_KBSlider-cur')) {return false}
        var $active = $dialog.one('.J_KBSlider-cur') || $this.parent().last('.J_KBSlider-step');
        $this.siblings().removeClass(CURRENT_HANDLE_CLASS);
        $this.addClass(CURRENT_HANDLE_CLASS);
        var $current = $dialog.one('.J_KBSlider-item' + $this.attr('data-index'));
        var $prev = $dialog.one('.J_KBSlider-item' + $active.attr('data-index'));
        $prev.fire('slider.hide');
        $current.fire('slider.show');
      });
    },
    _bindEvt: function ($dialog,$mask) {
      var self = this;
      $dialog.on('show', function () {
        Node.one('body').addClass('body-fix');
        $mask.show().animate({
          opacity: '.75'
        },'.4', 'easeBothStrong');
        $dialog.show().one('.J_KBDialog').animate({
          opacity: 1
        }, '.4', 'easeBothStrong', function () {
          self.fire('show');
        });
        $dialog.fire('slider.start');
        $dialog.all('img').each(function () {
          var $img = Node.one(this);
          $img.attr('src', $img.attr('data-src'));
        });
      }).on('hide', function () {
        $dialog.fire('slider.stop');
        $mask.animate({
          opacity: 0
        }, '.4', 'easeBothStrong');
        $dialog.one('.J_KBDialog').animate({
          opacity:0
        }, '.4', 'backBothStrong', function () {
          $dialog.hide();
          $mask.hide();
          Node.one('body').removeClass('body-fix');
          self.fire('hide');
        });
      });
    },
    show: function () {
      this.$dialog.fire('show');
      return this;
    },
    hide: function () {
      this.$dialog.fire('hide');
      return this;
    }
  };
  var members = {};
  if (Base.extend) {
    return Base.extend(props);
  } else {
    return S.extend(Dialog, props, members);
  }
}, {
  requires: [
    'base',
    'node'
  ]
});
