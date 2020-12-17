import { useState, useContext } from 'react'
import Context from '../../context'

import flag from '../../static/flag.png'

function GameItem({ text, row, column }) {
  let { userTable, bomb } = useContext(Context);
  let [state, setState] = useState({
    spanState: userTable[row][column] ? 'click' : 'empty'
  })
  let classNumber = 'item item-'+text;

  function clickSpan(){
    setState({spanState:'click'})
  }

  function changeSpan(){
    console.log('changeSpan:', state.spanState,state.spanState==='empty');
    if(state.spanState==='empty'){
      setState({spanState:'bomb'})
    }else{
      setState({spanState:'empty'})
    }
  }

  function getSpanClass() {
    let classSpan = 'item__span ';

    if(state.spanState==='click'){
      classSpan+= 'item__span--click';
    }

    if(state.spanState==='bomb'){
      classSpan+= 'item__span--bomb';
    }

    return classSpan
  }

  return (
    <td className={classNumber}>
      {text}
      <span 
        className={getSpanClass()} 
        onClick={clickSpan}
        onContextMenu={changeSpan}>
        <img src={flag} alt="flag" />
      </span>
    </td>
  )
}


export default GameItem;