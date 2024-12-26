let board = new Board();
let currentPiece = null;
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

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