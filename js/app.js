// console.log('gg ez')

const game = document.getElementById('gameboard')
const movement = document.getElementById('movement')

const ctx = game.getContext('2d')

console.log('game befor browser attributes: \n', game)

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

console.log('wtf is ctx: \n', ctx)
console.log('game \n', game)


class Runner {
    constructor(x, y, color, width, height) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.alive = true,
        this.speed = 15
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        this.direction = {
            up: false,
            down: false,
            right: false,
            left: false
        }
    }
    setDirection = function (key) {
        console.log('the key pressed is', key)
        if (key.toLowerCase() == 'w') this.direction.up = true
        if (key.toLowerCase() == 'a') this.direction.left = true
        if (key.toLowerCase() == 's') this.direction.down = true
        if (key.toLowerCase() == 'd') this.direction.right = true
    }
    unsetDirection = function (key) {
        console.log('the key pressed is', key)
        if (key.toLowerCase() == 'w') this.direction.up = false
        if (key.toLowerCase() == 'a') this.direction.left = false
        if (key.toLowerCase() == 's') this.direction.down = false
        if (key.toLowerCase() == 'd') this.direction.right = false
    }
    movePlayer = function () {
        if (this.direction.up) {
            this.y -= this.speed
            if (this.y <= 0) {
                this.y = 0
            }
        }
        if (this.direction.left) {
            this.x -= this.speed
            if (this.x <= 0) {
                this.x = 0
            }
        }
        if (this.direction.down) {
            this.y += this.speed
            if (this.y + this.height >= game.height) {
                this.y = game.height - this.height
            }
        }
        if (this.direction.right) {
            this.x += this.speed
            if (this.x + this.width >= game.width) {
                this.x = game.width - this.width
            }
        }
    }
}

class Wall {
    constructor(x, y, color, width, height) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}



let player = new Runner(50, 350, 'red', 8, 8)
let end = new Runner(740, 350, 'blue', 8, 8)
let frontT = new Wall(50, 25, 'purple', 5, 310)
let frontB = new Wall(50, 375, 'purple', 5, 300)

let walls = []
// fill array with new walls
// itterate over array and render
// use 'forEach[i]' on the array

const stopGameLoop = () => {clearInterval(gameInterval)}

document.addEventListener('DOMContentLoaded', function () {
    // document.addEventListener('keydown', movementHandler)
    gameInterval
})

const gameLoop = () => {
    if (end.alive) {
        detectHit()
    }
    ctx.clearRect(0, 0, game.width, game.height)
    movement.textContent = player.x + ' , ' + player.y
    if (end.alive) {
        end.render()
    }
    player.render()
    frontB.render()
    frontT.render()
    player.movePlayer()
}
// this was our movement
// const movementHandler = (e) => {
    //     switch (e.keyCode) {
        //         case (87):
//             player.y -=5
//             break
//         case (65):
//             player.x -=5
//             break
//         case (83):
//             player.y +=5
//             break
//         case (68):
//             player.x +=5
//             break

//     }
// }

document.addEventListener('keydown', (e) => {
    player.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    if (['w','a','s','d'].includes(e.key)) {
        player.unsetDirection(e.key)
    }
})


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
    
let gameInterval = setInterval(gameLoop, 60)
    // const wallH = () => {
        //     if (pplayer.x < )
        // }
        
        // const wallV = () => {
            //     if
            // }
            
            