// Menu Icon Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Section
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /* Sticky Navbar */
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Theme Toggle (Multiple Themes)
let darkModeIcon = document.querySelector('#darkMode-icon');

// Themes to loop through
const themes = ['light-mode', 'dark-mode', 'blue-mode', 'green-mode', 'purple-mode', 'red-mode', 'yellow-mode'];
let currentThemeIndex = 0;

darkModeIcon.addEventListener('click', () => {
  // Remove the current theme
  document.body.classList.remove(themes[currentThemeIndex]);

  // Update to the next theme index
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Add the new theme class
  document.body.classList.add(themes[currentThemeIndex]);

  // Toggle the icon between sun and moon based on the theme
  if (currentThemeIndex === 1) {
    darkModeIcon.classList.add('bx-sun');
    darkModeIcon.classList.remove('bx-brightness-half');
  } else {
    darkModeIcon.classList.add('bx-brightness-half');
    darkModeIcon.classList.remove('bx-sun');
  }
});


// scroll reveal
 ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay:200 
});

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });
ScrollReveal().reveal(
  ".home-img img, .services-container, .project-card, .recommend-wrapper, .contact form,.certificate,.timeline-item",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img img,.certificate-item img",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".home-content h3, .home-content p, .about-content",
  { origin: "right" }
);







// Define the project data---------------------------------------------------------------------------------------





// Define recommendation data in an array of objects---------------------------------------------------------
const recommendations = [
  {
    name: "Vikas Singh",
    image: "avatar.png", // You can change this to a dynamic URL if needed
    description: "Vikas Singh is a skilled Flutter app developer with expertise in creating high-performance, cross-platform mobile applications. Passionate about delivering seamless user experiences and innovative solutions, he excels in transforming ideas into functional and visually appealing apps."
  },
  {
    name: "Pradeep",
    image: "avatar.png", // You can change this to a dynamic URL if needed
    description: "Pradeep is a talented MERN stack developer specializing in building dynamic, full-stack web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, he is passionate about creating scalable, efficient, and user-friendly solutions that bring ideas to life."
  },
  {
    name: "Rishab & Prince",
    image: "avatar.png", // You can change this to a dynamic URL if needed
    description: "Rishab and Prince are visionary entrepreneurs leading their own startup, focused on innovative solutions that address real-world challenges. With a strong commitment to excellence and creativity, they are building a brand that blends technology and strategy to deliver impactful results."
  }
];

// Function to generate the HTML for each recommendation
function generateRecommendations() {
  const recommendationsContainer = document.getElementById('recommendations');
  
  recommendations.forEach(rec => {
    const slide = document.createElement('div');
    slide.classList.add('recommend-slide', 'swiper-slide');

    slide.innerHTML = `
      <img src="${rec.image}" alt="${rec.name}">
      <h3>${rec.name}</h3>
      <p>${rec.description}</p>
    `;

    recommendationsContainer.appendChild(slide);
  });
}

// Call the function to generate the recommendations when the page loads
window.onload = generateRecommendations;


// Contact Form---------------------------------------------------------------------------------
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Construct the email body
  const emailBody = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`;

  // Create a mailto link
  const mailtoUrl = `mailto:adityasharmarut7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  // Open the mail client
  window.location.href = mailtoUrl;
}