# Timer Application
---
link: [click here to view the live demo](https://timer-rho-seven.vercel.app/)

A sleek, modern stopwatch application built with vanilla HTML, CSS, and JavaScript. Start timing your activities with an intuitive interface and smooth performance.

## Features

- **Start Timer**: Begin counting seconds instantly
- **Stop Timer**: Pause the timer at any moment without resetting
- **Reset Timer**: Clear the counter and start fresh from zero
- **Get Time**: Capture and display the current elapsed time as a saved record
- **Clear Time**: Remove all saved time records from the display

## Getting Started

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `Timer.html` in your web browser

No additional dependencies or build tools required—it's ready to use immediately.

## Project Structure

```
Timer/
├── Timer.html           # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Styling and animations
│   └── js/
│       └── script.js   # Timer logic and event handlers
└── README.md           # Documentation
```

## Usage

1. **Click Start** to begin the timer
2. **Click Stop** to pause (the timer can be resumed by clicking Start again)
3. **Click Reset** to clear the counter and stop the timer
4. **Click GetTime** to save the current time value
5. **Click ClearTime** to remove all saved time records

## Design

- **Color Scheme**: Dark theme with vibrant lime accents for a modern look
- **Typography**: Large, easy-to-read display numbers (up to 6rem on desktop)
- **Responsive**: Optimized for both desktop and mobile devices (screens ≤ 420px)
- **Hover Effects**: Interactive button feedback with glowing effects

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox layout, media queries, and shadow effects
- **Vanilla JavaScript**: Event-driven timer logic with no external libraries

## Browser Compatibility

Works on all modern browsers supporting ES6 JavaScript:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## How It Works

The timer operates by:
1. Using `setInterval()` to increment the counter every 1000ms (1 second)
2. Dynamically updating the DOM to reflect the current time
3. Managing intervals with `clearInterval()` for stop/reset functionality
4. Creating and appending paragraph elements to store time snapshots

## License

Free to use and modify for personal and commercial projects.

## Future Enhancements

- Add millisecond precision display
- Include lap/split time functionality
- Implement timer presets (e.g., 5 min, 10 min)
- Add sound notifications
- Dark/light theme toggle
