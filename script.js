// State management for selected image
let selectedImage = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.image-item');
    
    // Add click event listeners to all image items
    imageItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            handleImageClick(index);
        });
    });
});

// Handle image click functionality
function handleImageClick(index) {
    const imageItems = document.querySelectorAll('.image-item');
    
    // If clicking the same image, deselect it
    if (selectedImage === index) {
        selectedImage = null;
        imageItems.forEach(item => {
            item.classList.remove('selected', 'dimmed');
        });
        return;
    }
    
    // Select new image
    selectedImage = index;
    
    imageItems.forEach((item, i) => {
        item.classList.remove('selected', 'dimmed');
        
        if (i === index) {
            // Selected image
            item.classList.add('selected');
        } else {
            // Other images become dimmed
            item.classList.add('dimmed');
        }
    });
}

// Optional: Add keyboard support for accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && selectedImage !== null) {
        // Deselect image on Escape key
        selectedImage = null;
        const imageItems = document.querySelectorAll('.image-item');
        imageItems.forEach(item => {
            item.classList.remove('selected', 'dimmed');
        });
    }
});

// Optional: Handle window resize to maintain responsive behavior
window.addEventListener('resize', function() {
    // Ensure proper scaling on window resize
    const imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach(item => {
        if (item.classList.contains('selected')) {
            // Force a reflow to ensure proper scaling
            item.style.transform = '';
            setTimeout(() => {
                item.classList.add('selected');
            }, 10);
        }
    });
});
