/*
* @Author: Thinkpad
* @Date:   2017-10-08 16:39:15
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-08 16:46:01
*/
window.onload=function(){
	let returns=document.querySelector('.foot-xia');
	returns.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
}