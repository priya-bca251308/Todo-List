# Quiz App

A simple, interactive quiz application built with vanilla HTML, CSS, and JavaScript. Test your knowledge with timed questions and track your high scores!

## Features

- **Timed Questions**: Each question has a 10-second timer
- **Random Question Order**: Questions are shuffled for each quiz session
- **Score Tracking**: Keep track of your current score and high score
- **Visual Feedback**: Color-coded answers (green for correct, red for incorrect)
- **Local Storage**: High scores are saved locally in your browser
- **Responsive Design**: Works on desktop and mobile devices

## How to Play

1. Click the "Start Quiz" button to begin
2. Read each question carefully
3. Click on your chosen answer before the timer runs out
4. Watch for visual feedback on your selection
5. Complete all questions to see your final score
6. Try to beat your high score!

## Installation

1. Download or clone the repository
2. No installation required - just open `index.html` in your web browser
3. Start playing immediately!

## File Structure

```
quiz-app/
├── index.html          # Main HTML file with structure and styling
├── script.js           # JavaScript logic for quiz functionality
└── README.md          # This file
```

## Technical Details

### HTML Structure
- Clean, semantic HTML5 structure
- Responsive design with CSS Flexbox
- Accessible button elements and proper labeling

### CSS Features
- Modern styling with hover effects
- Color-coded feedback for answers
- Responsive design for all screen sizes
- Smooth transitions and animations

### JavaScript Functionality
- **Fisher-Yates Shuffle Algorithm**: Randomizes question order
- **Timer System**: 10-second countdown per question
- **Local Storage**: Persistent high score tracking
- **Event Handling**: Click events and timer management
- **DOM Manipulation**: Dynamic content updates

## Quiz Questions

The app currently includes sample questions covering:
- Basic mathematics
- Geography
- Simple calculations

### Adding New Questions

To add more questions, edit the `questions` array in `script.js`:

```javascript
const questions = [
  { 
    q: "Your question here?", 
    options: ["Option 1", "Option 2", "Option 3", "Option 4"], 
    answer: "Correct Option" 
  },
  // Add more questions...
];
