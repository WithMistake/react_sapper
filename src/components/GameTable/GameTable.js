import GameItem from './GameItem.js'

function GameTable({ map, bomb }) {
  return (
    <table className="main-frame">
      <tbody>
        {
          map.map(row => {
            return (
              <tr>
                { 
                  row.map(colum => {
                    if(bomb.indexOf(colum) > -1){
                      console.log(colum, bomb);
                      return <GameItem text={"b"} />
                    } else{
                      return <GameItem text={colum} />
                    }
                  })
                }
              </tr>
            )
          })
        } 
      </tbody>
    </table>
  )
}


export default GameTable;