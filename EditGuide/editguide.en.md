<p align="center">
  <img src="https://gitee.com/lingyunawa/mcschecktool/raw/master/mcschecktool.png" width="100%" height="100%" alt="MCSCheckTool">
</p>

<div align="center">

<h1> MCSCheckTool </h1>

</div>
<br><br>
<div align="center">

### Custom deployment tutorials

This tutorial helps you set up a web page that you can deploy to query only specified servers

<br>

### Things you need to do

1\. First download our latest release file, then open `index.html`, `main.js` and `page.js` under the `static` folder

2\. Delete every line between `[EDITGUIDE] REMOVE START` to `[EDITGUIDE] REMOVE END` (inclusive)

3\. Delete line 12 of 'index.html', which is the line below here:
```html
<li class="layui-nav-item ly-nav" id="nav2" onclick="page2()">配置修改</li>
```

4\. Find `[EDITGUIDE] ADD XX HERE`,the 'XX' will be '#1' or '#2', corresponding to two pieces of code at [here]https://gitee.com/lingyunawa/mcschecktool/blob/master/EditGuide/editguide.js)

5\. The configuration is complete, and you can now deploy your own services