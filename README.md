# Tetro

A modern implementation of the classic Tetris game using vanilla JavaScript, HTML5 Canvas, and CSS. This project features a clean, modular codebase with a scoring system and smooth controls.

![image](https://github.com/user-attachments/assets/0a0caf99-6096-4419-8a2b-79021cbd16c3)

## Features

- 🎮 Classic Tetris gameplay mechanics
- 🎨 Colorful tetromino pieces
- 📊 Score tracking system
- ⌨️ Responsive keyboard controls
- 📱 Mobile-friendly design
- 🔄 Piece rotation system

## Demo

You can play the game [here](#) (replace with your hosted game URL)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository
```bash
git clone https://github.com/akushch1337/tetro
cd tetro
```

2. Run the index.html file and play the game!

### Direct Download
Alternatively, you can download the ZIP file and extract it to your preferred location.

## How to Play

### Controls

- ⬅️ Left Arrow: Move piece left
- ➡️ Right Arrow: Move piece right
- ⬆️ Up Arrow: Rotate piece
- ⬇️ Down Arrow: Soft drop
- Space Bar: Hard drop

### Scoring System

- Single line clear: 100 points
- Double line clear: 300 points
- Triple line clear: 500 points
- Tetris (4 lines): 800 points

## Project Structure

```
tetris/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    ├── constants.js     # Game configuration and constants
    ├── piece.js        # Tetromino piece logic
    ├── board.js        # Game board management
    ├── audio.js        # Sound effects handling
    └── game.js         # Main game loop and controls
```

## Technical Implementation

### Core Components

- **Board**: Manages the game grid and collision detection
- **Piece**: Handles tetromino movement and rotation
- **Game**: Controls the main game loop and user input
- **Audio**: Manages sound effects
- **Constants**: Stores game configuration

### Technologies Used

- HTML5 Canvas for rendering
- Vanilla JavaScript (ES6+)
- CSS3 for styling
- Web Audio API for sound effects

## Development

### Building from Source

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m 'Add some amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## Future Enhancements

- [ ] High score system with local storage
- [ ] Next piece preview
- [ ] Hold piece functionality
- [ ] Ghost piece showing where the piece will land
- [ ] Level system with increasing difficulty
- [ ] Mobile touch controls
- [ ] Customizable colors and themes
- [ ] Multiple game modes
