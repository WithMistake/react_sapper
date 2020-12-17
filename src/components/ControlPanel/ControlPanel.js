

function ControlPanel({ isPlay, onRestart }) {
  const smileFace = isPlay ? '(-_-)' : '(x_x)';

  return (
    <div className="controll">
      <div className="controll__countbomb">010</div>
      <button className="controll__restart" onClick={onRestart}>{smileFace}</button>
      <div className="controll__score">000</div>  
    </div>
  )
}


export default ControlPanel;