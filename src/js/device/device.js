//页面加载的时候去掉line-height的属性
mui(".device").on("tap","#name",function(event){
	var id = this.id;
	document.getElementById("name").style.display="none";
	document.getElementById("del").style.display="none";
	document.getElementById("edit").style.display="block";
});

mui(".param-list").on("tap",".url",function(){
	var id = this.getAttribute("id");
	var url = this.getAttribute("url");
	mui.openWindow({
		id:id,
		url:url,
		show:{
			autoShow:true,
			aniShow:"slide-in-right",
			duration:8000
		}
	});
});

function presub(){

	var k = event.key;
	console.log(k);
	var preg = /^([0-9a-zA-Z_\u4E00-\u9FA5])+/;

       
    if (!preg.test(k)) {
        console.log("格式错误");
        return false;
    }else{
    	return true;
    }


    

      
}