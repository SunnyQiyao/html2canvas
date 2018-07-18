

// 性别选择
var radio=$(':radio[name=sex]');
radio.on('click',function () {
    var myVal=$(this).val();
    if(myVal==0){
        $(this).addClass('boyActive');
        $(this).siblings('input').removeClass('girlActive');
    }else{
        $(this).addClass('girlActive');
        $(this).siblings('input').removeClass('boyActive');
    }
});

function checkInfo(form) {
    if(form.username.value=='') {
        $('.writeName').css('display','block');
        setTimeout(function () {
            $('.writeName').css('display','none');
        },2000)
        form.username.focus();
        return false;
    }else{
        return true;
    }
    if(!$("input[name='sex']").is(":checked")){
        return false;
    }else{
        return true;
    }
};

// 点击制作我的写照
$('.makePhoto').on('click',function () {
    var userName=$('.userName').val()
    var boyGirl=$(':radio[name=sex]:checked').val();
    localStorage.setItem('userName',userName);
    localStorage.setItem('boyGirl',boyGirl);
});

$(function () {
    var getUsername=localStorage.getItem('userName');
    var getBoyGirl=localStorage.getItem('boyGirl');
    getBoyGirl = getBoyGirl=='null'?0:getBoyGirl;
    if(getBoyGirl==0){
        $('#male').prop('checked',true);
        $('#male').addClass('boyActive');
    }else{
        $('#female').prop('checked',true);
        $('#female').addClass('girlActive');
    }

    $('.someone').text(getUsername);

    // 根据用户选择的是男生还是女生，显示不同的‘任务类型’及页面内容
    if(getBoyGirl=="0"){
        $('.boyImage').css('display','block');
        $('.girlImage').css('display','none');
        $('.makePlace').css('background-image','url("../images/boy1.png")');
        $('.someStyle').text('艺术少年');
        $('.onlyGirl').hide();
    }else{
        $('.girlImage').css('display','block');
        $('.boyImage').css('display','none');
        $('.makePlace').css('background-image','url("../images/girl1.png")');
        $('.someStyle').text('艺术少女');
        $('.onlyBoy').hide();
    };

    // 选择男生形象
    var boyImage=$('.boyImage li');
    boyImage.on('click',function () {
        boyImage.removeClass('activeMan');
        $(this).addClass('activeMan');
        var whichMan=$(this).children('span').html();
        var index=$(this).index();
        var photoPage=$(this).parent().parent().parent().parent();
        photoPage.find('.yourPhoto').children('.someStyle').html(whichMan);
        var baseUrl='../images/';
        var boyImgs=[baseUrl+'boy1.png',baseUrl+'boy2.png',baseUrl+'boy3.png',baseUrl+'boy4.png',baseUrl+'boy5.png'];
        for(var i=0;i<boyImage.length;i++){
            if(i==index){
                 $('.makePlace').css('background-image','url('+boyImgs[i]+')');
            }
        };
    });

    // 选择女生形象
    var girlImage=$('.girlImage li');
    girlImage.on('click',function () {
        girlImage.removeClass('activeMan');
        $(this).addClass('activeMan');
        var whichMan=$(this).children('span').html();
        $('.someStyle').html(whichMan);
        var index=$(this).index();
        var baseUrl='../images/';
        var girlImgs=[baseUrl+'girl1.png',baseUrl+'girl2.png',baseUrl+'girl3.png',baseUrl+'girl4.png',baseUrl+'girl5.png'];
        for(var j=0;j<girlImgs.length;j++){
            if(j==index){
                 $('.makePlace').css('background-image','url('+girlImgs[j]+')');
            }
        };
    });

    // 选择背景
    var bgsLi=$('.chooseBg li');
    bgsLi.on('click',function () {
        $(this).siblings('li').children('b').css('display','none');
        $(this).children('b').css('display','block');
        // 女生的背景
        if(getBoyGirl=="1"){
            var index=$(this).index();
            var baseUrl='../images/';
            var makeplaceBg=$('.makePlace').css('background-image');
            var getPng=makeplaceBg.split('/').pop().substr(0,5);
            if(getPng=="girl1"){
                var girl1Imgs=[baseUrl+'girl1_1.png',baseUrl+'girl1_2.png',baseUrl+'girl1_3.png',baseUrl+'girl1_4.png'];
                for(var i=0;i<girl1Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl1Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl2"){
                var girl2Imgs=[baseUrl+'girl2_1.png',baseUrl+'girl2_2.png',baseUrl+'girl2_3.png',baseUrl+'girl2_4.png'];
                for(var i=0;i<girl2Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl2Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl3"){
                var girl3Imgs=[baseUrl+'girl3_1.png',baseUrl+'girl3_2.png',baseUrl+'girl3_3.png',baseUrl+'girl3_4.png'];
                for(var i=0;i<girl3Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl3Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl4"){
                var girl4Imgs=[baseUrl+'girl4_1.png',baseUrl+'girl4_2.png',baseUrl+'girl4_3.png',baseUrl+'girl4_4.png'];
                for(var i=0;i<girl4Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl4Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl5"){
                var girl5Imgs=[baseUrl+'girl5_1.png',baseUrl+'girl5_2.png',baseUrl+'girl5_3.png',baseUrl+'girl5_4.png'];
                for(var i=0;i<girl5Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl5Imgs[i]+')');
                    }
                };
            }
        }else{
            // 男生的背景
            var index=$(this).index();
            var baseUrl='../images/';
            var makeplaceBg=$('.makePlace').css('background-image');
            var getPng=makeplaceBg.split('/').pop().substr(0,4);
            if(getPng=="boy1") {
                var boy1Imgs = [baseUrl + 'boy1_1.png', baseUrl + 'boy1_2.png', baseUrl + 'boy1_3.png', baseUrl + 'boy1_4.png'];
                for (var i = 0; i < boy1Imgs.length; i++) {
                    if (i == index) {
                        $('.makePlace').css('background-image', 'url(' + boy1Imgs[i] + ')');
                    }
                }
            }else if(getPng=="boy2"){
                var boy2Imgs=[baseUrl+'boy2_1.png',baseUrl+'boy2_2.png',baseUrl+'boy2_3.png',baseUrl+'boy2_4.png'];
                for(var i=0;i<boy2Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy2Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy3"){
                var boy3Imgs=[baseUrl+'boy3_1.png',baseUrl+'boy3_2.png',baseUrl+'boy3_3.png',baseUrl+'boy3_4.png'];
                for(var i=0;i<boy3Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy3Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy4"){
                var boy4Imgs=[baseUrl+'boy4_1.png',baseUrl+'boy4_2.png',baseUrl+'boy4_3.png',baseUrl+'boy4_4.png'];
                for(var i=0;i<boy4Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy4Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy5"){
                var boy5Imgs=[baseUrl+'boy5_1.png',baseUrl+'boy5_2.png',baseUrl+'boy5_3.png',baseUrl+'boy5_4.png'];
                for(var i=0;i<boy5Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy5Imgs[i]+')');
                    }
                };
            }
        }
    });
});

// 形象和背景切换
var visualizeBgLi=$('.visualizeBg li');
visualizeBgLi.on('click',function () {
    var index=$(this).index();
    var chooseOut= $(this).parent().parent().siblings('.chooseOut');
    $('.arrow').children('img').css('display','none');
    $(this).children('.arrow').children('img').css('display','block');
    $('.lablePic').removeClass('labelActive');
    $(this).find('.commonLabel').addClass('labelActive');
    chooseOut.children('.commonChoose').css('display','none')
    chooseOut.children('.commonChoose').eq(index).css('display','block');
});

// NEXT
var nextStage=$('.nextStage');
nextStage.on('click',function () {
    $('.beChoosed').css('display','block');
    $('.chooseOut').css('display','none');
    $('.someMark').css('display','none');
    $('.someLabels').css('display','block');
    $('.differentLabel').css('display','block');
});

// 标签切换
var labelLi=$('.differentLabel li');
labelLi.on('click',function () {
    var index=$(this).index();
    labelLi.removeClass('activeLabel');
    $(this).addClass('activeLabel');
    $('.someLabels').children('ul').css('display','none');
    $('.someLabels').children('ul').eq(index).css('display','block');
    $('.arrows').children('img').css('display','none');
    $(this).children('.arrows').children('img').css('display','block');
});

// 选择不同的标签到页面上
var labelCommonLi=$('.labelCommon li');
var choosedLi=$('.beChoosed li');
var activedLiLength;
var num=0;
labelCommonLi.children('span').on('click',function () {
    if($(this).parent('li').children().length==1){
        num++;
        activedLiLength = $('.labelCommon').children('li.activeLabelBg').length;
        if (activedLiLength >=6) {
            $('.fulled').show();
            setTimeout(function () {
                $('.fulled').hide();
            },1000);
            return false;
        }
        var labelCon=$(this).text();
        var str='<i class="close" data-id="'+num+'"></i>';
        $(this).parent('li').append(str);
        $(this).parent('li').addClass('activeLabelBg');

        var blankIndex;
        for(var i=0;i<choosedLi.length;i++){
            if(!$(choosedLi[i]).children('span').text()){
                blankIndex=i;
                break;
            }
        }
        choosedLi.eq(blankIndex).children('span').attr('data-id',num);
        choosedLi.eq(blankIndex).children('span').text(labelCon);
    }

    // 点击图片上的标签框，移除该标签框里面的内容，同时【标签选项】对应的标签取消选中。
    choosedLi.children('span').on('click',function () {
        if($(this).text()){
            $(this).text('');
            var id=$(this).attr('data-id');
            var $close=$('i[data-id="'+id+'"]');
            $close.parent('li').removeClass('activeLabelBg');
            $close.remove();
            $(this).removeAttr('data-id');
        };
    });

    // 点击‘标签选项’中选中项，移除对应标签框的内容，并取消选中
    var close=$('.close');
    for(var i=0;i<close.length;i++){
        $(close[i]).on('click',function () {
            $(this).parent('li').bind('click');
            var id=$(this).attr('data-id');
            $('span[data-id="'+id+'"]').text('');
            $(this).parent('li').removeClass('activeLabelBg');
            $(this).remove();
        });
    }
});

// 点击‘标签选项’和‘选项卡’以外的页面，隐藏‘选项卡’
$(document).on('click touchstart',function (e) {
    var someLabels=$('.someLabels');
    var differentLabel=$('.differentLabel');
    var beChoosed=$('.beChoosed');
    var someMark=$('.someMark');
    if(!someLabels.is(e.target)&&someLabels.has(e.target).length===0&&!differentLabel.is(e.target)&&differentLabel.has(e.target).length===0&&!beChoosed.is(e.target)&&beChoosed.has(e.target).length===0&&!someMark.is(e.target)&&someMark.has(e.target).length===0){
        someLabels.hide();
    }

});

$('.isOk').on('click',function(){
    // 未选择的隐藏
    for(var i=0;i<choosedLi.length;i++){
        if($(choosedLi[i]).children('span').text()==''){
            $(choosedLi[i]).children('span').parent('li').hide()
        }
    };
    $('.erweimaLogo').css('display','block');
    $('.someLabels').hide();
    $('.differentLabel').hide();

    //创建一个新的canvas
    var w=$('#body').width();
    var h=$('#body').height();
    var canvas = document.createElement("canvas");
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    var context = canvas.getContext("2d");
    context.scale(2, 2);
    html2canvas(document.getElementById('body'), {
        canvas:canvas,
        onrendered: function(canvas) {
            $('canvas').hide();
            $('.makePlace').hide();
            $('.photoPage').css('height','auto');
            document.body.appendChild(canvas);
            // 这个url是base64码  只有用服务启动后toDataURL()才可以正常使用
            var url = canvas.toDataURL();
            localStorage.setItem('url',url);
            window.location.href='../views/myPhoto.html';
            $('canvas').remove();
        }
    });
});
// 新页面跳转生成图片
var myUrl=localStorage.getItem('url');
$('.createdPic').append('<img class="bodyimg" src='+myUrl+'></div>');


// 邀请好友
$('.inviteFriend').on('click',function () {
    $('.mask,.sharePng').css('display','block');
});
$('.mask').on('click',function () {
    $('.mask,.sharePng').css('display','none');
});

// 微信分享
function fenxiang() {
    var openId = $('#openId').val();
    $.ajax({
        url:$('#base_url').html()+'coupon/get_wx',
        type:'post',
        async : false,
        success: function(msg) {
            var obj = eval("("+ msg +")");
            var dt=obj.data;
            //拿到返回的id
            var getAppId = dt.appId;
            var getTimestamp = dt.timestamp;
            var getNonceStr = dt.nonceStr;
            var getSignature = dt.signature;
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: getAppId, // 必填，公众号的唯一标识
                timestamp: getTimestamp, // 必填，生成签名的时间戳
                nonceStr: getNonceStr, // 必填，生成签名的随机串
                signature: getSignature,// 必填，签名，见附录1
                jsApiList: [  // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ]
            });
            var _b_img = 'http://www.xuebacoming.com/portraiture/images/share_me.png';
            wx.ready(function(){
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: "【暑假写照】快来点击制作你的暑假写照！", // 分享标题
                    desc: '【暑假写照】快来点击制作你的暑假写照！', // 分享描述
                    link: 'http://www.xuebacoming.com/portraiture/?user_openid='+openId, // 分享链接
                    imgUrl: _b_img, // 分享图标
                    success: function () {
                        layer.msg('分享成功', {
                            time: 1000
                        },function(){
                            $('.mask').css('display','none');
                            $('.sharePng').css('display','none');
                            location.reload();
                        });
                    },
                    cancel: function () {
                    }
                });
                //分享到朋友
                wx.onMenuShareAppMessage({
                    title: "【暑假写照】快来点击制作你的暑假写照！", // 分享标题
                    desc: '用一张图说明你的暑假怎么过', // 分享描述
                    link: 'http://www.xuebacoming.com/portraiture/?user_openid='+openId, // 分享链接
                    imgUrl: _b_img, // 分享图标
                    success: function () {
                        layer.msg('分享成功', {
                            time: 1000
                        },function(){
                            $('.mask').css('display','none');
                            $('.sharePng').css('display','none');
                            location.reload();
                        });
                    },
                    cancel: function () {
                    }
                });
            });
            wx.error(function (res) {
                layer.msg('分享失败，请重新分享', {
                    time: 1000
                },function(){
                    location.reload();
                }); //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
            });
        }
    });
};
$(function () {
    fenxiang();
})




