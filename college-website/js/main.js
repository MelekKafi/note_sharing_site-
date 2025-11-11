// Branching logic: show/hide child branches when clicking on mother branch
document.addEventListener('DOMContentLoaded', function() {
    // Helper to toggle visibility of child <ul>
    function toggleChildList(span) {
        const nextUl = span.nextElementSibling;
        if (nextUl && nextUl.tagName === 'UL') {
            nextUl.style.display = (nextUl.style.display === 'none') ? 'block' : 'none';
        }
    }

    // Set up click listeners for all branching spans
    document.querySelectorAll('#branching span').forEach(function(span) {
        // Only add toggle if span is followed by a UL
        if (span.nextElementSibling && span.nextElementSibling.tagName === 'UL') {
            span.style.cursor = 'pointer';
            span.addEventListener('click', function(e) {
                e.preventDefault();
                toggleChildList(span);
            });
            // Start with child branches hidden
            span.nextElementSibling.style.display = 'none';
        }
    });

    // XP bar click to show/hide XP details
    const xpNumber = document.getElementById('xp-number');
    const branchingSection = document.getElementById('branching');
    const xpDetailsSection = document.getElementById('xp-details');
    const backButton = document.getElementById('back-to-main');

    xpNumber.addEventListener('click', function() {
        branchingSection.style.display = 'none';
        xpDetailsSection.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        xpDetailsSection.style.display = 'none';
        branchingSection.style.display = 'block';
    });
});
