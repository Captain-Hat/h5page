//  import imgUrl from '../images/code.jpg';
import 'fullpage.js/dist/jquery.fullpage.min.js'
import 'fullpage.js/dist/jquery.fullpage.min.css'
$(() => {
    //计算二维码大小和位置。已知数据：code 209*209   左上角坐标155,164   大图：750*683
    //宽占0.2787   坐标  0.2067  0.2401
    //添加二维码omitWeeks
    //  console.log(imgUrl);
    //防止缓存
    var codeUrl = "http://image.apin.com/qrcode.jpg";
    var stamp = new Date().getTime();
    $('.urlCode').attr('src', codeUrl + '?t=' + stamp)
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
        //友盟统计
    $('.urlCode').click(function() {
        _czc.push(['_trackEvent', '二维码图片', '点击或扫描', '', '0', 'urlCode']);
    })

    function share(data) {
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: a, // 必填，公众号的唯一标识
            timestamp: a, // 必填，生成签名的时间戳
            nonceStr: a, // 必填，生成签名的随机串
            signature: a, // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'onVoicePlayEnd',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'translateVoice',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });
        wx.ready(function() {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
            // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
            // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
            // 则可以直接调用，不需要放在ready函数中。
            alert('准备好了');

            //分享给朋友
            wx.onMenuShareAppMessage({
                title: '测试分享', // 分享标题
                desc: '测试分享', // 分享描述
                link: 'http://myetc.iask.in/test', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://myetc.iask.in/images/apinlogo30.png', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function() {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功了');
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                    alert('居然取消了');
                }
            });
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: '测试分享', // 分享标题
                link: 'http://myetc.iask.in/test', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://myetc.iask.in/images/apinlogo30.png', // 分享图标
                success: function() {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功了');
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                    alert('居然取消了');
                }
            });

        });
        wx.error(function(res) {
            console.log(res);
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
    }
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        timeout: 30000,
        processData: false,
        contentType: false,
        xhrFields: {
            withCredentials: false
        },
        success: share(data),
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("错误信息：" + jqXHR.status + "***" + jqXHR.readyState + "***" + textStatus);
        }
    });
})