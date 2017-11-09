mui.init()
//工单详情
mui.previewImage();
mui("body").on("tap","a",function(){
    document.location.href=this.href;
})