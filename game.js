const EMPTY = 0;
const SUN = 1;
const MOON = 2;

const SYMBOLS = {
    [EMPTY]: '',
    [SUN]: '☀️',
    [MOON]: '🌑'
};

const LEVELS = [
    {
        id: 1,
        name: "Puzzle #1",
        size: 4,
        hints: 4,
        initial: [
            [SUN, EMPTY, EMPTY, EMPTY],
            [EMPTY, MOON, EMPTY, EMPTY],
            [EMPTY, EMPTY, SUN, EMPTY],
            [EMPTY, EMPTY, EMPTY, SUN],
        ],
        solution: [
            [SUN, MOON, SUN, MOON],
            [SUN, MOON, MOON, SUN],
            [MOON, SUN, SUN, MOON],
            [MOON, SUN, MOON, SUN],
        ],
        operations: [
            {
                type: "=",
                cell1: { row: 0, col: 1 },
                cell2: { row: 1, col: 1 }
            },
            {
                type: "x",
                cell1: { row: 1, col: 0 },
                cell2: { row: 1, col: 1 }
            },
            {
                type: "=",
                cell1: { row: 2, col: 1 },
                cell2: { row: 3, col: 1 }
            },
            {
                type: "x",
                cell1: { row: 1, col: 3 },
                cell2: { row: 2, col: 3 }
            },
        ]
    },
    {
        id: 2,
        name: "Puzzle #2",
        size: 4,
        hints: 2,
        initial: [
            [SUN, SUN, EMPTY, MOON],
            [EMPTY, MOON, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY],
            [MOON, EMPTY, EMPTY, SUN],
        ],
        solution: [
            [SUN, SUN, MOON, MOON],
            [MOON, MOON, SUN, SUN],
            [SUN, MOON, SUN, MOON],
            [MOON, SUN, MOON, SUN],
        ],
        operations: [
            {
                type: "x",
                cell1: { row: 0, col: 1 },
                cell2: { row: 0, col: 2 }
            },
            {
                type: "=",
                cell1: { row: 1, col: 1 },
                cell2: { row: 2, col: 1 }
            },
            {
                type: "=",
                cell1: { row: 1, col: 2 },
                cell2: { row: 2, col: 2 }
            },
            {
                type: "=",
                cell1: { row: 1, col: 0 },
                cell2: { row: 1, col: 1 }
            }
        ]
    },
    {
        id: 3,
        name: "Puzzle #3",
        size: 4,
        hints: 1,
        initial: [
            [EMPTY, SUN, EMPTY, EMPTY],
            [MOON, EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, SUN],
            [EMPTY, EMPTY, MOON, EMPTY],
        ],
        solution: [
            [MOON, SUN, SUN, MOON],
            [MOON, MOON, SUN, SUN],
            [SUN, MOON, MOON, SUN],
            [SUN, SUN, MOON, MOON],
        ],
        operations: [
            {
                type: "=",
                cell1: { row: 0, col: 0 },
                cell2: { row: 1, col: 0 }
            },
            {
                type: "x",
                cell1: { row: 0, col: 2 },
                cell2: { row: 0, col: 3 }
            },
            {
                type: "x",
                cell1: { row: 2, col: 1 },
                cell2: { row: 3, col: 1 }
            },
            {
                type: "=",
                cell1: { row: 2, col: 2 },
                cell2: { row: 3, col: 2 }
            },
            {
                type: "=",
                cell1: { row: 3, col: 2 },
                cell2: { row: 3, col: 3 }
            }
        ]
    },
    {
        id: 4,
        name: "Puzzle #4",
        size: 6,
        hints: 3,
        initial: [
            [SUN,  EMPTY, EMPTY, EMPTY, MOON, EMPTY],
            [EMPTY, MOON, EMPTY, SUN,  EMPTY, EMPTY],
            [EMPTY, EMPTY, SUN,  EMPTY, EMPTY, MOON],
            [MOON, EMPTY, EMPTY, SUN,  EMPTY, EMPTY],
            [EMPTY, SUN,  EMPTY, EMPTY, MOON, EMPTY],
            [EMPTY, EMPTY, MOON, EMPTY, EMPTY, SUN]
        ],
        solution: [
            [SUN,  MOON, SUN, MOON,  MOON, SUN],
            [SUN, MOON, MOON,  SUN,  SUN,  MOON],
            [MOON,  SUN,  SUN,  MOON, SUN, MOON],
            [MOON, MOON, SUN, SUN,  MOON,  SUN],
            [SUN,  SUN,  MOON, SUN, MOON, MOON],
            [MOON, SUN,  MOON, MOON,  SUN,  SUN]
            ],
        operations: [
            {
                type: "=",
                cell1: { row: 0, col: 1 },
                cell2: { row: 1, col: 1 }
            },
            {
                type: "x",
                cell1: { row: 1, col: 2 },
                cell2: { row: 1, col: 3 }
            },
            {
                type: "x",
                cell1: { row: 2, col: 2 },
                cell2: { row: 2, col: 3 }
            },
            {
                type: "x",
                cell1: { row: 3, col: 3 },
                cell2: { row: 3, col: 4 }
            },
            {
                type: "=",
                cell1: { row: 4, col: 4 },
                cell2: { row: 4, col: 5 }
            },
            {
                type: "x",
                cell1: { row: 5, col: 0 },
                cell2: { row: 5, col: 1 }
            },
            {
                type: "x",
                cell1: { row: 0, col: 4 },
                cell2: { row: 0, col: 5 }
            },
            {
                type: "x",
                cell1: { row: 2, col: 4 },
                cell2: { row: 3, col: 4 }
            }
        ]
    },
    {
        id: 5,
        name: "Puzzle #5",
        size: 6,
        hints: 4,
        initial: [
            [SUN, EMPTY, EMPTY, SUN, SUN, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, MOON],
            [EMPTY, SUN, EMPTY, SUN, MOON, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY, MOON, EMPTY],
            [SUN, SUN, EMPTY, EMPTY, EMPTY, EMPTY]
        ],
        operations: [
            // Horizontal operations (=)
            {
                type: 'x',
                cell1: { row: 0, col: 0 },
                cell2: { row: 0, col: 1 }
            },
            {
                type: 'x',
                cell1: { row: 2, col: 1 },
                cell2: { row: 2, col: 2 }
            },
        ],
        solution: [
            [SUN, MOON, MOON, SUN, SUN, MOON],
            [MOON, SUN, SUN, MOON, MOON, SUN],
            [SUN, MOON, SUN, MOON, SUN, MOON],
            [MOON, SUN, MOON, SUN, MOON, SUN],
            [MOON, MOON, SUN, SUN, MOON, SUN],
            [SUN, SUN, MOON, MOON, SUN, MOON]
        ]
    },
    {
        id: 5,
        name: "Puzzle #6",
        size: 6,
        hints: 4,
        initial: [
            [MOON, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
            [EMPTY, SUN, EMPTY, SUN, EMPTY, EMPTY],
            [EMPTY, MOON, EMPTY, SUN, SUN, EMPTY],
            [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, MOON, EMPTY, EMPTY, SUN],
            [EMPTY, SUN, EMPTY, EMPTY, EMPTY, EMPTY],
        ],
        operations: [
            {
                type: 'x',
                cell1: { row: 0, col: 5 },
                cell2: { row: 1, col: 5 }
            },
            {
                type: 'x',
                cell1: { row: 4, col: 5 },
                cell2: { row: 5, col: 5 }
            },
            {
                type: '=',
                cell1: { row: 3, col: 1 },
                cell2: { row: 3, col: 2 }
            },
        ],
        solution: [
            [MOON, MOON, SUN, MOON, SUN, SUN],
            [SUN, SUN, MOON, SUN, MOON, MOON],
            [SUN, MOON, MOON, SUN, SUN, MOON],
            [MOON, SUN, SUN, MOON, MOON, SUN],
            [SUN, MOON, MOON, SUN, MOON, SUN],
            [MOON, SUN, SUN, MOON, SUN, MOON],
        ]
    },
    {
        id: 6,
        name: "Puzzle #7",
        size: 6,
        hints: 4,
        initial: [
            [MOON, EMPTY, MOON, EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, SUN, EMPTY, MOON, EMPTY],
            [SUN, EMPTY, EMPTY, EMPTY, EMPTY, SUN],
            [MOON, EMPTY, MOON, EMPTY, EMPTY, EMPTY],
            [EMPTY, MOON, EMPTY, EMPTY, EMPTY, SUN],
            [EMPTY, MOON, EMPTY, SUN, EMPTY, EMPTY],
        ],
        operations: [
            {
                type: 'x',
                cell1: { row: 0, col: 1 },
                cell2: { row: 0, col: 2 }
            },
            {
                type: 'x',
                cell1: { row: 2, col: 4 },
                cell2: { row: 2, col: 5 }
            },
            {
                type: 'x',
                cell1: { row: 3, col: 4 },
                cell2: { row: 4, col: 4 }
            },
            {
                type: 'x',
                cell1: { row: 4, col: 1 },
                cell2: { row: 4, col: 2 }
            },
        ],
        solution: [
            [MOON, SUN, MOON, SUN, SUN, MOON],
            [MOON, SUN, SUN, MOON, MOON, SUN],
            [SUN, MOON, SUN, MOON, MOON, SUN],
            [MOON, SUN, MOON, SUN, SUN, MOON],
            [SUN, MOON, SUN, MOON, MOON, SUN],
            [SUN, MOON, MOON, SUN, SUN, MOON],
        ]
    },
];

class TangoGame {
    constructor() {
        this.board = [];
        this.moves = [];
        this.timer = 0;
        this.timerInterval = null;
        this.hintsRemaining = 0;
        
        this.initializeUI();
        this.loadLevel(0);
        this.startTimer();
    }

    initializeUI() {
        // Initialize level select
        const select = document.getElementById('levelSelect');
        LEVELS.forEach((level, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${level.name}`;
            select.appendChild(option);
        });

        // Add event listeners
        select.addEventListener('change', e => this.loadLevel(e.target.value));
        document.getElementById('clearBtn').addEventListener('click', () => this.clear());
        document.getElementById('helpBtn').addEventListener('click', () => this.showHelp());
        document.getElementById('undoBtn').addEventListener('click', () => this.undo());
        document.getElementById('playBtn').addEventListener('click', () => this.checkSolution());
        document.getElementById('randomBtn').addEventListener('click', () => this.loadRandomLevel());
        document.getElementById('hintBtn').addEventListener('click', () => this.showHint());
        this.updateHintButton();
    }

    loadLevel(index) {
        this.currentLevel = LEVELS[index];
        this.hintsRemaining = this.currentLevel.hints;
        this.updateHintButton();
        // Create a fresh board with all cells empty except initial values
        this.board = Array(this.currentLevel.size).fill().map((_, i) => 
            Array(this.currentLevel.size).fill().map((_, j) => 
                this.currentLevel.initial[i][j] === EMPTY ? EMPTY : this.currentLevel.initial[i][j]
            )
        );
        this.moves = [];
        this.resetTimer();
        this.render();
    }

    loadRandomLevel() {
        const randomIndex = Math.floor(Math.random() * LEVELS.length);
        this.loadLevel(randomIndex);
    }

    render() {
        // Update puzzle name
        document.getElementById('puzzleName').textContent = this.currentLevel.name;

        // Render board
        const board = document.getElementById('board');
        board.innerHTML = '';
        board.style.gridTemplateColumns = `repeat(${this.currentLevel.size}, minmax(0, 1fr))`;
        board.style.width = `${this.currentLevel.size * 80}px`;

        // Create cells
        for (let i = 0; i < this.currentLevel.size; i++) {
            for (let j = 0; j < this.currentLevel.size; j++) {
                const cell = document.createElement('div');
                const isInitial = this.currentLevel.initial[i][j] !== EMPTY;
                cell.className = `cell bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer relative rounded-xl shadow-sm ${isInitial ? 'initial bg-slate-50 font-semibold' : ''}`;
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = SYMBOLS[this.board[i][j]];
                cell.addEventListener('click', () => this.makeMove(i, j));
                board.appendChild(cell);
            }
        }

        // Render operations
        this.currentLevel.operations.forEach(op => {
            const cell1Index = op.cell1.row * this.currentLevel.size + op.cell1.col;
            const cell2Index = op.cell2.row * this.currentLevel.size + op.cell2.col;
            const cell1 = board.children[cell1Index];
            
            const opEl = document.createElement('div');
            opEl.className = 'operation absolute font-bold text-slate-700';
            opEl.textContent = op.type;

            const isHorizontal = op.cell1.row === op.cell2.row;
            if (isHorizontal) {
                opEl.style.left = '100%';
                opEl.style.top = '50%';
                opEl.style.transform = 'translate(-50%, -50%)';
                opEl.style.zIndex = '10';
                opEl.style.padding = '13px';
                opEl.style.fontSize = '18px';
            } else {
                opEl.style.left = '50%';
                opEl.style.top = '100%';
                opEl.style.transform = 'translate(-50%, -50%)';
                opEl.style.zIndex = '10';
                opEl.style.padding = '13px';
                opEl.style.fontSize = '18px';
            }

            cell1.appendChild(opEl);
        });

        // Always show errors (checkbox is hidden and checked by default)
        this.showErrors();
    }

    makeMove(row, col) {
        // Allow clicking if it's not an initial filled cell
        const isInitialCell = this.currentLevel.initial[row][col] !== EMPTY;
        if (isInitialCell) return;

        const oldValue = this.board[row][col];
        if (oldValue === EMPTY) this.board[row][col] = SUN;
        else if (oldValue === SUN) this.board[row][col] = MOON;
        else this.board[row][col] = EMPTY;

        this.moves.push({ row, col, oldValue });
        this.render();

        // Add pop animation to the changed cell
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add('pop');
        setTimeout(() => cell.classList.remove('pop'), 300);

        // Check for win after each move
        this.checkWinCondition();
    }

    undo() {
        if (this.moves.length === 0) return;
        
        const move = this.moves.pop();
        this.board[move.row][move.col] = move.oldValue;
        this.render();
    }

    clear() {
        for (let i = 0; i < this.currentLevel.size; i++) {
            for (let j = 0; j < this.currentLevel.size; j++) {
                if (this.board[i][j] !== this.currentLevel.initial[i][j]) {
                    this.board[i][j] = EMPTY;
                }
            }
        }
        this.moves = [];
        this.render();
    }

    showErrors() {
        const errors = this.findErrors();
        const board = document.getElementById('board');

        // Reset all cells
        board.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('bg-red-50', 'hover:bg-red-100', 'bg-white', 'hover:bg-slate-50');
            cell.classList.add('bg-white', 'hover:bg-slate-50');
        });

        // Highlight error cells with animation
        errors.forEach(([row, col]) => {
            const cell = board.children[row * this.currentLevel.size + col];
            cell.classList.remove('bg-white', 'hover:bg-slate-50');
            cell.classList.add('bg-red-50', 'hover:bg-red-100', 'pop');
            setTimeout(() => cell.classList.remove('pop'), 300);
        });
    }

    hideErrors() {
        const board = document.getElementById('board');
        board.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('bg-red-50', 'hover:bg-red-100');
            cell.classList.add('bg-white', 'hover:bg-gray-50');
        });
    }

    findErrors() {
        const errors = [];
        const errorMessages = new Set();

        // Check rows for equal number of suns and moons
        for (let i = 0; i < this.currentLevel.size; i++) {
            const row = this.board[i];
            const filledCells = row.filter(cell => cell !== EMPTY);
            if (filledCells.length > 0) {
                const suns = row.filter(cell => cell === SUN).length;
                const moons = row.filter(cell => cell === MOON).length;
                if (suns > this.currentLevel.size/2 || moons > this.currentLevel.size/2) {
                    errorMessages.add(`Row ${i + 1} must have equal number of suns and moons`);
                    row.forEach((_, j) => errors.push([i, j]));
                }
            }
        }

        // Check columns for equal number of suns and moons
        for (let j = 0; j < this.currentLevel.size; j++) {
            const col = this.board.map(row => row[j]);
            const filledCells = col.filter(cell => cell !== EMPTY);
            if (filledCells.length > 0) {
                const suns = col.filter(cell => cell === SUN).length;
                const moons = col.filter(cell => cell === MOON).length;
                if (suns > this.currentLevel.size/2 || moons > this.currentLevel.size/2) {
                    errorMessages.add(`Column ${j + 1} must have equal number of suns and moons`);
                    col.forEach((_, i) => errors.push([i, j]));
                }
            }
        }

        // Check operations
        this.currentLevel.operations.forEach(op => {
            const cell1 = this.board[op.cell1.row][op.cell1.col];
            const cell2 = this.board[op.cell2.row][op.cell2.col];

            // Only check if both cells have values
            if (cell1 !== EMPTY && cell2 !== EMPTY) {
                // Get cell positions in human-readable format (1-based)
                const pos1 = `(${op.cell1.row + 1},${op.cell1.col + 1})`;
                const pos2 = `(${op.cell2.row + 1},${op.cell2.col + 1})`;
                
                // For equality operations
                if (op.type === '=' && cell1 !== cell2) {
                    const symbol1 = cell1 === SUN ? 'sun' : 'moon';
                    const symbol2 = cell2 === SUN ? 'sun' : 'moon';
                    errorMessages.add(`Operation '=': Cells ${pos1} and ${pos2} should match, but have ${symbol1} and ${symbol2}`);
                    errors.push([op.cell1.row, op.cell1.col]);
                    errors.push([op.cell2.row, op.cell2.col]);
                } 
                // For opposite operations
                else if (op.type === 'x' && cell1 === cell2) {
                    const symbol = cell1 === SUN ? 'sun' : 'moon';
                    errorMessages.add(`Operation '×': Cells ${pos1} and ${pos2} should be different, but both have ${symbol}`);
                    errors.push([op.cell1.row, op.cell1.col]);
                    errors.push([op.cell2.row, op.cell2.col]);
                }
            }
        });

        // Debug log to verify operation checks
        console.log('Current Level Operations:', this.currentLevel.operations);
        this.currentLevel.operations.forEach(op => {
            const cell1 = this.board[op.cell1.row][op.cell1.col];
            const cell2 = this.board[op.cell2.row][op.cell2.col];
            // console.log(`Operation ${op.type} at (${op.cell1.row},${op.cell1.col}) = ${SYMBOLS[cell1]} and (${op.cell2.row},${op.cell2.col}) = ${SYMBOLS[cell2]}`);
        });

        // Check for three consecutive same symbols
        for (let i = 0; i < this.currentLevel.size; i++) {
            // Check horizontal
            for (let j = 0; j < this.currentLevel.size - 2; j++) {
                if (this.board[i][j] !== EMPTY && 
                    this.board[i][j] === this.board[i][j+1] && 
                    this.board[i][j] === this.board[i][j+2]) {
                    errorMessages.add(`Three consecutive ${this.board[i][j] === SUN ? 'suns' : 'moons'} in row ${i + 1}`);
                    errors.push([i, j]);
                    errors.push([i, j+1]);
                    errors.push([i, j+2]);
                }
            }
            // Check vertical
            for (let j = 0; j < this.currentLevel.size - 2; j++) {
                if (this.board[j][i] !== EMPTY && 
                    this.board[j][i] === this.board[j+1][i] && 
                    this.board[j][i] === this.board[j+2][i]) {
                    errorMessages.add(`Three consecutive ${this.board[j][i] === SUN ? 'suns' : 'moons'} in column ${i + 1}`);
                    errors.push([j, i]);
                    errors.push([j+1, i]);
                    errors.push([j+2, i]);
                }
            }
        }

        // Update error messages display
        const errorMessagesArray = Array.from(errorMessages);
        errorMessages.clear();
        errorMessagesArray.forEach(msg => {
            // Convert row/column numbers in messages to 1-based
            const newMsg = msg.replace(/Row (\d+)/g, (_, n) => `Row ${parseInt(n) + 1}`)
                             .replace(/Column (\d+)/g, (_, n) => `Column ${parseInt(n) + 1}`)
                             .replace(/in row (\d+)/g, (_, n) => `in row ${parseInt(n) + 1}`)
                             .replace(/in column (\d+)/g, (_, n) => `in column ${parseInt(n) + 1}`);
            errorMessages.add(newMsg);
        });

        // Update error messages display
        const errorMessagesDiv = document.getElementById('errorMessages');
        errorMessagesDiv.innerHTML = '';
        errorMessages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'text-red-500 text-sm font-medium bg-red-50 py-1 px-3 rounded-lg inline-block mx-1';
            messageDiv.textContent = message;
            errorMessagesDiv.appendChild(messageDiv);
        });

        return errors;
    }

    checkWinCondition() {
        // Don't check if there are still empty cells
        const hasEmpty = this.board.some(row => row.includes(EMPTY));
        if (hasEmpty) return;

        // Compare with solution pattern
        const isCorrect = this.board.every((row, i) => 
            row.every((cell, j) => cell === this.currentLevel.solution[i][j])
        );

        if (isCorrect) {
            // Success animation with delay to show the last move
            setTimeout(() => {
                const cells = document.querySelectorAll('.cell');
                const nonInitialCells = Array.from(cells).filter((cell, index) => {
                    const row = Math.floor(index / this.currentLevel.size);
                    const col = index % this.currentLevel.size;
                    return this.currentLevel.initial[row][col] === EMPTY;
                });

                cells.forEach(cell => {
                    cell.classList.remove('initial');
                });

                // Animate only non-initial cells with faster timing
                cells.forEach((cell, i) => {
                    setTimeout(() => {
                        cell.classList.add('win-animation');
                    }, i * 25); // Reduced from 50ms to 25ms
                });
                
                setTimeout(() => {
                    Swal.fire({
                        title: '🎉 Amazing Job! 🌟',
                        text: 'You solved the puzzle perfectly!',
                        icon: 'success',
                        showConfirmButton: true,
                        background: '#ffffff',
                        showClass: {
                            popup: 'swal2-show'
                        },
                        hideClass: {
                            popup: 'swal2-hide'
                        },
                        willClose: () => {
                            return new Promise(resolve => setTimeout(resolve, 300));
                        }
                    });
                    clearInterval(this.timerInterval);
                }, nonInitialCells.length * 25 + 200); // Reduced delay before showing success message
            }, 300);
        }
    }

    checkSolution() {
        // Check if board is complete
        const hasEmpty = this.board.some(row => row.includes(EMPTY));
        if (hasEmpty) {
            Swal.fire({
                title: 'Oopsie! 😅',
                text: 'Fill in all the cells before checking',
                icon: 'warning',
                showConfirmButton: true,
                background: '#ffffff',
                showClass: {
                    popup: 'swal2-show'
                },
                hideClass: {
                    popup: 'swal2-hide'
                },
                willClose: () => {
                    return new Promise(resolve => setTimeout(resolve, 300));
                }
            });
            return;
        }

        if (this.isSolutionCorrect()) {
            // Get all cells that were not in the initial setup
            const cells = document.querySelectorAll('.cell');
            const nonInitialCells = Array.from(cells).filter((cell, index) => {
                const row = Math.floor(index / this.currentLevel.size);
                const col = index % this.currentLevel.size;
                return this.currentLevel.initial[row][col] === EMPTY;
            });

            // Animate only non-initial cells with faster timing
            nonInitialCells.forEach((cell, i) => {
                setTimeout(() => {
                    cell.classList.add('win-animation');
                }, i * 25); // Reduced from 50ms to 25ms
            });
            
            setTimeout(() => {
                Swal.fire({
                    title: '🎉 Amazing Job! 🌟',
                    text: 'You solved the puzzle perfectly!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    background: '#ffffff',
                    showClass: {
                        popup: 'swal2-show'
                    },
                    hideClass: {
                        popup: 'swal2-hide'
                    },
                    willClose: () => {
                        return new Promise(resolve => setTimeout(resolve, 300));
                    }
                });
                clearInterval(this.timerInterval);
            }, nonInitialCells.length * 25 + 200); // Reduced delay before showing success message
        } else {
            Swal.fire({
                title: 'Not Quite Right 🤔',
                text: 'Keep trying! You\'re getting closer!',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                background: '#ffffff',
                showClass: {
                    popup: 'swal2-show'
                },
                hideClass: {
                    popup: 'swal2-hide'
                },
                willClose: () => {
                    return new Promise(resolve => setTimeout(resolve, 300));
                }
            });
        }
    }

    showHelp() {
        Swal.fire({
            title: '🎮 How to Play Tango',
            html: `
                <div class="text-left space-y-4">
                    <p class="text-lg font-medium mb-4">Fill each cell with either a sun (☀️) or moon (🌑):</p>
                    <div class="space-y-3">
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">1️⃣</span>
                            <p>No more than 2 of the same symbol may be next to each other</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">2️⃣</span>
                            <p>Each row and column must have an equal number of suns and moons</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">3️⃣</span>
                            <p>Cells separated by = must be the same type</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="text-2xl">4️⃣</span>
                            <p>Cells separated by × must be opposite types</p>
                        </div>
                    </div>
                    <p class="mt-4 text-sm text-slate-500">Click cells to cycle through: empty → sun → moon → empty</p>
                </div>
            `,
            confirmButtonText: 'Let\'s Play! 🎲',
            showConfirmButton: true,
            confirmButtonColor: '#0a66c2',
            background: '#ffffff',
            showClass: {
                popup: 'swal2-show'
            },
            hideClass: {
                popup: 'swal2-hide'
            },
            willClose: () => {
                return new Promise(resolve => setTimeout(resolve, 300));
            }
        });
    }

    showHint() {
        if (this.hintsRemaining <= 0) {
            Swal.fire({
                title: 'No More Hints! 🤓',
                text: 'Try solving it yourself - you can do it!',
                icon: 'info',
                showConfirmButton: false,
                timer: 2000,
                background: '#ffffff',
                customClass: {
                    popup: 'animated bounceIn'
                }
            });
            return;
        }

        // Find an empty cell that's incorrect
        let availableHints = [];
        for (let i = 0; i < this.currentLevel.size; i++) {
            for (let j = 0; j < this.currentLevel.size; j++) {
                if (this.board[i][j] !== this.currentLevel.solution[i][j]) {
                    availableHints.push([i, j]);
                }
            }
        }

        if (availableHints.length === 0) {
            Swal.fire({
                title: 'You\'re Doing Great! 🌟',
                text: 'No hints needed - you\'re on the right track!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
                background: '#ffffff',
                customClass: {
                    popup: 'animated bounceIn'
                }
            });
            return;
        }

        // Randomly select a hint
        const [row, col] = availableHints[Math.floor(Math.random() * availableHints.length)];
        const correctValue = this.currentLevel.solution[row][col];

        // Apply the hint with animation
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add('hint-animation');
        
        // Update the board
        this.board[row][col] = correctValue;
        this.render();
        
        // Update hints remaining
        this.hintsRemaining--;
        this.updateHintButton();

        // Remove hint animation after a delay
        setTimeout(() => {
            cell.classList.remove('hint-animation');
        }, 1500);
    }

    updateHintButton() {
        const hintBtn = document.getElementById('hintBtn');
        hintBtn.textContent = `Hint (${this.hintsRemaining})`;
        hintBtn.disabled = this.hintsRemaining <= 0;
        if (this.hintsRemaining <= 0) {
            hintBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            hintBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.timer = 0;
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timer++;
            this.updateTimerDisplay();
        }, 1000);
    }

    resetTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.timer = 0;
        this.updateTimerDisplay();
        this.startTimer();
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timer / 60);
        const seconds = this.timer % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    isSolutionCorrect() {
        return this.board.every((row, i) => 
            row.every((cell, j) => cell === this.currentLevel.solution[i][j])
        );
    }
}

// Start game when page loads
window.addEventListener('load', () => new TangoGame());
