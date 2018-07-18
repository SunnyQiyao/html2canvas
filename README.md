# html2canvas
html2canvas实现保存页面为图片，保存到新的页面，并长按保存到手机
html2canvas.js官网：http://html2canvas.hertzen.com/
初次使用遇到以下bug:
1、一直生成不了页面，后来发现是js版本的问题，用自己下载的js没用，于是用了在线最新版的js，可以截图
<script src="https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.js"></script>
2、图片模糊问题，需要先将canvas放大若干倍，再放到小的容器里就不会模糊。
参考：https://blog.csdn.net/bbsyi/article/details/53068499
3、由于canvas生成的url是base64码，在手机上长按无法保存，可以利用img标签的src属性，将生成的URL放在img标签里面就可以实现
4、将生成的图片。在新页面打开，需要先将生成的URL进行保存，在新的页面获取存储的URL，然后放到img标签里面。如果需要设置图片的样式，可以直接将img标签外部在包裹一个div进行操作
5、生成之后需要将canvas移除，只留下img图片。不然页面会有两个
6、这个body是包裹要生成页面的div
7、这个url是base64码，只有用服务启动后toDataURL()才可以正常使用，直接在本地打开会报错，显示不了正常的界面
可参考解决：https://blog.csdn.net/lan_liang/article/details/78276141
8、页面如果有元素设置了圆角，生成后会变形：
可参考解决：https://www.jb51.net/html5/598169.html
9、最终效果可以参考：在服务器里运行最终截图效果.png，保存到手机上的效果图.jpg

