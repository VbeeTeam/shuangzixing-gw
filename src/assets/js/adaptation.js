
    // 设计稿的宽度 / 适配屏幕 = htm字体的大小(自己设置的100px) /实际字体大小

    // 实际字体大小 = htm字体的大小(自己设置的100px)*适配的宽度 / 设计稿的宽度

    // 验证以  适配器宽度为640  实际宽度（手动获取）  默认的html字体大小100px

    // 首先，先调用一次函数
    sizeWidth();

    // 然后，在加载页面宽度的时候再调用一次
    window.onresize  = function () { 
        sizeWidth();
     }


    function sizeWidth() {


        // 获取当前屏幕的宽度
        var screenWidth = document.querySelector('html').offsetWidth; 

        // 基础值
        var baseSz = 16;

        // 设计稿的宽度
        var pageWidth = 800;

        // 套用公式
        var fZ = baseSz * screenWidth/ pageWidth;

        // 直接给元素赋值
        document.querySelector("html").style.fontSize = fZ + "px";
    }
