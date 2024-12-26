let board = new Board();
let currentPiece = null;
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let score = 0;
let lines = 0;

function updateScore(linesCleared) {
    switch (linesCleared) {
        case 1: score += POINTS.SINGLE; break;
        case 2: score += POINTS.DOUBLE; break;
        case 3: score += POINTS.TRIPLE; break;
        case 4: score += POINTS.TETRIS; break;
    }
    document.getElementById('score').textContent = score;
    document.getElementById('lines').textContent = lines;
}

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;

    if (dropCounter > dropInterval) {
        currentPiece.y++;
        dropCounter = 0;
    }

    draw();
    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    if (currentPiece) {
        currentPiece.draw();
    }
}

// Start game
currentPiece = new Piece(PIECES[0], 1);
update();