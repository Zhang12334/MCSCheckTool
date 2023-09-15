/* ----- 定制函数 ----- */
function mc521_cc(){
	const motd1 = '-----=====[&nbsp;君庭阁&nbsp;&nbsp;纯净生存&nbsp;]=====-----'
	const motd2 = '&nbsp;核心版本：1.20.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;官方群：5587557'	
	const motd = motd1+'<p>'+motd2
	return motd
}
/* --- 定制函数 End --- */

/* ----- 解析函数 ----- */
function get_motd(ip,port,motd,motd_json){
	if( ip==='mc521.cc' && port==='25565' ){
		return mc521_cc()
	} else if( ip==='mcfkcs.com' && port==='12345' ){
 		gmotd = motd.split('\n')
		var patten = new RegExp(/(§[0-9a-fl-or]{1})|\s{2,}/g)
		motd = gmotd[0].replace(patten,'')
		motd2 = gmotd[1].replace(patten,'')
		return '<div class="layui-panel ly-motd-bg"><div style="padding:10px;" class="motd">'+motd+'<p>'+motd2+'</div></div>'
	} else {
		return '<div class="flex"><div class="layui-panel ly-motd-bg"><div style="padding:10px" class="motd-nosupport"><span>此服务器 MOTD 获取暂不支持<p>你可点击右侧按钮查询支持列表</p></span></div></div><button type="button" class="layui-btn motd-btn md-1" lay-on="motd-tip">点击打开提示</button></div>'
	}
}
/* --- 解析函数 End --- */