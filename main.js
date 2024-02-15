import './style.css'

const canvas = document.getElementById('tutorial')
const ctx = canvas.getContext('2d')
ctx.scale(20, 20)

function drawBoard(board) {
  if (canvas.getContext) {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          ctx.fillStyle = 'green'
          ctx.fillRect(x, y, 1, 1)
        }
        if (value === 2) {
          ctx.fillStyle = 'indianred'
          ctx.fillRect(x, y, 1, 1)
        }
        if (value === 3) {
          ctx.fillStyle = 'darkgreen'
          ctx.fillRect(x, y, 1, 1)
        }
        if (value === 4) {
          ctx.fillStyle = 'white'
          ctx.fillRect(x, y, 1, 1)
        }
      })
    })
  }
}

function initialBoard() {
  return Array(40).fill().map(() => Array(30).fill(0))
}

function initialSnake(board) {
  board[0][1] = 2
  board[0][2] = 1
  board[0][3] = 1
  board[0][4] = 1
  board[0][5] = 1
  board[0][6] = 1
  board[0][7] = 1
  board[0][8] = 1
  board[0][9] = 1
  board[0][10] = 3
}
let score = -1

function newBox(board) {
  const column = Math.floor(Math.random() * (29 - 0) + 0)
  const row = Math.floor(Math.random() * (39 - 0) + 0)
  board[row][column] = 4
  score++
  document.getElementById('score').innerText = score
}

let board = initialBoard()
initialSnake(board)
newBox(board)
let direction = 'right'

function reset() {
  const audio = new Audio('game-over.wav')
  audio.play()
  board = initialBoard()
  initialSnake(board)
  newBox(board)
  direction = 'none'
  score = 0
  document.getElementById('score').innerText = score
}

function playHitBoxAudio() {
  const audio = new Audio('get-box.wav')
  if (score % 10 === 0) {
    const audio2 = new Audio('very-good.wav')
    audio2.play()
  }
  audio.play()
}

function checkColition(positionx, positiony) {
  return board[positionx][positiony] === 1 || board[positionx][positiony] === 2
}

function draw() {
  window.setInterval(() => {
    drawBoard(board)

    if (direction === 'right') {
      const [headPosition, tailPosition] = calculatePositionSnake()

      if (headPosition[1] + 1 > 29 || checkColition(headPosition[0], headPosition[1] + 1)) {
        reset()
      } else {
        board[tailPosition[0]][tailPosition[1]] = 0
        if (board[headPosition[0]][headPosition[1] + 1] === 4) {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0]][headPosition[1] + 1] = 1
          board[headPosition[0]][headPosition[1] + 2] = 3
          newBox(board)
          playHitBoxAudio()
        } else {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0]][headPosition[1] + 1] = 3
        }
      }
    }
    if (direction === 'left') {
      const [headPosition, tailPosition] = calculatePositionSnake()

      if (headPosition[1] - 1 < 0 || checkColition(headPosition[0], headPosition[1] - 1)) {
        reset()
      } else {
        board[tailPosition[0]][tailPosition[1]] = 0

        if (board[headPosition[0]][headPosition[1] - 1] === 4) {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0]][headPosition[1] - 1] = 3
          board[headPosition[0]][headPosition[1] - 2] = 3
          newBox(board)
          playHitBoxAudio()
        } else {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0]][headPosition[1] - 1] = 3
        }
      }
    }

    if (direction === 'up') {
      const [headPosition, tailPosition] = calculatePositionSnake()

      if (headPosition[0] - 1 < 0 || checkColition(headPosition[0] - 1, headPosition[1])) {
        reset()
      } else {
        board[tailPosition[0]][tailPosition[1]] = 0

        if (board[headPosition[0] - 1][headPosition[1]] === 4) {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0] - 1][headPosition[1]] = 1
          board[headPosition[0] - 2][headPosition[1]] = 3
          newBox(board)
          playHitBoxAudio()
        } else {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0] - 1][headPosition[1]] = 3
        }
      }
    }
    if (direction === 'down') {
      const [headPosition, tailPosition] = calculatePositionSnake()

      if (headPosition[0] + 1 > 39 || checkColition(headPosition[0] + 1, headPosition[1])) {
        reset()
      } else {
        board[tailPosition[0]][tailPosition[1]] = 0

        if (board[headPosition[0] + 1][headPosition[1]] === 4) {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0] + 1][headPosition[1]] = 1
          board[headPosition[0] + 2][headPosition[1]] = 3
          newBox(board)
          playHitBoxAudio()
        } else {
          board[headPosition[0]][headPosition[1]] = 1
          board[headPosition[0] + 1][headPosition[1]] = 3
        }
      }
    }
  }, 100)
}

draw()

function calculatePositionSnake() {
  const positions = []

  board.forEach((row, y) => {
    let position = [0, 0]
    const tail = row.findIndex((cell, i) => cell === 2)

    if (tail !== -1) {
      position = [y, tail]
      positions.push(position)
    }
  })

  board.forEach((row, y) => {
    let position = [0, 0]
    const head = row.findLastIndex((cell, i) => cell === 3)

    if (head !== -1) {
      position = [y, head]
      positions.push(position)
    }
  })

  const headPosition = positions[positions.length - 1]
  const tailPosition = positions[0]

  let isLeft = false
  let isRight = false
  let isTop = false
  let isBottom = false
  if (tailPosition[0] > 0) {
    isLeft = board[tailPosition[0] - 1][tailPosition[1]] === 1
    if (isLeft) {
      board[tailPosition[0] - 1][tailPosition[1]] = 2
    }
  }
  if (tailPosition[0] < 39) {
    isRight = board[tailPosition[0] + 1][tailPosition[1]] === 1
    if (isRight) {
      board[tailPosition[0] + 1][tailPosition[1]] = 2
    }
  }
  if (tailPosition[1] > 0) {
    isTop = board[tailPosition[0]][tailPosition[1] - 1] === 1
    if (isTop) {
      board[tailPosition[0]][tailPosition[1] - 1] = 2
    }
  }
  if (tailPosition[1] < 29) {
    isBottom = board[tailPosition[0]][tailPosition[1] + 1] === 1
    if (isBottom) {
      board[tailPosition[0]][tailPosition[1] + 1] = 2
    }
  }

  return [headPosition, tailPosition]
}

document.onkeydown = function (e) {
  if (e.key === 'ArrowDown') {
    if (direction !== 'up') {
      direction = 'down'
    }
  } else if (e.key === 'ArrowUp') {
    if (direction !== 'down') {
      direction = 'up'
    }
  } else if (e.key === 'ArrowLeft') {
    if (direction !== 'right') {
      direction = 'left'
    }
  } else if (e.key === 'ArrowRight') {
    if (direction !== 'left') {
      direction = 'right'
    }
  }
}

document.getElementById('btn_down').addEventListener('click', () => {
  if (direction !== 'up') {
    direction = 'down'
  }
})

document.getElementById('btn_up').addEventListener('click', () => {
  if (direction !== 'down') {
    direction = 'up'
  }
})

document.getElementById('btn_left').addEventListener('click', () => {
  if (direction !== 'right') {
    direction = 'left'
  }
})

document.getElementById('btn_right').addEventListener('click', () => {
  if (direction !== 'left') {
    direction = 'right'
  }
})