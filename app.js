var page = require('webpage').create();
var fs = require("fs");



var url = 'http://www.douban.com/group/shanghaizufang/discussion?start=';
var pageNum = 50;//页数






var urlList = [];
for(var i = 0,len = pageNum * 25;i<len;i+=25){
	urlList.push(url+i);
}
var head = '<h4>在浏览器里面Ctrl+f来查找吧，时间为最后帖子的最后回复时间<a href="http://www.douban.com/group/shanghaizufang/discussion?start=0">地址</a></h4>';
var tagBlank = "<style>a{width:500px;display:inline-block;margin:5px;color: #37a;text-decoration:none;}a:hover{color:#fff;text-decoration:none;background:#37a}</style><script>var s  = document.getElementsByTagName('a');for(var i = 0,len = s.length; i < len; i++){s[i].setAttribute('target','_blank');}</script>";
var allLink = [];
function a(urlList){
	url = urlList.shift();
	console.log('doing---'+url);
	if(!url) {
		console.log("妥了");
		console.log(allLink.length);
		fs.write('index.html', head+allLink.join('<br/>')+tagBlank, 'w');
		phantom.exit();
		return;
	}
	page.open(url, function () {
	    var title = page.evaluate(function(){
	    	var a = [],time;
	    	var tttt = document.getElementsByClassName('title');
	    	for(var i = 0,len = tttt.length;i < len; i++){
	    		time = tttt[i].parentNode.getElementsByClassName('time');
	    		if(time.length){
	    			a.push(tttt[i].innerHTML.trim()+'---'+time[0].innerHTML);	
	    		}
	    	}
	    	return a;
	    });
	    allLink = allLink.concat(title);
	    a(urlList);
	}); 
}
a(urlList);

