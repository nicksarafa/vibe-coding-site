// Smooth scrolling function with enhanced effects
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Add scroll effect particles
    createScrollParticles();

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Create particle explosion effect
function createScrollParticles() {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
  ];

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${Math.random() * window.innerWidth}px;
      top: ${Math.random() * window.innerHeight}px;
      animation: particleExplosion 1s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Add particle explosion animation
const particleStyles = document.createElement("style");
particleStyles.textContent = `
  @keyframes particleExplosion {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(360deg) translate(${
        Math.random() * 200 - 100
      }px, ${Math.random() * 200 - 100}px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyles);

// Enhanced countdown timer with crazy effects
function updateCountdown() {
  // Set the target date: August 20th, 2024 at 6:00 PM Lisbon time
  const targetDate = new Date("2024-08-20T18:00:00+01:00"); // Lisbon timezone (UTC+1)
  const now = new Date();

  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown display with animation
    updateCountdownElement("days", days);
    updateCountdownElement("hours", hours);
    updateCountdownElement("minutes", minutes);
    updateCountdownElement("seconds", seconds);

    // Add pulse effect when seconds change
    if (seconds % 10 === 0) {
      createCountdownPulse();
    }
  } else {
    // Workshop has started or ended
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    // Update the countdown message
    const countdownElement = document.querySelector(".countdown h3");
    if (countdownElement) {
      countdownElement.textContent = "Workshop is Live!";
      countdownElement.style.animation = "pulse 1s ease-in-out infinite";
    }
  }
}

// Enhanced countdown element update with animation
function updateCountdownElement(id, value) {
  const element = document.getElementById(id);
  const newValue = value.toString().padStart(2, "0");

  if (element.textContent !== newValue) {
    element.style.transform = "scale(1.2)";
    element.style.color = "#ff6b6b";

    setTimeout(() => {
      element.textContent = newValue;
      element.style.transform = "scale(1)";
      element.style.color = "white";
    }, 150);
  }
}

// Create countdown pulse effect
function createCountdownPulse() {
  const countdown = document.querySelector(".countdown");
  countdown.style.animation = "none";
  setTimeout(() => {
    countdown.style.animation = "countdownPulse 0.5s ease-in-out";
  }, 10);
}

// Enhanced registration form with crazy effects
function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const experience = document.getElementById("experience").value;

  // Basic validation
  if (!name || !email || !experience) {
    showNotification("Please fill in all fields", "error");
    createFormShake();
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error");
    createFormShake();
    return;
  }

  // Create success explosion
  createSuccessExplosion();

  // Simulate registration process
  showNotification("Processing your registration...", "info");

  // Simulate API call
  setTimeout(() => {
    showNotification(
      "Registration successful! Check your email for confirmation.",
      "success"
    );

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("experience").value = "";

    // You can add actual form submission logic here
    console.log("Registration data:", { name, email, experience });
  }, 2000);
}

// Create form shake effect
function createFormShake() {
  const form = document.querySelector(".register-form");
  form.style.animation = "shake 0.5s ease-in-out";
  setTimeout(() => {
    form.style.animation = "";
  }, 500);
}

// Create success explosion effect
function createSuccessExplosion() {
  const colors = ["#10b981", "#4ecdc4", "#45b7d1", "#96ceb4"];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: 50%;
      top: 50%;
      animation: successExplosion 1.5s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1500);
  }
}

// Add shake and success explosion animations
const formAnimations = document.createElement("style");
formAnimations.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
  
  @keyframes successExplosion {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(720deg) translate(${
        Math.random() * 300 - 150
      }px, ${Math.random() * 300 - 150}px);
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes countdownPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(formAnimations);

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced notification system with crazy effects
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${getNotificationIcon(type)}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add enhanced styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${getNotificationColor(type)};
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 400px;
    animation: enhancedSlideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
  `;

  // Add to page
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "enhancedSlideOut 0.5s ease-in-out";
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 500);
    }
  }, 5000);
}

function getNotificationIcon(type) {
  switch (type) {
    case "success":
      return "fa-check-circle";
    case "error":
      return "fa-exclamation-circle";
    case "warning":
      return "fa-exclamation-triangle";
    default:
      return "fa-info-circle";
  }
}

function getNotificationColor(type) {
  switch (type) {
    case "success":
      return "linear-gradient(45deg, #10b981, #34d399)";
    case "error":
      return "linear-gradient(45deg, #ef4444, #f87171)";
    case "warning":
      return "linear-gradient(45deg, #f59e0b, #fbbf24)";
    default:
      return "linear-gradient(45deg, #667eea, #8b5cf6)";
  }
}

// Add enhanced notification animations
const enhancedNotificationStyles = document.createElement("style");
enhancedNotificationStyles.textContent = `
  @keyframes enhancedSlideIn {
    from {
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes enhancedSlideOut {
    from {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateX(100%) scale(0.8);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }
  
  .notification-close:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;
document.head.appendChild(enhancedNotificationStyles);

// Enhanced intersection observer for animations
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        // Add entrance animation
        entry.target.style.animation =
          "enhancedEntrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .timeline-item, .register-container"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });
}

// Enhanced parallax effect for floating elements
function setupParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll(".floating-element");

    floatingElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.15;
      const yPos = -(scrolled * speed);
      const xPos = Math.sin(scrolled * 0.01 + index) * 20;
      element.style.transform = `translateY(${yPos}px) translateX(${xPos}px) rotate(${
        scrolled * 0.1 + index * 45
      }deg)`;
    });
  });
}

// Enhanced form input animations
function setupFormAnimations() {
  const inputs = document.querySelectorAll(
    ".form-group input, .form-group select"
  );

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.transform = "scale(1.02)";
      input.parentElement.style.boxShadow = "0 0 30px rgba(255, 107, 107, 0.3)";

      // Create focus particles
      createFocusParticles(input);
    });

    input.addEventListener("blur", () => {
      input.parentElement.style.transform = "scale(1)";
      input.parentElement.style.boxShadow = "none";
    });
  });
}

// Create focus particles
function createFocusParticles(element) {
  const rect = element.getBoundingClientRect();
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1"];

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${rect.left + Math.random() * rect.width}px;
      top: ${rect.top + Math.random() * rect.height}px;
      animation: focusParticle 1s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Add focus particle animation
const focusParticleStyles = document.createElement("style");
focusParticleStyles.textContent = `
  @keyframes focusParticle {
    0% {
      transform: scale(0) translateY(0);
      opacity: 1;
    }
    100% {
      transform: scale(1) translateY(-50px);
      opacity: 0;
    }
  }
  
  @keyframes enhancedEntrance {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.8) rotate(-5deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1) rotate(0deg);
    }
  }
`;
document.head.appendChild(focusParticleStyles);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Start countdown timer
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Setup animations and effects
  setupAnimations();
  setupParallax();
  setupFormAnimations();

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });

  // Add loading animation
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
    createWelcomeExplosion();
  }, 100);
});

// Create welcome explosion effect
function createWelcomeExplosion() {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
  ];

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: fixed;
      width: 6px;
      height: 6px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: 50%;
      top: 50%;
      animation: welcomeExplosion 2s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 2000);
  }
}

// Add welcome explosion animation
const welcomeExplosionStyles = document.createElement("style");
welcomeExplosionStyles.textContent = `
  @keyframes welcomeExplosion {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(720deg) translate(${
        Math.random() * 400 - 200
      }px, ${Math.random() * 400 - 200}px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(welcomeExplosionStyles);

// Enhanced interactive hover effects
document.addEventListener("DOMContentLoaded", function () {
  // Add enhanced hover effects to feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-20px) scale(1.05) rotate(2deg)";
      this.style.boxShadow = "0 30px 80px rgba(255, 107, 107, 0.3)";

      // Create hover particles
      createHoverParticles(this);
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1) rotate(0deg)";
      this.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.1)";
    });
  });

  // Add enhanced click effects to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create enhanced ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: enhancedRipple 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    });
  });
});

// Create hover particles
function createHoverParticles(element) {
  const rect = element.getBoundingClientRect();
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1"];

  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${rect.left + Math.random() * rect.width}px;
      top: ${rect.top + Math.random() * rect.height}px;
      animation: hoverParticle 1s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Add hover particle animation
const hoverParticleStyles = document.createElement("style");
hoverParticleStyles.textContent = `
  @keyframes hoverParticle {
    0% {
      transform: scale(0) translateY(0);
      opacity: 1;
    }
    100% {
      transform: scale(1) translateY(-30px);
      opacity: 0;
    }
  }
  
  @keyframes enhancedRipple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(hoverParticleStyles);

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.style.cssText = `
    position: fixed;
    width: 4px;
    height: 4px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    animation: mouseTrail 1s ease-out forwards;
  `;

  document.body.appendChild(trail);
  mouseTrail.push(trail);

  setTimeout(() => {
    if (trail.parentElement) {
      trail.remove();
    }
    mouseTrail = mouseTrail.filter((t) => t !== trail);
  }, 1000);
});

// Add mouse trail animation
const mouseTrailStyles = document.createElement("style");
mouseTrailStyles.textContent = `
  @keyframes mouseTrail {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(mouseTrailStyles);
