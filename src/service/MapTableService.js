const countMap = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomBombPosition(countBomb, max){
  let bombPosition = [];
  
  while(countBomb > bombPosition.length){
    let randomPosition = `${getRandomInt(max)}${getRandomInt(max)}`;

    if(bombPosition.indexOf(randomPosition) === -1){
      bombPosition.push(randomPosition);
    }
  }

  return bombPosition
}

function updatePosition(array,j,i){
  let length = array.length;
  array[j][i] = 'b';

  countMap.forEach(item => {
    let newJ = j + item[0];
    let newX = i + item[1];

    if(newJ >= 0 && newX >= 0 &&
       newJ < length && newX < length &&
       array[newJ][newX] !== 'b'){

      array[newJ][newX] = (array[newJ][newX]+1) || 1;
    }
  })
}

function createMapTable(countRow,bombPosition){
  const gameTable = [...new Array(countRow)]
          .map(() => [...new Array(countRow)])

  gameTable.forEach((row, j) => {
    row.forEach((col, i)=> {
      let position = `${j}${i}`;

      if(bombPosition.indexOf(position) > -1){
        updatePosition(gameTable,j,i);
      }

    });
  })

  return gameTable;
}


function createGameTable(countRow, countBomb) {
  const bombPosition = randomBombPosition(countBomb,countRow);
  const gameTable = createMapTable(countRow, bombPosition);

  return {
    bombPosition,
    gameTable,
  }
}


export default createGameTable;