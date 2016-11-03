/**
 * Created by Administrator on 2016/11/3 0003.
 */
$(function () {
    //模态框初始化
    $("#modalOne").modal({
        backdrop:true,
        keyboard:true,
        show:false,
        remote:"changeColor.html"
    });




    //方法
    $(".openBtn").on("click",function () {
        $("#modalOne").modal("show");
    });
    $(".closeBtn").on("click",function () {
        $("#modalOne").modal("hide");
    });

    for(var i=0;i<$("#colorBox>div").length;i++){

        var className =  $("#colorBox>div")[i].className;
        $("#colorBox>div")[i].style.backgroundColor=className;


        $("#colorBox>div")[i].onclick = (function (num) {
            return function () {
                $(".player")[0].style.backgroundColor= $("#colorBox>div")[num].className;
            }
        })(i);

    }





});