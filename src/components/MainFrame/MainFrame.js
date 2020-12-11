import React from 'react'
import GameTable from '../GameTable/GameTable'
import ControlPanel from '../ControlPanel/ControlPanel'

import createGameTable from '../../service/MapTableService'

function MainFrame() {
  const [mapTable, setMapTable] = React.useState(createGameTable(9, 10))
  console.log(mapTable.bombPosition, mapTable.gameTable);

  return (
    <div className="main-frame">
      <h2> Main Frame init </h2>

      <GameTable map={mapTable.gameTable} bomb={mapTable.bombPosition} />
    </div>
  )
}


export default MainFrame;