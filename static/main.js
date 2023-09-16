// Setup
let stplayer
layui.use(function(){
	var layer = layui.layer;
})
	

/* --- [Main] XHR & UI --- */
const xhr = new XMLHttpRequest();
function makeRequest(gip,gport) {
	return new Promise((resolve, reject) => {
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
                		if (xhr.status === 200) {
                    			const resp = JSON.parse(xhr.responseText);
                    			const status = resp['online'];
					const nowplayer = resp['players']['now'];
					const maxplayer = resp['players']['max'];
					const motd = resp['motd'];
					const motd_json = resp['motd_json']
					const version = resp['server']['name'];
					const timestamp = resp['last_updated'];
					const logo = resp['favicon']
					const ip = gip
					const port = gport
					/* - Code for debug - */
					console.info('API JSON Response:',resp)
					//console.info('Server Status:', status);
					//console.info('Server Version:',version);
					//console.info('Server MOTD:',motd);
					//console.info('Players Online:', nowplayer);
					//console.info('Players Max:',maxplayer);
					//console.info('Server Logo',logo);
					//console.info('Info Timestamp:',timestamp);
					/* ------ END ------- */
                    			resolve({ status,nowplayer,maxplayer,motd,motd_json,version,timestamp,logo,ip,port });
                		} else {
                    			reject(new Error('Request failed'));
                		}
            		}	
		};								       
	});
}

function showprogress(progress,elem){
	console.log('[Log] showprogress with args：',progress,elem)
	layui.use(function(){
		var $ = layui.$;
		var element = layui.element;
  		// 动态插入进度条元素
  		$(elem).html(`<div class="layui-progress" lay-filter="demo-filter-progress"><div class="layui-progress-bar" id="progress" lay-percent="${progress}"></div></div>`);
  		// 渲染进度条组件
  		element.render('progress', 'demo-filter-progress');
	});
}

function showprogressred(progress,elem){
	console.log('[Log] showprogress-red with args：',progress,elem)
	layui.use(function(){
		var $ = layui.$;
		var element = layui.element;
  		// 动态插入进度条元素
  		$(elem).html(`<div class="layui-progress" lay-filter="demo-filter-progress"><div class="layui-progress-bar layui-bg-red" lay-percent="${progress}"></div></div>`);
  		// 渲染进度条组件
  		element.render('progress', 'demo-filter-progress');
	});
}

function reloadall(gip,gport){
	xhr.open('GET', 'http://mcapi.us/server/status?ip='+gip+'&port='+gport, true); 
	xhr.send();
	makeRequest(gip,gport)
		.then(({ status,nowplayer,maxplayer,motd,motd_json,version,timestamp,logo,ip,port }) => {
			document.getElementById('configs').innerHTML = 'IP：'+ip+'，端口：'+port
			document.getElementById('main').setAttribute('style','display:block')
			if(status===true){
				document.getElementById('status').innerHTML = '<span class="layui-badge layui-bg-green md-1">在线</span>';
				document.getElementById('logo').innerHTML = '<img class="logo" src="'+logo+'">';
				if(ip==='mc521.cc'){
					showprogress(nowplayer+' / 100','#progress1');
					stplayer = nowplayer+'&nbsp;/&nbsp;100'+'<span style="margin-left:20px;transform:translateY(-12px)"><button type="button" class="layui-btn layui-btn-sm" id="supbtn" lay-on="open-sup">点击打开惊喜</button></span>'
				} else {
					showprogress(nowplayer+' / '+maxplayer,'#progress1');
					stplayer = nowplayer+'&nbsp;/&nbsp;'+maxplayer
				}
				document.getElementById('player').innerHTML = stplayer;
				show_motd = get_motd(ip,port,motd,motd_json);
				document.getElementById('motd').innerHTML = show_motd
				document.getElementById('version').innerHTML = version;
			} else {
				document.getElementById('status').innerHTML = '<span class="layui-badge layui-bg-red md-1">离线</span>';
				document.getElementById('player').innerHTML = '<span style="color:red;line-height:34px;">0 / 0</span>';
				showprogressred('1 / 1','#progress1')
				document.getElementById('logo').innerHTML = '<img src="stack.png">'
				document.getElementById('motd').innerHTML = '<div class="layui-panel ly-motd-bg"><div style="padding: 0px 10px;color:red;line-height:52px;text-align:center;">获取服务器 MOTD 失败</div></div>';
				document.getElementById('version').innerHTML = '<span style="color:red">获取服务器版本失败</span>';
			}
			document.getElementById('timestamp').innerHTML = timestamp
			document.getElementById('error').setAttribute('style','display:none')	
			showtip()
		})
		.catch((error) => {
			console.error(error);
			document.getElementById('main').setAttribute('style','display:none')
			document.getElementById('error').setAttribute('style','display:block')
			badresp()
    		});
	console.log('[Log] Reload Page with args: IP:'+gip+' PORT:'+gport)	
	page1()
}

function formreload(){
	if(document.getElementById('serverip').value === ''){
		showwarn('t','f')
	} else {
		var ip = document.getElementById('serverip').value;
	}
	if(document.getElementById('serverport').value === ''){
		showwarn('f','t')
	} else {
		var port = document.getElementById('serverport').value;
	}
	if(document.getElementById('serverip').value === '' && document.getElementById('serverport').value === ''){
		showwarn('t','t')
	}
	if(document.getElementById('serverip').value !== '' && document.getElementById('serverport').value !== ''){	
		reloadall(ip,port)
	}
}
/* ----- [Main] END ------ */