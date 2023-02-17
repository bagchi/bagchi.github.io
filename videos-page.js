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

        if(i == 0) {
            document.getElementById("video-list").innerHTML += '<div class="carousel-item video active">\n<div class="column-container flex-grow-1" id="video-list">\n<iframe class="d-block video" src=' + data[2] + '></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n</div>\n';
            //document.getElementById("video-list").innerHTML += '<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n';
            document.getElementById("video-list").innerHTML += '</div>\n';
        } else {
            document.getElementById("video-list").innerHTML += '<div class="carousel-item video">\n<div class="column-container flex-grow-1" id="video-list">\n<iframe class="d-block video" src=' + data[2] + '></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n</div>\n';
            //document.getElementById("video-list").innerHTML += '<div class="video-description">\n<p class="fs-2 fw-medium" id="">' + data[0] + '</p>\n</div>\n';
            document.getElementById("video-list").innerHTML += '</div>\n';
        }
        console.log(document.getElementById("video-list").innerHTML);
    }

}