// console.log('gg ez')

const game = document.getElementById('gameboard')
const movement = document.getElementById('movement')

const ctx = game.getContext('2d')

console.log('game befor browser attributes: \n', game)

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['width'])

console.log('wtf is ctx: \n', ctx)
console.log('game \n', game)


class Runner {
    constructor(x, y, color, height, width) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}
class Wall {
    constructor(x, y, color, height, width) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}



let player = new Runner(50, 200, 'red', 8, 8)
let end = new Runner(740, 200, 'blue', 8, 8)
let frontT = new Wall(50, 100, 'purple', 50, 8)
let frontB = new Wall(50, 300, 'purple', 50, 8)

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', movementHandler)
    setInterval(gameLoop, 60)
})

const gameLoop = () => {
    if (end.alive) {
        detectHit()

    }
    ctx.clearRect(0, 0, game.width, game.height)
    movement.textContent = player.x + ' , ' + player.y
    player.render()
    if (end.alive) {
        end.render()
    }
}

const movementHandler = (e) => {
    switch (e.keyCode) {
        case (87):
            player.y -=5
            break
        case (65):
            player.x -=5
            break
        case (83):
            player.y +=5
            break
        case (68):
            player.x +=5
            break
        
    }
}

const detectHit = () => {
    if (player.x < end.x + end.width
        && player.x + player.width > end.x
        && player.y < end.y + end.height
        && player.y + player.height > end.y) {
            end.alive = false
            document.getElementById('status').innerText = 'You made it to the end in time! POGGERS'
        // } else if {player.x < wa}
        }
}

// const wallH = () => {
//     if (pplayer.x < )
// }

// const wallV = () => {
//     if
// }

