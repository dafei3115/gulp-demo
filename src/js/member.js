mui.init()
var recordUrl = '../../vendor/testData/member_record.json';//上拉加载请求的地址

//添加tab点击事件
clickTab();

//改变完成标签颜色
changeColor($('.record-navigate-right'));
changeColor($('.task-navigate-right'));


//上拉加载更多
mui.init({
    pullRefresh: {
        container: '.member-record',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
        up: {
            height: 30,//可选.默认50.触发上拉加载拖动距离
            auto: true,//可选,默认false.自动上拉加载一次
            contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        }
    }
});



//添加tab点击事件
function clickTab() {
    mui('.member-tab').on('tap', 'li', function (e) {
        console.log('点击啦');
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".member-list>div").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
    });
}

//改变完成标签的颜色
function changeColor(element) {
    element.each(function (index, item) {
        if ($(item).hasClass('completed')) {
            element.append("<style>.completed::after{color: #c0c0c0}</style>");
        }
        else if ($(item).hasClass('completing')) {
            element.append("<style>.completing::after{color: #35b33b}</style>");
        }
        else if ($(item).hasClass('uncomplete')) {
            element.append("<style>.uncomplete::after{color: #ef2d32}</style>");
        }
        else {
            console.log('没有完成标签');
        }
    })
}

/**
 * 上拉加载具体业务实现
 */
var count = 0;
function pullupRefresh() {
    console.log('上拉加载');
    setTimeout(function () {
        mui('.member-record').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
        $.getJSON(recordUrl, function (data) {
            // console.log(data)
            var backObj = {
                recordItems: data
            };
            var resultStr = template('template-member-record', backObj);
            // console.log(resultStr);
            // console.log(backObj.items);
            $('.record-table-view').append(resultStr);
        })

    }, 1500);
}

//点击任务列表，跳转打开相应任务详情页面
mui(".task-table-view").on('tap', '.mui-table-view-cell', function () {
    console.log('点击列表了');
    var a = $(this).find('a')[0];
    var index = a.getAttribute('data-index');

    //打开详情
     mui.openWindow({
        id:'detail',
        url:'../html/member_task.html?index='+index+'',//传值
        createNew:true,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
        show:{
            autoShow:true,//页面loaded事件发生后自动显示，默认为true
            aniShow:"slide-in-right",//页面显示动画，默认为”slide-in-right“；
            duration:200,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
        }
    });
})
