layui.use(function(){
	var $ = layui.$;
	var layer = layui.layer;
	var util = layui.util;
	// 事件
	util.on('lay-on', {
		'open-sup': function(){
			layer.open({
				type: 1,
				title:'惊喜',
				shadeClose: true,
				content: $('#sup-layer'),
			});
		},
		'motd-tip': function(){
			layer.open({
				type: 1,
				title:'MOTD 提示',
				shadeClose: true,
				content: $('#motd-layer'),
				area: ['auto','500px'],
			});
		}
	});
})

function opentip(){
	setTimeout(() => layer.tips('嘿，点这里~', document.getElementById('supbtn')),1000)
}

function showtip(){
	layer.msg('加载成功', {icon: 6})
}

function badresp(){
	layer.msg('加载失败', {icon: 5})
}

/* [EDITGUIDE] REMOVE START */
function showwarn(iss,isp){
	if(iss==='t'){ var warninfo = '服务器 IP' }
	if(isp==='t'){ var warninfo = '服务器端口' }
	if(iss==='t'&&isp==='t'){ var warninfo = '服务器 IP 和端口' }
	layer.msg('缺失参数：'+warninfo, {icon: 5})
}
/* [EDITGUIDE] REMOVE END */

window.onload(opentip())
/* [EDITGUIDE] REMOVE START */
/* --------------------------------- */

function setup(){
	document.getElementById('page1').setAttribute('style','display:none');
	document.getElementById('page2').setAttribute('style','display:block');
	document.getElementById('nav1').setAttribute('class','layui-nav-item ly-nav');
	document.getElementById('nav2').setAttribute('class','layui-nav-item ly-nav layui-this');
}

function page1(){
	document.getElementById('page1').setAttribute('style','display:block');
	document.getElementById('page2').setAttribute('style','display:none');
	document.getElementById('nav1').setAttribute('class','layui-nav-item ly-nav layui-this');
	document.getElementById('nav2').setAttribute('class','layui-nav-item ly-nav');
}

function page2(){
	document.getElementById('page1').setAttribute('style','display:none');
	document.getElementById('page2').setAttribute('style','display:block');
	document.getElementById('nav1').setAttribute('class','layui-nav-item ly-nav');
	document.getElementById('nav2').setAttribute('class','layui-nav-item ly-nav layui-this');
}

window.onload(setup())
/* [EDITGUIDE] REMOVE END */