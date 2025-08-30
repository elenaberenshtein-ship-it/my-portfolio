<script>
// Get the button
    let backToTopButton = document.getElementById("backToTop");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
