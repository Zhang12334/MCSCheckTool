layui.use(function(){
	var $ = layui.$;
	var layer = layui.layer;
	var util = layui.util;
	// �¼�
	util.on('lay-on', {
		'open-sup': function(){
			layer.open({
				type: 1,
				title:'��ϲ',
				shadeClose: true,
				content: $('#sup-layer'),
			});
		},
		'motd-tip': function(){
			layer.open({
				type: 1,
				title:'MOTD ��ʾ',
				shadeClose: true,
				content: $('#motd-layer'),
				area: ['auto','500px'],
			});
		}
	});
})

function opentip(){
	setTimeout(() => layer.tips('�٣�������~', document.getElementById('supbtn')),1000)
}

function showtip(){
	layer.msg('���سɹ�', {icon: 6})
}

function badresp(){
	layer.msg('����ʧ��', {icon: 5})
}

function showwarn(iss,isp){
	if(iss==='t'){ var warninfo = '������ IP' }
	if(isp==='t'){ var warninfo = '�������˿�' }
	if(iss==='t'&&isp==='t'){ var warninfo = '������ IP �Ͷ˿�' }
	layer.msg('ȱʧ������'+warninfo, {icon: 5})
}

window.onload(opentip())

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