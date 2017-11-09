mui.init()
mui.init({
    pullRefresh: {
        container: 'body',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
        up: {
            height: 30,//可选.默认50.触发上拉加载拖动距离
            auto: true,//可选,默认false.自动上拉加载一次
            contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: faultPullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        }
    }
});

var count = 0;
function faultPullupRefresh() {
     setTimeout(function () {
        mui('body').pullRefresh().endPullupToRefresh((++count > 2));
        $.getJSON('../../vendor/testData/fault-list.json', function (data) {
            console.log(data)
            var backObj = {
                faultItems: data
            };
            var resultStr = template('template-fault', backObj);
             console.log(resultStr);
            $('.fault-eq').append(resultStr);
        })

    }, 1500);
}

