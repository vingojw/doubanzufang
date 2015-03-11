##使用phantomjs爬页面

要换房子了，豆瓣上海租房小组里面好多信息，不想一个一个翻，太多页了。[地址](http://www.douban.com/group/shanghaizufang/discussion?start=0)

用node爬结果是页面被拒绝，索性用phantomjs吧

如果安装了phantomjs，直接运行

```
phantomjs app.js
```
 修改以下参数
 
```
var url = 'http://www.douban.com/group/shanghaizufang/discussion?start=';
var pageNum = 50;//页数
```
最后会生成index.html，里面就是需要的。


[phantomjs的使用教程](http://www.html-js.com/article/1624) 

 