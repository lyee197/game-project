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
        this.speed = 2
        this.boost = 5
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        this.direction = {
            up: false,
            down: false,
            right: false,
            left: false,
            fast: false
        }
    }
    setDirection = function (key) {
        console.log('the key pressed is', key)
        if (key.toLowerCase() == 'w') this.direction.up = true
        if (key.toLowerCase() == 'a') this.direction.left = true
        if (key.toLowerCase() == 's') this.direction.down = true
        if (key.toLowerCase() == 'd') this.direction.right = true
        if (key.toLowerCase() == ' ') this.direction.fast = true
    }
    unsetDirection = function (key) {
        console.log('the key pressed is', key)
        if (key.toLowerCase() == 'w') this.direction.up = false
        if (key.toLowerCase() == 'a') this.direction.left = false
        if (key.toLowerCase() == 's') this.direction.down = false
        if (key.toLowerCase() == 'd') this.direction.right = false
        if (key.toLowerCase() == ' ') this.direction.fast = false        
    }
    movePlayer = function () {
        if (this.direction.up) {
            this.y -= this.speed
            if (this.y <= 0) {
                this.y = 0
            }
            // if (this.y <= Wall.y) {
            //     console.log('bottom')
            //     this.y = Wall.y + Wall.height
            // }
        }
        if (this.direction.left) {
            this.x -= this.speed
            if (this.x <= 0) {
                this.x = 0
            }
            // if (this.x <= Wall.x) {
            //     console.log('right')
            //     this.x = Wall.x - this.width
            // }
        }
        if (this.direction.down) {
            this.y += this.speed
            if (this.y + this.height >= game.height) {
                this.y = game.height - this.height
            }
            // if (this.y + this.height >= Wall.height) {
            //     console.log('top')
            //     this.y = Wall.y - this.height
            // }
        }
        if (this.direction.right) {
            this.x += this.speed
            if (this.x + this.width >= game.width) {
                this.x = game.width - this.width
            }
            // if (this.x + this.width >= Wall.width) {
            //     console.log('left')
            //     this.x = Wall.x + Wall.width
            // }
        }
    }
    // wa = wall array
    detectWall = function (wa) {
        for (let i = 0; i < wa.length; i++) {
            // if (this.direction.right){
                // Runner -= Runner.speed
                // The runner's x (top left or top) needs to hit the right of the wall
                // The left of the wall is x so if this(runner).x is Runners left
                // the right side of wall is wall(wa).x + width
            if (this.x  < wa[i].x + wa[i].width
                // 
                && this.x + this.width > wa[i].x 
                //
                && this.y  < wa[i].y + wa[i].height 
                //
                && this.y + this.height > wa[i].y) {
                console.log('right')
                // if (this.x === wa[i].x + wa[i].width) {
                //     console.log('hit1')
                //     this.x = 0
                // } else if (this.x + this.width === wa[i].x) {
                //     console.log('hit2')
                //     this.x = 0
                // } else if (this.y === wa[i].y + wa[i].height) {
                //     console.log('hit3')
                //     this.y = 0
                // } else if (this.y === this.height > wa[i].y) {
                //     console.log('hit4')
                //     this.y = 0
                // }
            } else {
                console.log('left ', this.x)
            }
            




                // if (this.x === (walls[i].x - this.width) && this.y === walls[i].y - this.height) {
            // }
        
            }

// if (this.direction.left){
        //     // Runner -= Runner.speed
        //     if (this.x + this.width >= Wall.width) {
        //         console.log('left')
        //         this.x = Wall.x + Wall.width
        //     }
        // } 
        // if (this.direction.down){
        //     // Runner -= Runner.speed
        //     if (this.y <= Wall.y) {
        //         console.log('bottom')
        //         this.y = Wall.y + Wall.height
        //     }
        // }
        // if (this.direction.up){
        //     // Runner -= Runner.speed
        //     if (this.y + this.height >= Wall.height) {
        //         console.log('top')
        //         this.y = Wall.y - this.height
        //     }
        // }
    }
}

class Wall {
    constructor(x, y, color, width, height, type) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width,
        this.type = type,
        this.alive = true,
        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }

    }
}



let player = new Runner(50, 350, 'red', 8, 8)
let end = new Runner(740, 350, 'blue', 8, 8)
let frontT = new Wall(50, 25, 'red', 5, 310)
let frontB = new Wall(50, 375, 'red', 5, 300)
let backT = new Wall( 740, 25, 'red',5, 310)
let backB = new Wall( 740, 375, 'red', 5, 305)
let topW = new Wall(50, 25, 'purple', 690, 5)
let botW = new Wall(50, 675, 'purple', 690, 5)
let wallOne = new Wall(100, 70,'red', 5, 310)
let wallTwo = new Wall(100, 70,'purple', 100, 5)
let wallThree = new Wall(195, 25,'red', 5, 265)
let wallFour = new Wall(245, 70,'purple', 200, 5)
let wallFive = new Wall(245, 70,'red', 5, 45)
let wallSix = new Wall(245, 110,'purple', 245, 5)
let wallSeven = new Wall(490, 25,'red', 5, 90)
let wallEight = new Wall(100, 425,'purple', 245,5)
let wallNine = new Wall(100, 375,'purple', 50, 5)
let wallTen = new Wall(150, 330,'purple', 50, 5)
let wallEleven = new Wall(150, 115,'red', 5, 220)
let wallTwelve = new Wall(195, 330,'red', 5, 195)
let wallThirteen = new Wall(100, 475,'purple', 50, 5)
let wallFourteen = new Wall(245, 155,'red', 5, 275)
let wallFifteen = new Wall(145, 475,'red', 5, 105)
let wallSixteen = new Wall(100, 520,'red', 5, 110)
let wallSeventeen = new Wall(100, 625,'purple', 190, 5)
let wallEighteen = new Wall(145, 575,'purple', 100, 5)
let wallNineteen = new Wall(245, 475,'red', 5, 105)
let wallTwenty = new Wall(245, 475,'purple', 155, 5)
let wallTwentyone = new Wall(290, 515,'red', 5, 115)
let wallTwentyTwo = new Wall(290, 155,'red', 5, 225)
let wallTwentyThree = new Wall(290, 380,'purple', 110, 5)
let wallTwentyFour = new Wall(345, 425,'red', 5, 50)
let wallTwentyFive = new Wall(395, 380,'red', 5, 250)
let wallTwentySix = new Wall(290, 155,'purple', 245, 5)
let wallTwentySeven = new Wall(535, 65,'red', 5, 50)
let wallTwentyEight = new Wall(535, 110,'purple', 160, 5)
let wallTwentyNine = new Wall(580, 65,'purple', 160, 5)
let wallThirty = new Wall(580, 110,'red', 5, 180)
let wallThirtyOne = new Wall(630, 155,'purple', 115, 5)
let wallThirtyTwo = new Wall(535, 155,'red', 5, 180)
let wallThirtyThree = new Wall(580, 200,'purple', 115, 5)
let wallThirtyFour = new Wall(580, 330,'purple', 165, 5)
let wallThirtyFive = new Wall(630, 250,'purple', 115, 5)
let wallThirtySix = new Wall(535, 290,'purple', 165, 5)
let wallThirtySeven = new Wall(580, 330, 'red', 5, 95)
let wallThirtyEight = new Wall(340, 515, 'red', 5, 165)
let wallThirtyNine = new Wall(290, 515, 'purple', 55, 5)
let wallFourty = new Wall(445, 380, 'purple', 135, 5)
let wallFourtyOne = new Wall(400, 625, 'purple', 295, 5)
let wallFourtyTwo = new Wall(445, 380, 'red', 5, 205)
let wallFourtyThree = new Wall(490, 195, 'red', 5, 190)
let wallFourtyFour = new Wall(490, 425, 'red', 5, 205)
let wallFourtyFive = new Wall(535, 380, 'red', 5, 205)
let wallFourtySix = new Wall(580, 580, 'purple', 160, 5)
let wallFourtySeven = new Wall(580, 465, 'red', 5, 160)
let wallFourtyEight = new Wall(630, 330, 'red', 5, 210)
let wallFourtyNine = new Wall(630, 535, 'purple', 60, 5)
let wallFifty = new Wall(685, 375, 'red', 5, 115)
let wallFiftyOne = new Wall(685, 375, 'purple', 60, 5)
let wallFiftyTwo = new Wall(340, 335, 'purple', 150, 5)
let wallFiftyThree = new Wall(290, 290, 'purple', 160, 5)
let wallFiftyFour = new Wall(445, 250, 'red', 5, 45)
let wallFiftyFive = new Wall(340, 245, 'purple', 110, 5)
let wallFiftySix = new Wall(340, 195, 'purple', 150, 5)
// let wallFiftySeven = new Wall(, , '', , )

// wall creation function should produce enough walls to fill canvas
// think of some mathematical way of creating a bunch of walls
// walls need different x/y and width/height
// if wallWidth > wallHeight then wallColor = purple
// else wallColor = red
// 
// WALL DETECT LOGIC - WALL 
//if players right edge hits the wall, then playerx = wallX - playerWidth
//if players left edge hits the wall, then playerx = wallX + wallWidth
//if players top edge hits the wall, then playery = wallY + wallheight
//if players bottom edge hits the wall, then playery = wallY - playerheight

// const detectWall = () => {
//     if (Runner.direction.right){
//         // Runner -= Runner.speed
//         if (Runner.x <= walls[i].x) {
//             console.log('right')
//             Runner.x = Wall.x - Runner.width
//         }
//     }
//     if (Runner.direction.left){
//         // Runner -= Runner.speed
//         if (Runner.x + Runner.width >= Wall.width) {
//             console.log('left')
//             Runner.x = Wall.x + Wall.width
//         }
//     } 
//     if (Runner.direction.down){
//         // Runner -= Runner.speed
//         if (Runner.y <= Wall.y) {
//             console.log('bottom')
//             Runner.y = Wall.y + Wall.height
//         }
//     }
//     if (Runner.direction.up){
//         // Runner -= Runner.speed
//         if (Runner.y + Runner.height >= Wall.height) {
//             console.log('top')
//             Runner.y = Wall.y - Runner.height
//         }
//     }
// }



let walls = [
    wallOne, wallTwo, wallThree, wallFour, wallFive,
    wallSix, wallSeven, wallEight, wallNine, wallTen,
    wallEleven, wallTwelve, wallThirteen, wallFourteen, wallFifteen,
    wallSixteen, wallSeventeen, wallEighteen, wallNineteen, wallTwenty,
    wallTwentyone, wallTwentyTwo, wallTwentyThree, wallTwentyFour, wallTwentyFive,
    wallTwentySix, wallTwentySeven, wallTwentyEight, wallTwentyNine, wallThirty,
    wallThirtyOne, wallThirtyTwo, wallThirtyThree, wallThirtyFour, wallThirtyFive,
    wallThirtySix, wallThirtySeven, wallThirtyEight, wallThirtyNine, wallFourty,
    wallFourtyOne, wallFourtyTwo, wallFourtyThree, wallFourtyFour, wallFourtyFive,
    wallFourtySix, wallFourtySeven, wallFourtyEight, wallFourtyNine, wallFifty,
    wallFiftyOne, wallFiftyTwo, wallFiftyThree, wallFiftyFour, wallFiftyFive,
    wallFiftySix, frontT, frontB, backT, backB,
    topW, botW]
// Runner.detectWall(walls[i])]
const drawWalls = () => {
    // if (wallsBuilt !== true) {
        for (let i = 0; i < walls.length; i++) {
            walls[i].render()
        // console.log('this wall was rendered: ' + walls[i])
        // Runner.detectWall(walls[i])
        }
        // wallsBuilt = true
    // } 
}

console.log('this is wall 14: ' + walls[0].width)
// console.log('this is wall 14: ' + walls[1].width)

// fill array with new walls
// itterate over array and render
// use 'forEach[i]' on the array
// walls[i]
// const drawWalls = () => {
//  for (let i = 0; i < walls.length; i++) {
//      walls[i].render()
//      runner.detectWall(walls[i])
//  }
//}
// drawWalls()
const stopGameLoop = () => {clearInterval(gameInterval)}

document.addEventListener('DOMContentLoaded', function () {
    // document.addEventListener('keydown', movementHandler)
    gameInterval
})

let wallsBuilt = false

const gameLoop = () => {
    if (end.alive) {
        detectHit()
    }
    ctx.clearRect(0, 0, game.width, game.height)
    drawWalls()
    movement.textContent = player.x + ' , ' + player.y
    if (end.alive) {
        end.render()
    }
    // detectWall()
    player.render()
    player.detectWall(walls)
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
    if (['w','a','s','d',' '].includes(e.key)) {
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
            
            