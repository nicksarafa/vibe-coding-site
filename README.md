# Vibe Coding Workshop Website

A beautiful, modern website for advertising your Vibe Coding Workshop on Wednesday, August 20th at 6pm Lisbon time.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: 
  - Floating animated coding icons
  - Smooth scrolling navigation
  - Countdown timer to workshop start
  - Interactive registration form
  - Hover effects and animations
- **Real-time Countdown**: Live countdown timer showing days, hours, minutes, and seconds until the workshop
- **Form Validation**: Email validation and user-friendly notifications
- **Beautiful Animations**: Scroll-triggered animations and parallax effects

## 📁 File Structure

```
vibe-coding-site/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Highlights

- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)
- **Typography**: Inter font family for modern readability
- **Icons**: Font Awesome icons throughout
- **Layout**: Grid-based responsive design
- **Effects**: Glassmorphism, shadows, and smooth transitions

## 🛠️ How to Use

1. **Open the Website**: Simply open `index.html` in any modern web browser
2. **Local Development**: You can serve the files using any local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with workshop details
2. **About Section**: What participants will experience
3. **Schedule Section**: Detailed timeline of the workshop
4. **Registration Section**: Form to collect participant information
5. **Footer**: Links and social media connections

## ⚙️ Customization

### Changing the Date/Time
Edit the countdown timer in `script.js`:
```javascript
const targetDate = new Date('2024-08-20T18:00:00+01:00'); // Change this line
```

### Updating Colors
Modify the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Content
- **Workshop Details**: Update the event cards in the hero section
- **Schedule**: Modify the timeline items in the schedule section
- **Features**: Add or remove feature cards in the about section

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Cross-browser Compatible**: Works in all modern browsers
- **Performance Optimized**: Minimal file sizes and efficient animations
- **SEO Friendly**: Semantic HTML structure

## 📧 Form Integration

The registration form currently shows a success message. To integrate with a real backend:

1. Replace the `register()` function in `script.js`
2. Add your form submission logic
3. Update the success/error handling

Example backend integration:
```javascript
async function register() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        experience: document.getElementById('experience').value
    };
    
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showNotification('Registration successful!', 'success');
        } else {
            showNotification('Registration failed. Please try again.', 'error');
        }
    } catch (error) {
        showNotification('Network error. Please try again.', 'error');
    }
}
```

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to customize and improve this website for your specific needs!

---

**Workshop Details:**
- **Date**: Wednesday, August 20th, 2024
- **Time**: 6:00 PM Lisbon Time
- **Duration**: 2 Hours
- **Location**: Online (Virtual Workshop)

Get ready for an amazing coding experience! 🚀
