//Door variables
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//Door images
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

//Global variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
  } else {
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
  }
}

//Door 1 function
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

//Door 2 function
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

//Door 3 function
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

//Starts a new round on click
startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

//Function for starting new round
startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

//Game over function
gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
      startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

//Checks for the ChoreBot
isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
      return false;
  }
}

//Checks if a door has been clicked
isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
      return true;
  }
}

//Play Door Function
playDoor = door => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
      gameOver();
  }
}

//Starts the next round
startRound();