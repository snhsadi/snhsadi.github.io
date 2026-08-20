document.addEventListener('DOMContentLoaded', function() {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        // If link is external, add target="_blank" and rel="noopener noreferrer"
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener noreferrer';
        }
    }
});
