function loadContent() {
    if (window.navigator.onLine) {
        d.innerHTML = '<iframe id="iframe" src="https://blockmodo.com/home/ETH" allowfullscreen></iframe>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});