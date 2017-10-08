/*
* @Author: Thinkpad
* @Date:   2017-10-05 16:19:07
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-10-07 20:38:52
*/
window.onload=function(){
	let banner = document.querySelector('.banner-tu');
	let bannertu=banner.querySelectorAll('li');
	let button = document.querySelector('.button');
	let btn = button.querySelectorAll('li');
	let num = 0;
	let t =setInterval(move,3000)
	function move(){
		num++;
		if(num==bannertu.length){
			num=0;
		}
		for(let i=0;i<bannertu.length;i++){
			bannertu[i].style.opacity=0;
			btn[i].style.background= '#2e2e2e'
		}
		animate(bannertu[num],{opacity:1});
		btn[num].style.background='#8e683b'

	}
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t =setInterval(move,3000);
	}

	//////////////////////////////////////////////
	let chao = document.querySelector('.chao-foot-right');
	let lunbo=chao.querySelector('.lunbo');
	let lunbotu = lunbo.querySelectorAll('li');
	let wenzi=chao.querySelector('.wenzi');
	let wenzis=wenzi.querySelectorAll('li');
	let left = chao.querySelector('.jiantou-left')
	let right = chao.querySelector('.jiantou-right')
	let s = 0
	left.onclick=function(){
		fn();
	}
	right.onclick=function(){
		fn1();
	}
	function fn(){
		s++;
		if(s==lunbotu.length){
			s=0
		};
		for(let i=0;i<lunbotu.length;i++){
			lunbotu[i].style.opacity=0;
			wenzis[i].style.opacity=0;
		}
		animate(lunbotu[s],{opacity:1})
		animate(wenzis[s],{opacity:1})
	}
	function fn1(){
		s--;
		if(s<0){
			s=lunbotu.length-1;
		}
		for(let i=0;i<lunbotu.length;i++){
			lunbotu[i].style.opacity=0;
			wenzis[i].style.opacity=0;
		}
		animate(lunbotu[s],{opacity:1})
		animate(wenzis[s],{opacity:1})
	}
	/////////////////////////////////////////////////
	let foot = document.querySelector('.zhuzuo-foot');
	let foot_li=foot.querySelectorAll('li');
	let zhuzuo = foot.querySelectorAll('.zhuzuotu')
	for(let i=0;i<foot_li.length;i++){
		foot_li[i].onclick=function(){
			for(let j=0;j<foot_li.length;j++){
				foot_li[j].style.background='#22162e'
				zhuzuo[j].style.opacity=0;
			}
			foot_li[i].style.background='#8e683b';
			zhuzuo[i].style.opacity=1;
		}
	}
	///////////////////////////////////////////////
	let returns=document.querySelector('.foot-xia');
	returns.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	///////////////////////////////////////////
	let lishi = document.querySelector('.chaodai');
	let mingzhu = document.querySelector('.zhuzuo');
	let mingren = document.querySelector('.renwu');
	let head_li = document.querySelector('.head-right');
	let lis = head_li.querySelectorAll('li');
	let lishitop = lishi.offsetTop;
	let mingzhutop = mingzhu.offsetTop;
	let mingrentop = mingren.offsetTop;
	console.log(lis[1])
	lis[1].onclick=function(){
		animate(document.body,{scrollTop:lishitop})
		console.log(1)
	}
	lis[2].onclick=function(){
		animate(document.body,{scrollTop:mingzhutop})
	}
	lis[3].onclick=function(){
		animate(document.body,{scrollTop:mingrentop})
	}



}