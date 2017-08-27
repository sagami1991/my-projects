var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function() {
    var res = JSON.parse(xhr.responseText);
    var html = res.projects.map(function(project) {
        return ''+
        '<div class="project-tile">' +
            '<div class="project-title">' +
                '<span class="project-link-mark"></span>'+
                '<a class="project-link-text" href="' + project.url + '" target="_blank">' + project.title + '</a>' +
            '</div>' +
            '<div class="project-image-container">' +
                '<a class="project-image-link" href="' + project.url + '" target="_blank">' +
                    '<img class="project-image" src="images/' + project.image + '">' +
                '</a>' +
            '</div>' +
            '<div class="project-description">' +
                '<div class="project-release-date">' + project.date + '</div>' +
                '<div>' + project.description + '</div>' +
            '</div>' +
        '</div>'
    }).join("\n");
    document.querySelector(".project-tiles-container").innerHTML = html;
});
xhr.open("GET", "./projects.json", true);
xhr.send();