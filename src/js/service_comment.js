mui.init()
//工单评价
var star=$("#score").val();
var ele=$(".stars li");
var imgData=[];
Star(star,ele)
ele.on("click",function(){
    var num=ele.index(this)+1;
    Star(num,ele)
    $("#score").val(num);
})

mui(".img-picker").on("click",".mui-col-xs-3",function(){
    var imgUrl=getImgUrl();
    var index=$(".img-picker .mui-col-xs-3").index(this);
    imgData[index]= imgUrl;   
    this.childNodes[0].src=imgUrl;
    var e=document.createElement("div");
    e.className="mui-col-xs-3";
    e.innerHTML='<img src="/images/service/add.png">';
    if(mui(".img-picker .mui-col-xs-3").length<4&&mui(".img-picker .mui-col-xs-3").length==index+1){
        mui(".img-picker .mui-row")[0].appendChild(e);
    }
    $("#imgUrl").val(imgData);
})

function Star(star,ele){
    ele.removeClass("s");
    $.each(ele,function(index){
        var t=ele.eq(index);
        if(star>index){
            t.addClass("s");
        }
    })
}
function getImgUrl(){
    return "/images/service/waji.png";
}