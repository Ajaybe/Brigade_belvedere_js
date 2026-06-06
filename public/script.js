// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Download Brochure
function downloadBrochure() {
    alert('Brochure download will be available soon. Please contact us for more information.');
    // In production, this would trigger a PDF download
    // window.open('/path/to/brochure.pdf', '_blank');
}

// Scroll to Contact
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Lead form and EOI Pop-up
let popupTriggered = false;

window.addEventListener('scroll', () => {
  // Calculate how far down the user has scrolled
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (window.scrollY / scrollTotal) * 100;

  // Trigger if scrolled past 10% and hasn't opened yet
  if (scrollPercent > 10 && !popupTriggered ) {
    document.getElementById('scrollPopup').style.display = 'flex';
    popupTriggered = true;
}
});

// Function to close the popup
function closePopup() {
  document.getElementById('scrollPopup').style.display = 'none';
}


// Floor Plans Tabs
function showFloorPlan(planId) {
    // Remove active class from all tabs and plans
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.floor-plan-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to selected tab and plan
    event.target.classList.add('active');
    document.getElementById(planId).classList.add('active');
}

// Gallery Lightbox
const galleryImages = [
    '/gallery/glr1.jpg',
    '/gallery/glr2.jpg',
    '/gallery/glr3.jpg',
    '/gallery/glr4.jpg',
    '/gallery/glr5.jpg',
    '/gallery/Living_area.jpg'
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    document.getElementById('lightbox-img').src = galleryImages[currentImageIndex];
}

// Close lightbox on clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.textContent = '';
    });
});
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyF69VQ1WzwbE7M0kHv3-NsT960P4KepD7WuUNgU23Kt0phGG0ExCX6_Ja7aqd7x0lz/exec';

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const isValid = validateForm();
            if (!isValid) {
                return; // Stop submission if fields are invalid
            }
            
            // Convert form elements to URL query parameters for safer processing
            var formData = new URLSearchParams(new FormData(form));

            // adding checkbox check (optional)
            var authorize = document.getElementById("authorize").checked;

            if(authorize) {
                formData.set("authorize", "Yes");
            } else {
                formData.set("authorize", "No");
            }

            fetch(scriptURL, {
                method: "POST", 
                body: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then((response) => {
                swal("Done", "Submitted Successfully.", "success");
                form.reset();
            })
            .catch((error) => {
                swal("Error", "Something went wrong. please try again!", "error");
            });
    });

     // Validate Form data
    function validateForm() {

    // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate name
    if (name.length < 2) {
        document.getElementById('name-error').textContent = 'Please enter a valid name';
        return false;
    } else {
        return true;
    }
    
    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
        return false;
    } else {
        return true;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        return false;
    } else {
        return true;
    }
};

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});