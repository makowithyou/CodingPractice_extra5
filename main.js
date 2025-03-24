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
    if (e.target.tagName == "SUMMARY" || e.target.tagName == "LI") {
        const details = e.target.closest("details")
        details.toggleAttribute("open");
    }
}
