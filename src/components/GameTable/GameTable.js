import GameRow from './GameRow.js'

function GameTable({ map }) {
  return (
    <table className="table">
      <tbody>
        { map.map( (row,j) => <GameRow row={row} j={j} key={j}  /> )} 
      </tbody>
    </table>
  )
}


export default GameTable;