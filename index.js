function updateViewport() {
    const viewport = document.getElementById('viewport');
    if (window.innerWidth < 800) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.2');
    }else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.9');
    }
}
window.onload = updateViewport;
window.onresize = updateViewport;