import config from './config.json';
$(() => {
    //计算二维码大小和位置。已知数据：code 209*209   左上角坐标155,164   大图：750*683
    //宽占0.2787   坐标  0.2067  0.2401
    var endTime = (new Date("2017/6/15 0:0:0")).getTime();
    var startTime = (new Date()).getTime();
    var needMs = endTime - startTime;
     $('#countdown').countDown({
		targetDate: {
		'day': 5,
		'month': 8,
		'year': 2024,
		'hour': 11,
		'min': 0,
		'sec': 0
		}
		});
})