<p align="center">
  <img src="https://gitee.com/lingyunawa/mcschecktool/raw/master/mcschecktool.png" width="100%" height="100%" alt="MCSCheckTool">
</p>

<div align="center">

<h1> MCSCheckTool </h1>

</div>
<br><br>
<div align="center">

### 自定义部署帮助

这个教程帮助你设置一个可供自己部署的仅查询指定服务器的网页

<br>

### 你需要做的事情

1\. 首先下载我们最新的发行版文件，然后打开 `index.html`，`static` 文件夹下的 `main.js` 和 `page.js`

2\. 删除 `[EDITGUIDE] REMOVE START` 到 `[EDITGUIDE] REMOVE END` 之间的每一行（包括这两）

3\. 删除 `index.html` 的第 12 行，也就是下方这一行

```html
<li class="layui-nav-item ly-nav" id="nav2" onclick="page2()">配置修改</li>
```

4\. 找到 `[EDITGUIDE] ADD XX HERE`，其中 `XX` 可以是 `#1` 或 `#2`，对应 [这里](https://gitee.com/lingyunawa/mcschecktool/blob/master/EditGuide/editguide.js) 的两段代码

5\. 配置完成，现在你可以部署属于你自己的服务了