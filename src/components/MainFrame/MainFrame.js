import React from 'react'

import Context from '../../context'

import GameTable from '../GameTable/GameTable'
import ControlPanel from '../ControlPanel/ControlPanel'
import createGameTable from '../../service/MapTableService'

function MainFrame() {
  const [mapTable] = React.useState(createGameTable(9, 10))
  console.log(mapTable.bombPosition, mapTable.gameTable);

  return (
    <Context.Provider value={{bomb:mapTable.bombPosition}}>
      <div className="main-frame">
        <ControlPanel />
        <GameTable map={mapTable.gameTable} />
      </div>
    </Context.Provider>
  )
}


export default MainFrame;