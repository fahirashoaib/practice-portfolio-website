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

    // Language menu handling
    const langBtn = document.querySelector('.langBtn');
    const languageContent = document.getElementById('languageContent');
    const languageLinks = languageContent.querySelectorAll('a');

    // Toggle language dropdown on click
    langBtn.addEventListener('click', function(event) {
        event.preventDefault();
        languageContent.classList.toggle('show');
    });

    // Handle click event for each language link
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');

            // Change language by updating the text content
            updateTextContent(lang);

            // Optionally, close the language dropdown after a link is clicked
            languageContent.classList.remove('show');
        });
    });

    // Close the language dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!langBtn.contains(event.target) && !languageContent.contains(event.target)) {
            languageContent.classList.remove('show');
        }
    });
});

function updateTextContent(lang) {
    // Hide all quotes
    const quotes = document.querySelectorAll('[data-lang]');
    quotes.forEach(el => {
        el.style.display = 'none';
    });

    // Show the selected language's quote
    const selectedQuote = document.querySelector(`[data-lang="${lang}"]`);
    if (selectedQuote) {
        selectedQuote.style.display = '';
    }
}
