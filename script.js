document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownLinks = dropdownContent.querySelectorAll('a');

    // Toggle dropdown on click
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    // Handle click event for each dropdown link
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            dropdownLinks.forEach(l => l.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Optionally, close the dropdown after a link is clicked
            dropdownContent.classList.remove('show');
        });
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});