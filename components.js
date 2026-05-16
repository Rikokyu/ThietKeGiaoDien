// Load Header and Footer Components
async function loadComponents() {
    try {
        // Load Header
        const headerResponse = await fetch('header.html');
        if (!headerResponse.ok) {
            throw new Error(`Failed to load header: ${headerResponse.status}`);
        }
        const headerContent = await headerResponse.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerContent;
            setActiveNav();
            initHeaderScroll();
        }

        // Load Footer
        const footerResponse = await fetch('footer.html');
        if (!footerResponse.ok) {
            throw new Error(`Failed to load footer: ${footerResponse.status}`);
        }
        const footerContent = await footerResponse.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerContent;
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Set active nav link based on current page
function setActiveNav() {
    // Get current page filename - handles both file:// protocol and http://
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // If pathname is empty or just '/', default to index.html
    if (!currentPage || currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to matching link
        // Compare the href with currentPage exactly
        if (href === currentPage) {
            link.classList.add('active');
        }
        // Also handle index.html as default for home page
        else if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Initialize header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
