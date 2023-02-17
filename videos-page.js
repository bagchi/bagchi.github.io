$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "videos.csv",
        dataType: "text",
        success: function (data) {
            processData(data);
        }
    });
});

function processData(allText) {
    allTextLines = allText.split("\n");
    allTextLines.shift();
    for(var i = 0; i < allTextLines.length; i++) { // CSV is title, date, link, description
        var data = allTextLines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        var title = data[0].substring(1, data[0].length - 1);
        var date = data[1].substring(1, data[1].length - 1);
        var video = data[2].substring(0, data[2].length - 1) + "?autoplay=0\"";
        var description_1 = data[3].substring(1, data[3].length - 2);
        var description = description_1.replace(/\\n/g,'<br>');

        if(i == 0) {
            document.getElementById("video-list").innerHTML += '<div class="carousel-item active">\n<div class="column-container flex-grow-1" id="video-list">\n<iframe class="d-block video" src=' + video + '></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium text-white">' + title + '</p>\n<p class="fs-6 fw-light text-white">' + date + '</p>\n<p class="fs-6 fw-light text-white">' + description + '</p>\n</div>\n</div>\n';
            //document.getElementById("video-list").innerHTML += '<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n';
            document.getElementById("video-list").innerHTML += '</div>\n';
        } else {
            document.getElementById("video-list").innerHTML += '<div class="carousel-item">\n<div class="column-container flex-grow-1" id="video-list">\n<iframe class="d-block video" src=' + video + '></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium text-white">' + title + '</p>\n<p class="fs-6 fw-light text-white">' + date + '</p>\n<p class="fs-6 fw-light text-white">' + description + '</p>\n</div>\n</div>\n';
            //document.getElementById("video-list").innerHTML += '<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n';
            document.getElementById("video-list").innerHTML += '</div>\n';
        }
        console.log(document.getElementById("video-list").innerHTML);
    }

}