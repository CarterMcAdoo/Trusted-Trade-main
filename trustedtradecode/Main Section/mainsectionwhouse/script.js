document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchInput.addEventListener('input', function() {
        // Check if the search input field has any value
        if (searchInput.value.trim() !== '') {
            // If there's text in the search input, change the background color of the search button
            searchButton.style.backgroundColor = '#FCEF00';
        } else {
            // If the search input is empty, revert the background color of the search button
            searchButton.style.backgroundColor = '#a4a4a489';
        }
    });
});
