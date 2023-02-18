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
    for (var i = 0; i < allTextLines.length; i++) { // CSV is title, date, link, description
        var data = allTextLines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        var title = data[0].substring(1, data[0].length - 1);
        var date = data[1].substring(1, data[1].length - 1);
        var video = data[2].substring(0, data[2].length - 1) + "?autoplay=0\"";
        var video_img = data[2].substring(1, data[2].length - 1).replace("https://www.youtube.com/embed/", "https://img.youtube.com/vi/") + "/0.jpg";
        var description_1 = data[3].substring(1, data[3].length - 2);
        var description = description_1.replace(/\\n/g, '<br>');

        addToCarousel(title, date, video, description, i);
        addToVideoList(title, date, video_img, data[2], description);

    }

}

// Sets up carousel items and indicators following this structure:

// div carousel
// div carousel item
// div column container
// iframe
// div video description
// p title
// p date
// p description

// div carousel indicator
// button
function addToCarousel(title, date, video, description, i) {
    if (i == 0) {
        document.getElementById("video-carousel-list").innerHTML += '<div class="carousel-item active">\n<div class="column-container flex-grow-1">\n<iframe class="d-block video" src=' + video + ' allowfullscreen></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium text-white">' + title + '</p>\n<p class="fs-6 fw-light text-white">' + date + '</p>\n<p class="fs-6 fw-light text-white">' + description + '</p>\n</div>\n</div>\n';
        document.getElementById("video-carousel-list").innerHTML += '</div>\n';

        document.getElementById("video-indicators").innerHTML += '<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="' + i + '" class="active" aria-current="true"></button>\n';
    } else {
        document.getElementById("video-carousel-list").innerHTML += '<div class="carousel-item">\n<div class="column-container flex-grow-1">\n<iframe class="d-block video" src=' + video + ' allowfullscreen></iframe>\n<div class="video-description">\n<p class="fs-2 fw-medium text-white">' + title + '</p>\n<p class="fs-6 fw-light text-white">' + date + '</p>\n<p class="fs-6 fw-light text-white">' + description + '</p>\n</div>\n</div>\n';
        document.getElementById("video-carousel-list").innerHTML += '</div>\n';

        document.getElementById("video-indicators").innerHTML += '<button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="' + i + '" class="" aria-current="true"></button>\n';
    }
}


// Add videos to the video list under carousel
function addToVideoList(title, date, video, link, description) {
    document.getElementById("video-list").innerHTML += '<div class="column-container">\n<a href=' + link + ' target="_blank"><img aria-label="Thumbnail of video" src="' + video + '" class="video-thumbnail"></a>\n<div class="row-container">\n<div class="video-list-description">\n<p class="fs-4 fw-bold m-sm-0">' + title + '</p>\n<p>' + date + '</p>\n<p>' + description + '</p>\n</div>\n</div>\n</div>\n';
    
}