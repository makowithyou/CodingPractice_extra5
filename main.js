addEventListener(
    "click", (e) => {
        e.preventDefault();
    }
)

addEventListener(
    "mouseover", (e) => {
        toggleAttributeOpen(e);
    }
)

addEventListener(
    "mouseout", (e) => {
        toggleAttributeOpen(e);
    }
)

function toggleAttributeOpen(e) {
    if (e.target.tagName == "SUMMARY") {
        const details = e.target.parentElement;
        details.toggleAttribute("open");
    }
}
