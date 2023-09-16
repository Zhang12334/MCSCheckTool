function showrth(){
	layui.use(function(){
		var $ = layui.$;
		var layer = layui.layer;
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			shadeClose: true,
			time: 2000,
			content: '<div style="padding:20px;"><h2 style="color:red;">特别提示</h2><h4>由于此网站部署服务商 - 热铁盒的限制</h4><h4>无法在此站加载服务器 Logo 图片</h4><h4>我们正在尝试修复该问题！</h4></div>'
		})
	})
}
window.onload(showrth())