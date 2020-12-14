import React from 'react'


function GameItem({ text }) {
  let [state, setState] = React.useState({
    spanState: 'empty'
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
      </span>
    </td>
  )
}


export default GameItem;