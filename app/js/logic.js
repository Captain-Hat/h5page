 import imgUrl from '../images/code.jpg';
 import 'fullpage.js/dist/jquery.fullpage.min.js'
 import '../../vendor/countdown/jquery.lwtCountdown-1.0.js'
 import 'fullpage.js/dist/jquery.fullpage.min.css'
 $(() => {
     //计算二维码大小和位置。已知数据：code 209*209   左上角坐标155,164   大图：750*683
     //宽占0.2787   坐标  0.2067  0.2401
     //添加二维码omitWeeks
     console.log(imgUrl);
     //防止缓存
     var stamp = new Date().getTime();
     $('.urlCode').attr('src', imgUrl + '?t=' + stamp)
     $('#countdown').countDown({
         targetDate: {
             'day': 16,
             'month': 6,
             'year': 2017,
             'hour': 0,
             'min': 0,
             'sec': 0
         },
         omitWeeks: true
     });


     $('#fullpage').fullpage({
         verticalCentered: true
     });
     $.fn.fullpage.setAllowScrolling(true);
     
     // 动态计算code-box高度
     var totalH = $('#fullpage').height();
     var top = $('#section0 .header').height();
     var mid = $('#section0 .clock').height();
     console.log(totalH + ',' + top + ',' + mid)
     $('#section0 .code-box').height(totalH - top - mid)
 })