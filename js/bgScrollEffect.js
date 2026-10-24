const overlay = document.getElementById("bg-overlay");
const MAX_OPACITY = 0.75; // Maximum opacity value

window.addEventListener("scroll", () => {
    const progress = Math.min(window.scrollY / (window.innerHeight * 2), 1);
    overlay.style.opacity = progress * MAX_OPACITY;
})

window.addEventListener("scrol", UpdateOverlay, {passive: true});
window.addEventListener("resize", UpdateOverlay);
UpdateOverlay();