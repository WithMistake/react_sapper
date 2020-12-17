import { useState } from 'react'

import Context from '../../context'

import GameTable from '../GameTable/GameTable'
import ControlPanel from '../ControlPanel/ControlPanel'
import createGameTable from '../../service/MapTableService'

function MainFrame() {
  const countBomb = 10;
  const [isPlay, setIsPlay] = useState(true);
  const [mapTable, setMapTable] = useState(()=>{
    return createGameTable(9, countBomb)
  })
  console.log(mapTable.bombPosition, mapTable.gameTable);

  function restartGame(){
    setIsPlay(true)
    setMapTable(createGameTable(9, countBomb))
  }

  return (
    <Context.Provider value={{bomb:mapTable.bombPosition, userTable: mapTable.userTable}}>
      <div className="main-frame">
        <button onClick={() => {setIsPlay(false)}}>Died</button>
        <ControlPanel isPlay={isPlay} onRestart={restartGame}  />
        <GameTable map={mapTable.gameTable} />
      </div>
    </Context.Provider>
  )
}

export default MainFrame;