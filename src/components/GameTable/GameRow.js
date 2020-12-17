import { useContext } from 'react'
import Context from '../../context'


import GameItem from './GameItem.js'

function GameRow({ row, j }) {
  const { bomb } = useContext(Context);
 
  return (
    <tr>
      { 
        row.map( (column,i) => { 
          return <GameItem 
                  text={ bomb.indexOf(column) > -1 ? 'B' : column}  
                  row={j} 
                  column={i}
                  key={i} />    
        })
      }
    </tr>
  )
}

export default GameRow;