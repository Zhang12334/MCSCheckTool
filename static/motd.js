/* ----- ���ƺ��� ----- */
function mc521_cc(){
	const motd1 = '-----=====[&nbsp;��ͥ��&nbsp;&nbsp;��������&nbsp;]=====-----'
	const motd2 = '&nbsp;���İ汾��1.20.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�ٷ�Ⱥ��5587557'	
	const motd = motd1+'<p>'+motd2
	return motd
}
/* --- ���ƺ��� End --- */

/* ----- �������� ----- */
function get_motd(ip,port,motd,motd_json){
	if( ip==='mc521.cc' && port==='25565' ){
		return mc521_cc()
	} else if( ip==='mcfkcs.com' && port==='12345' ){
 		gmotd = motd.split('\n')
		var patten = new RegExp(/(��[0-9a-fl-or]{1})|\s{2,}/g)
		motd = gmotd[0].replace(patten,'')
		motd2 = gmotd[1].replace(patten,'')
		return '<div class="layui-panel ly-motd-bg"><div style="padding:10px;" class="motd">'+motd+'<p>'+motd2+'</div></div>'
	} else {
		return '<div class="flex"><div class="layui-panel ly-motd-bg"><div style="padding:10px" class="motd-nosupport"><span>�˷����� MOTD ��ȡ�ݲ�֧��<p>��ɵ���Ҳఴť��ѯ֧���б�</p></span></div></div><button type="button" class="layui-btn motd-btn md-1" lay-on="motd-tip">�������ʾ</button></div>'
	}
}
/* --- �������� End --- */