window.yvan = {

    /** @MethodName: getDynamicTime
     * @Description: 根据赋予ID值实现动态刷新时间的方法
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  13:55
     *
     */
    getDynamicTime: function () {
        //分别获取年、月、日、时、分、秒
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        //月份的显示为两位数字如09月
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        //时间拼接
        var dateTime = year + "年" + month + "月" + date + "日" + hours + "时" + minutes + "分" + seconds + "秒";
        //document.write(dateTime);//打印当前时间
        var divNode = document.getElementById("time");
        divNode.innerHTML = dateTime;
    },

    /** @MethodName: addZero
     * @Description: 补零操作
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  14:31
     *
     */
    addZero: function (num) {
        if (parseInt(num) < 10) {
            num = '0' + num;
        }
        return num;
    },

    /** @MethodName: getMyDate
     * @Description: 把时间字符串转换为标准时间
     * 参数说明： str: 时间字符串 string:y-m-d-h-i-s 选择转换格式 li: true 默认格式 / false: 添加中文格式
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  14:03
     *
     */
    getMyDate: function (str, string, li) {
        str = typeof (str) == "string" ? parseInt(str) : str; // 判断变量是否为String类型
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),        // 获取年份
            oMonth = oDate.getMonth() + 1,      // 获取月份
            oDay = oDate.getDate(),             // 获取天数
            oHour = oDate.getHours(),           // 获取小时
            oMin = oDate.getMinutes(),          // 获取分钟
            oSen = oDate.getSeconds();          // 获取秒数
        li = li == undefined ? true : false;
        switch (string) {
            case 'y' :                          // 年
                if (li) {
                    oTime = oYear;
                } else {
                    oTime = oYear + "年"
                }
                break;
            case 'm' :                          // 月
                if (li) {
                    oTime = yvan.addZero(oMonth);
                } else {
                    oTime = yvan.addZero(oMonth) + "月";
                }
                break;
            case 'd' :                          // 日
                if (li) {
                    oTime = yvan.addZero(oDay);
                } else {
                    oTime = yvan.addZero(oDay) + "日";
                }
                break;
            case 'h' :                          // 小时
                if (li) {
                    oTime = yvan.addZero(oHour);
                } else {
                    oTime = yvan.addZero(oHour) + "时";
                }
                break;
            case 'i' :                          // 分
                if (li) {
                    oTime = yvan.addZero(oMin);
                } else {
                    oTime = yvan.addZero(oMin) + "分";
                }
                break;
            case 's' :                          // 秒
                if (li) {
                    oTime = yvan.addZero(oSen);
                } else {
                    oTime = yvan.addZero(oSen) + "秒";
                }
                break;
            case 'y-m' :                          // 年-月
                if (li) {
                    oTime = oYear + '-' + yvan.addZero(oMonth);
                } else {
                    oTime = oYear + '年' + yvan.addZero(oMonth) + "月";
                }
                break;
            case 'y-m-d' :                          // 年-月-日
                if (li) {
                    oTime = oYear + '-' + yvan.addZero(oMonth) + '-' + yvan.addZero(oDay);
                } else {
                    oTime = oYear + '年' + yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日";
                }
                break;
            case 'y-m-d-h' :                          // 年-月-日 时
                if (li) {
                    oTime = oYear + '-' + yvan.addZero(oMonth) + '-' + yvan.addZero(oDay) + ' ' + yvan.addZero(oHour);
                } else {
                    oTime = oYear + '年' + yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日" + ' ' + yvan.addZero(oHour) + "时";
                }
                break;
            case 'y-m-d-h-i' :                          // 年-月-日 时-分
                if (li) {
                    oTime = oYear + '-' + yvan.addZero(oMonth) + '-' + yvan.addZero(oDay) + ' ' + yvan.addZero(oHour) + ':' + yvan.addZero(oMin);
                } else {
                    oTime = oYear + '年' + yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日" + ' ' + yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分";
                }
                break;
            case 'y-m-d-h-i-s' :                          // 年-月-日 时-分-秒
                if (li) {
                    oTime = oYear + '-' + yvan.addZero(oMonth) + '-' + yvan.addZero(oDay) + ' ' + yvan.addZero(oHour) + ':' + yvan.addZero(oMin) + ':' + yvan.addZero(oSen);
                } else {
                    oTime = oYear + '年' + yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日" + ' ' + yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分" + yvan.addZero(oSen) + "秒";
                }
                break;
            case 'm-d-h-i' :                          // 月-日 时-分
                if (li) {
                    oTime = yvan.addZero(oMonth) + '-' + yvan.addZero(oDay) + ' ' + yvan.addZero(oHour) + ':' + yvan.addZero(oMin);
                } else {
                    oTime = yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日" + ' ' + yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分";
                }
                break;
            case 'm-d-h-i-s' :                          // 月-日 时-分-秒
                if (li) {
                    oTime = yvan.addZero(oMonth) + '-' + yvan.addZero(oDay) + ' ' + yvan.addZero(oHour) + ':' + yvan.addZero(oMin) + ':' + yvan.addZero(oSen);
                } else {
                    oTime = yvan.addZero(oMonth) + '月' + yvan.addZero(oDay) + "日" + ' ' + yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分" + yvan.addZero(oSen) + "秒";
                }
                break;
            case 'h-i' :                          // 时-分
                if (li) {
                    oTime = yvan.addZero(oHour) + ':' + yvan.addZero(oMin);
                } else {
                    oTime = yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分";
                }
                break;
            case 'i-s' :                          // 分-秒
                if (li) {
                    oTime = yvan.addZero(oMin) + ':' + yvan.addZero(oSen);
                } else {
                    oTime = yvan.addZero(oMin) + "分" + yvan.addZero(oSen) + "秒";
                }
                break;
            case 'h-i-s' :                          // 时-分-秒
                if (li) {
                    oTime = yvan.addZero(oHour) + ':' + yvan.addZero(oMin) + ':' + yvan.addZero(oSen);
                } else {
                    oTime = yvan.addZero(oHour) + "时" + yvan.addZero(oMin) + "分" + yvan.addZero(oSen) + "秒";
                }
                break;
        }
        return oTime;
    },


    /** @MethodName: toPrecent
     * @Description: 转换百分数
     * 参数说明：number：保留几位小数
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  15:08
     *
     */
    toPercent: function (point, number) {
        var str = Number(point * 100).toFixed(number);
        str += "%";
        return str;
    },


    /** @MethodName: passCookie
     * @Description: 检测cookie
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  16:04
     *
     */
    passCookie: function () {
        if (document.cookie == '') {
            alert("用户已退出！请重新登录！！");
            window.location.href = '/kbs/login.html';
        }
    },


    /** @MethodName: passChrome
     * @Description: 检测是否是Chrome浏览器
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/27/0027  16:06
     *
     */
    passChrome: function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (!(userAgent.indexOf("Chrome") > -1)) {
            alert("检测到这不是Google Chrome浏览器!!! 请使用Google Chrome浏览器!!!");
            window.location.href = "http://172.20.212.196:8080/site";
        }
    },


    /** @MethodName: getMyCharts
     * @Description: 柱形图
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/29/0029  9:49
     *
     */
    getMyCharts: function (eleId) {

        // 渲染活动情况预测
        var myCharts = echarts.init(document.getElementById(eleId), myEchartsTheme);
        var mData = [50, 100, 150, 80, 120, 150, 200, 250, 220, 250, 300, 350, 400, 380, 440];
        // var mData = myData;

        var option = {
            title: {
                text: '整机部当日各线信息统计',
                // 标题居中
                left:'center',
                textStyle:{
                    //文字颜色
                    color:'#000',
                    //字体风格,'normal','italic','oblique'
                    fontStyle:'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight:'bolder',
                    //字体系列
                    fontFamily:'sans-serif',
                    //字体大小
                    fontSize:17
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    show: false,
                    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '智能1号线']
                    // data: myTimeData
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            grid: {
                x: 55,
                y: 45,
                x2: 10,
                y2: 4,
                borderWidth: 1
            },
            series: [
                {
                    name: '电视机产量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6],
                    // data: mData,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: 'gray',
                                    fontSize: 14
                                }
                            }
                        }
                    }
                }
            ]
        };
        myCharts.setOption(option);
        return myCharts;
    }
};