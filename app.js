//Mandatory: DONE
//Bonus 1: DONE
//Bonus 2: DONE
//Bonus 3: DONE
//Bonus 4: Work in progress

const rover1 = {
  name: 'Rover_1',
  direction: 'N',
  x: 0,
  y: 0,
  travelLog:[{x:0, y:0}],
}

const rover2 = {
  name: 'Rover_2',
  direction: 'S',
  x: 2,
  y: 2,
  travelLog:[{x:2, y:2}],
}

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'N'
      break;
  }
  console.log(`${rover.name} turnLeft was called! => New dir: ${rover.direction}`);
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
  console.log(`${rover.name} turnRight was called! => New dir: ${rover.direction}`);
}

function moveForward(rover) {
  if (rover.y == 0 && rover.direction === 'N'
   || rover.y == 9 && rover.direction === 'S'
   || rover.x == 0 && rover.direction === 'W'
   || rover.x == 9 && rover.direction === 'E'){
    console.log (`DANGER!! => ${rover.name} it's at x= ${rover.x}, y= ${rover.y}
    Move FORWARD to '${rover.direction}' dir will take Rover out of the grid range!
    Please, change your comand.`);
    
  }else{ 
    switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
    case 'E':
      rover.x++;
      break;
    case 'S':
      rover.y++;
      break;
    case 'W':
      rover.x--;
      break;
    }

console.log(`${rover.name} moveForward was called! => New pos: x= ${rover.x} y= ${rover.y} dir: ${rover.direction}`);

let currentPosition = { x: rover.x, y: rover.y}
rover.travelLog.push(currentPosition);
  }
}

function moveBackward(rover) {
  if (rover.y == 0 && rover.direction === 'S'
   || rover.y == 9 && rover.direction === 'N'
   || rover.x == 0 && rover.direction === 'E'
   || rover.x == 9 && rover.direction === 'W'){
    console.log (`DANGER!! => ${rover.name} it's at x= ${rover.x}, y= ${rover.y}
    Move BACKWARD to '${rover.direction}' dir will take Rover out of the grid range!
    Please, change your comand.`);
    
  }else{
    switch (rover.direction) {
    case 'N':
      rover.y++;
      break;
    case 'E':
      rover.x--;
      break;
    case 'S':
      rover.y++;
      break;
    case 'W':
      rover.x++;
      break;
    }

console.log(`${rover.name} moveBackward was called! => New pos: x= ${rover.x} y= ${rover.y} dir: ${rover.direction}`);

let currentPosition = { x: rover.x, y: rover.y}
rover.travelLog.push(currentPosition);
  }
}

function comand(rover, moves) {
  for (let i=0; i < moves.length; i++){
    let move = moves [i];
    switch (move) {
      case 'f':
        moveForward(rover)
        break;
      case 'b':
        moveBackward(rover)
        break;
      case 'r':
        turnRight(rover)
        break;
      case 'l':
        turnLeft(rover)
        break;
      default:
        console.log (`!!=> Invalid comand for ${rover.name}: '${moves[i]}'. Please use 'l', 'r', 'f' or 'b' comands.`);
        break;
    }
  }
        console.log (`*${rover.name} Travel Log to this point:`);
        for (let i =0; i < rover.travelLog.length; i++){
          console.log (`__Step ${i}.- x: ${rover.travelLog[i].x}, y: ${rover.travelLog[i].y}`);
        } //Can do it in a single <console.log>??
} 
      
comand(rover1, 'rffrbk') /*<== PUT YOUR ROVER ORDERS (l-r-f-b) INSIDE 'string'*/ 

//comand(rover2, 'rfflfbkrf') /*<== PUT YOUR ROVER ORDERS (l-r-f-b) INSIDE 'string'*/ 


//==================================================================================

// bonus4 ideas. lot of ideas, no succes...
// 1st git upload
const rover0 = {
  name: 'Rover_0',
  number: '0',
  x: 0,
  y: 0,
  direction: 'N',
  travelLog:[{x:0, y:0}],
}

const gird = []
for (let i = 0; i < 10; i++){
  gird.push(['_','_','_','_','_','_','_','_','_','_',])
}

gird [0][4] = 'o'
gird [0][1] = 'o'
gird [2][7] = 'o'
gird [4][3] = 'o'
gird [5][6] = 'o'
gird [7][1] = 'o'
gird [9][5] = 'o'
gird [3][3] = 'o'
gird [6][8] = 'o'
gird [8][8] = 'o'

const obbstacle = 'o'

//Uncoment 3 lines below to print gird
//for (let i = 0; i < 10; i++){
//    console.log(`${gird[i]}`)
//  }
  
//2 lines below: target a position on the gird (array element)
//console.log(gird [2][7]);
//console.log(gird [1][4]);
  

//Move element at array
gird [2][1] = gird [1][1]
gird [1][1] = ' '

//console.log ('1-1 move to 2-1!!');


//check for obstable before move??
function moveForwardStopObstacles(rover) {
  if (rover.y == 0 && rover.direction === 'N'
   || rover.y == 9 && rover.direction === 'S'
   || rover.x == 0 && rover.direction === 'W'
   || rover.x == 9 && rover.direction === 'E'){
    console.log (`DANGER!! => ${rover.name} it's at x= ${rover.x}, y= ${rover.y}
    Move FORWARD to '${rover.direction}' dir will take Rover out of the grid range!
    Please, change your comand.`);
    
  }else{ 
    switch (rover.direction) {
    case 'N':
      //trying to check if there's an obstacle, before move...
      if (gird[rover.x][rover.y-1]==='o'){
        console.log('ob!!');
      }else{
      rover.y--;
      break;
      }
    case 'E':
      rover.x++;
      break;
    case 'S':
      rover.y++;
      break;
    case 'W':
      rover.x--;
      break;
    }

console.log(`${rover.name} moveForward was called! => New pos: x= ${rover.x} y= ${rover.y} dir: ${rover.direction}`);

let currentPosition = { x: rover.x, y: rover.y}
rover.travelLog.push(currentPosition);
  }
}