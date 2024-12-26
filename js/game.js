class Game {
	constructor() {
	    this.canvas = document.getElementById('gameCanvas');
	    this.ctx = this.canvas.getContext('2d');
	    this.board = new Board(this.ctx);
	    this.audio = new AudioManager();
	    
	    this.currentPiece = null;
	    this.score = 0;
	    this.lines = 0;
	    this.gameOver = false;
	    
	    this.dropCounter = 0;
	    this.dropInterval = 1000;
	    this.lastTime = 0;
	    
	    this.init();
	}
    
	init() {
	    this.currentPiece = createPiece();
	    this.setupControls();
	    this.update();
	}
    
	setupControls() {
	    document.addEventListener('keydown', (event) => {
		if (this.gameOver) return;
    
		switch (event.keyCode) {
		    case 37: // Left
			this.move(-1);
			break;
		    case 39: // Right
			this.move(1);
			break;
		    case 40: // Down
			this.drop();
			break;
		    case 38: // Up
			this.rotate();
			break;
		    case 32: // Space
			this.hardDrop();
			break;
		}
	    });
	}
    
	move(dir) {
	    this.currentPiece.x += dir;
	    if (this.board.collide(this.currentPiece)) {
		this.currentPiece.x -= dir;
	    } else {
		this.audio.playMove();
	    }
	}
    
	rotate() {
	    const rotated = this.currentPiece.rotate();
	    const previousShape = this.currentPiece.shape;
	    this.currentPiece.shape = rotated;
	    
	    if (this.board.collide(this.currentPiece)) {
		this.currentPiece.shape = previousShape;
	    } else {
		this.audio.playRotate();
	    }
	}
    
	drop() {
	    this.currentPiece.y++;
	    if (this.board.collide(this.currentPiece)) {
		this.currentPiece.y--;
		this.board.merge(this.currentPiece);
		this.checkLines();
		if (this.currentPiece.y === 0) {
		    this.gameOver = true;
		    document.getElementById('gameOver').style.display = 'block';
		    return;
		}
		this.currentPiece = createPiece();
	    }
	    this.dropCounter = 0;
	}
    
	hardDrop() {
	    while (!this.board.collide(this.currentPiece)) {
		this.currentPiece.y++;
	    }
	    this.currentPiece.y--;
	    this.board.merge(this.currentPiece);
	    this.checkLines();
	    this.currentPiece = createPiece();
	    this.dropCounter = 0;
	}
    
	checkLines() {
	    const linesCleared = this.board.clearLines();
	    if (linesCleared > 0) {
		this.audio.playClear();
		this.lines += linesCleared;
		this.score += this.calculateScore(linesCleared);
		this.updateScore();
	    }
	}
    
	calculateScore(linesCleared) {
	    switch (linesCleared) {
		case 1: return POINTS.SINGLE;
		case 2: return POINTS.DOUBLE;
		case 3: return POINTS.TRIPLE;
		case 4: return POINTS.TETRIS;
		default: return 0;
	    }
	}
    
	updateScore() {
	    document.getElementById('score').textContent = this.score;
	    document.getElementById('lines').textContent = this.lines;
	}
    
	draw() {
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    this.board.draw();
	    if (this.currentPiece) {
		this.currentPiece.draw(this.ctx);
	    }
	}
    
	update(time = 0) {
	    const deltaTime = time - this.lastTime;
	    this.lastTime = time;
	    this.dropCounter += deltaTime;
    
	    if (this.dropCounter > this.dropInterval) {
		this.drop();
	    }
    
	    this.draw();
	    if (!this.gameOver) {
		requestAnimationFrame(this.update.bind(this));
	    }
	}
    }
    
    // Start the game when the page loads
    window.addEventListener('load', () => {
	new Game();
    });