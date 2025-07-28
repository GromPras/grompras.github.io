// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Add floating effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Add floating effect to service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Form validation and submission
if (document.getElementById('project-intake-form')) {
  document.getElementById('project-intake-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--red)';
        isValid = false;
      } else {
        field.style.borderColor = 'var(--bg3)';
      }
    });
    
    if (isValid) {
      // Demo mode message
      alert('Demo Mode: Form submission successful! In production, this would send your information to the server. For real inquiries, please use LinkedIn or GitHub links provided above.');
      // this.reset(); // Uncomment to reset form after submission
    } else {
      alert('Please fill in all required fields.');
    }
  });
  
  // Remove error styling when user starts typing
  document.querySelectorAll('.form-input, .form-textarea').forEach(field => {
    field.addEventListener('input', function() {
      this.style.borderColor = 'var(--bg3)';
    });
  });
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileNav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Initialize animations
window.addEventListener("load", () => {
  // Add any additional initialization here
  document.body.style.opacity = "1";
});
