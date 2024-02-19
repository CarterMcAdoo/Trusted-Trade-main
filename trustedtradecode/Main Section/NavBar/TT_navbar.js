// Select the navigation toggle checkbox
const navToggle = document.getElementById('nav-toggle');

// Select existing links
const existingLinks = document.querySelectorAll('.links li');

// Add event listener to toggle checkbox
navToggle.addEventListener('change', () => {
    // Check if the toggle is checked
    if (navToggle.checked) {
        // If checked, create the div element
        const navListToggle = document.createElement('div');
        navListToggle.classList.add('navlisttoggle'); // Add class to the created div
        
        // Clone existing links and append them to the dropdown menu
        existingLinks.forEach(link => {
            const clonedLink = link.cloneNode(true); // Clone the link
            clonedLink.querySelector('a').style.textDecoration = 'none'; // Remove link underline
            clonedLink.querySelector('a').style.color = '#fff'; // Set link color to white
            clonedLink.style.marginBottom = '30px';
            navListToggle.appendChild(clonedLink); // Append cloned link to the div
            navListToggle.appendChild(clonedLink); // Append cloned link to the div
        });
        
        // Set styles for the div
        navListToggle.style.backgroundColor = '#222222';
        navListToggle.style.fontFamily = 'Montserrat'
        navListToggle.style.padding = '20px';
        navListToggle.style.listStyle = 'none'; // Remove list style
        navListToggle.style.textAlign = 'center'; // Center text
        

       
        
        // Append the div to the body
        document.body.appendChild(navListToggle);
    } else {
        // If unchecked, remove the div element if it exists
        const navListToggle = document.querySelector('.navlisttoggle');
        if (navListToggle) {
            navListToggle.remove(); // Remove the div from the DOM
        }
    }
});
