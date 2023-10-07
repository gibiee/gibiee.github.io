function btn_plus() {
    var current = window.getComputedStyle(document.documentElement).fontSize;
    var currentSize = parseFloat(current.slice(0,-2));
    document.documentElement.style.fontSize = currentSize + 0.5 + "px"
}

function btn_minus() {
    var current = window.getComputedStyle(document.documentElement).fontSize;
    var currentSize = parseFloat(current.slice(0,-2));
    document.documentElement.style.fontSize = currentSize - 0.5 + "px"
}

