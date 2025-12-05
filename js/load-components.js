// Load HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${filePath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    await loadComponent('top-nav', 'components/top-nav.html');
    await loadComponent('main-nav', 'components/main-nav.html');
    await loadComponent('course-section', 'components/course-section.html');
    await loadComponent('certificate-section', 'components/certificate.html');
    await loadComponent('footer-section', 'components/footer.html');
});
