var currentFilters = [];

function intersect(array1, array2) {
    return array1.filter(function(n) {
        return array2.indexOf(n) !== -1;
    });
}

function cleanTagString(s) {
    return s.trim().split(" ")[0];
}

function setActiveFilterStyles() {
    // TODO make all active filters a different color
    var allTagElems = Array.prototype.slice.call(document.getElementsByClassName("tag"));

    for(var j=0; j<allTagElems.length; j++) {
        var elem = allTagElems[j];
        console.log(cleanTagString(elem.textContent));
        if(currentFilters.indexOf(cleanTagString(elem.textContent)) >= 0) {
            elem.classList.add("active");
        } else {
            elem.classList.remove("active");
        }
    }
}

function filterProjectsOnClick(event) {
    var clickedTag = cleanTagString(event.target.textContent);
    console.log("Clicked!" + clickedTag);
    // Update our filters

    if(currentFilters.indexOf(clickedTag) >= 0) {
        currentFilters.splice(currentFilters.indexOf(clickedTag), 1);
    } else {
        currentFilters.push(clickedTag);
    }
    console.log("Filters now: " + currentFilters);

    // Hide / show projects
    var projects = Array.prototype.slice.call(document.getElementsByClassName("project"));
    for(var i=0; i<projects.length; i++) {
        var project = projects[i];
        var projectTags = Array.prototype.slice.call(project.getElementsByClassName("project-tag")).map(
            function(elem) { return cleanTagString(elem.textContent); }
        );

        if(intersect(currentFilters, projectTags).length == currentFilters.length) { // Match
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    }

    setActiveFilterStyles();
}

function makeTagList() {
    // Add all possible tags to a list at top of projects
    var tag_elems = Array.prototype.slice.call(document.getElementsByClassName("project-tag"));
    var tag_labels = tag_elems.map(function(elem) { return elem.textContent.trim(); } );

    var counts = {};
    tag_labels.map( function (a) { if (a in counts) counts[a] ++; else counts[a] = 1; } );


    // Create HTML elements
    var filtersUl = document.getElementById("project-label-filters").getElementsByTagName("ul")[0];

    for(var tag in counts) {
        console.log(tag + ": " + counts[tag]);
        var textNode = document.createTextNode(tag + " " + counts[tag]);
        var liNode = document.createElement("li");
        liNode.className = "tag";
        liNode.appendChild(textNode);
        filtersUl.appendChild(liNode);
    }


}

function makeListeners() {
    makeTagList();

    var tag_elems = document.getElementsByClassName("tag");

    for(var i=0; i<tag_elems.length; i++) {
        var tag = tag_elems[i];

        tag.addEventListener("click", filterProjectsOnClick);
    }
}


window.onload = makeListeners;