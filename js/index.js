$(function () {
    $("body").css("height", $(window).height());

    judge();
    $(".ipt").bind('input propertychange',function () {
        judge();
    });
    function judge() {
        if ($(".ipt").val() === '') {
            $(".btn").attr("disabled", true);
        } else {
            $(".btn").attr("disabled", false);
        }
    };

    $(".btn").click(function () {
        $(this).attr("disabled", true);
        $("ul").empty();
        $.ajax({
            url: 'https://query.asilu.com/weather/baidu?city=' + $(".ipt").val(),
            dataType: 'jsonp',
            success: function (response) {
                $(".btn").attr("disabled", false);
                $("h2").html('--' + response.city);
                $("span").html('--更新时间:' + response.update_time);
                var result = response.weather;
                for (var i = 0; i < result.length; i++) {

                    if (result[i].w != null) {
                        var li = $('<li><p>' + result[i].date + '</p><p>' + result[i].weather + '</p><p>' + result[i].temp + '</p><p>' + result[i].w + '</p><p>' + result[i].wind + '</p></li>');
                    } else {
                        var li = $('<li><p>' + result[i].date + '</p><p>' + result[i].weather + '</p><p>' + result[i].temp + '</p><p>' + result[i].wind + '</p></li>');
                    }
                    $("ul").append(li);
                }
            }
        })
    });

    var huaWidth = $(".hua").width();
    var huaHeight = $(".hua").height();
    for (var j = 0; j < 800; j++) {
        var i = document.createElement("i");
        var colorIndex = parseInt(Math.random() * 4);
        var width = parseInt(Math.random() * 3);
        var x = parseInt(Math.random() * huaWidth);
        var y = parseInt(Math.random() * huaHeight);
        i.style.width = width + 'px';
        i.style.height = width + 'px';
        i.style.top = y + 'px';
        i.style.left = x + 'px';
        document.querySelector(".hua").appendChild(i);
    }

})



