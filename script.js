const projects = [
    {
        title: "Book Preview",
        image: "images/book-preview.png",
        description: "Dive into the delightful world of Book Connect, where literary adventures await at your fingertips! Browse, explore, and uncover your next great read from a vast, vibrant collection. Whether you're a fan of thrilling mysteries, epic fantasies, or heartwarming romances, Book Connect brings the magic of books directly to you. Happy reading! Used: CSS, JavaScript, HTML",
        link: "https://github.com/Robyn011/ROBPAU428_wfc2401_GroupB_Robyn-Paulsen_DJS04/tree/main"
    },
    {
        title: "Whole Number Divider",
        image: "images/Basic-calulation.png",
        description: "Upon inputting two numbers (dividend and divider) and a button to perform the calculation (e.g, 20 divided by 10).The application correctly displays the whole number result. Used: CSS, JavaScript, HTML",
        link: "https://github.com/Robyn011/ROBPAU428_wfc2401_GroupB_Robyn-Paulsen_DJS02.git"
    },
    {
        title: "Escape Vanilla JS Challenge",
        image: "images/[JSL10 Solution].gif",
        description: "You will navigate through three themed rooms, each presenting a unique challenge that requires them to debug and correct given JavaScript code to proceed. This adventure is themed around escaping the confines of Vanilla JavaScript to advance towards learning React. Used: CSS, JavaScript, HTML",
        link: "https://github.com/Robyn011/Module_10_ROBPAU428_wfc2401_GroupB_Robyn-Paulsen_JSL10"
    }
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    
    const title = document.createElement('h2');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = "Learn More";
    
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    
    return card;
}

// Function to initialize portfolio
function initializePortfolio() {
    const projectsContainer = document.getElementById('projects');
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });
}

// Initialize portfolio when page loads
document.addEventListener('DOMContentLoaded', initializePortfolio);

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button when scrolling
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (window.scrollY > 0) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});