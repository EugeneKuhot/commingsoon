function setInitialAppHeight() {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
}

window.addEventListener('DOMContentLoaded', setInitialAppHeight);