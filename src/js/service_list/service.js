//工单列表
mui.init({
    pullRefresh : {
      container:"body",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
      up : {
        height:50,//可选.默认50.触发上拉加载拖动距离
        auto:true,//可选,默认false.自动上拉加载一次
        contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
        contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
        callback :pullfreshFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
      }
    }
  });
mui("#sevice-list-container").on("tap","a",function(){
    document.location.href=this.href;
})
mui("body").on("tap",".filter-option.zt",function(){
    if(this.className.indexOf("cur")==-1){
        $(this).addClass("cur")
        $(".mask").show()
    }else{
        $(this).removeClass("cur")
        $(".mask").hide()
    }
})
mui("body").on("tap",".mask",function(){
    $(".mask").hide();
    $(".filter-option.zt").removeClass("cur")
})
mui(".tab-item-select").on("tap","li",function(){
    mui('body').pullRefresh().refresh(true);
    $(this).addClass("selected").siblings("li").removeClass("selected")
    SERVICE_DATA.setConfig({serviceStatus:this.dataset.status,p:1,hasNext:1}) 
    SERVICE_DATA.getServiceList()
})
mui(".device-list").on("tap","li",function(){
    mui('body').pullRefresh().refresh(true);
    $(this).addClass("cur").siblings("li").removeClass("cur");
    SERVICE_DATA.setConfig({deviceId:this.dataset.id,p:1,hasNext:1}) 
    SERVICE_DATA.getServiceList()
    $(".device-list").hide();
})
mui("body").on("tap",".open-device-list",function(){
    $(".device-list").show();
    $(".filter-option.zt").removeClass("cur");
    $(".mask").hide();
})
var SERVICE_DATA={
    deviceId:"",
    serviceStatus:"",
    p:1,
    num:20,
    hasNext:1,
    url:"",
    method:"get",
    setConfig:function(options){
        this.deviceId=options.deviceId?options.deviceId:this.deviceId;
        this.serviceStatus=options.serviceStatus?options.serviceStatus:this.serviceStatus;
        this.p=options.p?options.p:this.p;
        this.num=options.num?options.num:this.num;
        this.hasNext=options.hasNext?options.hasNext:this.hasNext;
        this.url=options.url?options.url:this.url;
        this.method=options.method?options.method:this.method;
    },
    getServiceList:function(){
        var that=this;
        console.log(that)
        mui.ajax(that.url,{
            data:{
                deviceId:that.deviceId,
                serviceStatus:that.serviceStatus,
                p:that.p,
                num:that.num
            },
            dataType:"json",
            type:that.method,
            success:function(data){
                if(that.p==1) document.getElementById("sevice-list-container").innerHTML="";                
                if(data.length>0){
                    formatServiceList(data,that);
                    SERVICE_DATA.setConfig({p:that.p+1});
                }
                // if(data.length<that.num||!data){
                if(SERVICE_DATA.p>2){
                    SERVICE_DATA.setConfig({hasNext:2});
                }else{
                    SERVICE_DATA.setConfig({hasNext:1});
                }
            },
            error:function(xhr,type,errorThrown){
                console.log(type)
            }
        })
    }
}


function formatServiceList(data,that){
    for(o in data){
        var d=data[o],pl="",et="",s="",ele="";                        
        if((d.deviceId==that.deviceId||that.deviceId=="")&&(d.serviceStatus==that.serviceStatus||that.serviceStatus=="全部"||that.serviceStatus=="")){
            if(d.serviceStatus=="已完工" && d.isComment==0) pl='<a href="service_comment.html" class="comment-btn">评价</a>';
            if(d.endTime) et='<div class="server-end-info">\
                                    <span class="end-time">完工时间：'+d.endTime+'</span>'+pl+
                                '</div>';
            s='<a href="service_detail.html">\
                        <div class="server-no">\
                            <span class="no">单号：'+d.serviceNo+'</span>\
                            <span class="szt">'+d.serviceStatus+'</span>\
                        </div>\
                        <div class="device-info">\
                            <p class="device-name">'+d.deviceName+'</p>\
                            <p class="device-no">设备编号：'+d.deviceNo+'</p>\
                            <p class="fault-desc">故障描述：'+d.faultDesc+'</p>\
                            <p class="add-time">下单时间：'+d.addTime+'</p>\
                        </div>\
                    </a>'+
                    et;
            ele=document.createElement("li");
            ele.innerHTML=s;
            document.getElementById("sevice-list-container").appendChild(ele);
        }
    }
}

function pullfreshFunction(){
    SERVICE_DATA.getServiceList();
    if(SERVICE_DATA.hasNext==1){
        this.endPullupToRefresh(false);
    }else{
        this.endPullupToRefresh(true);
    }
}
