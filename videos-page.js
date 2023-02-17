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
            document.getElementById("video-list").innerHTML += '<div class="carousel-item active">\n<iframe class="d-block w-100 h-100" src=' + data[2] + '></iframe>\n</div>\n';
        } else {
            document.getElementById("video-list").innerHTML += '<div class="carousel-item">\n<iframe class="d-block w-100" src=' + data[2] + '></iframe>\n</div>\n';
        }
        console.log(data);
    }

}