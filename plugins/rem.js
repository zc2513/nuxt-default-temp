/* eslint-disable no-irregular-whitespace */
const baseSize = 192
function restsize() {
    const scale = document.documentElement.clientWidth / 1920
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
if (process.client) {
    restsize()
    window.addEventListener('resize', () => restsize())
}

