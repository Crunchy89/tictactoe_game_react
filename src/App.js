import React,{useState} from "react"
const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square(props) {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={!props.disable ? ()=>props.onClick(props.index) : ()=>{}}
      >
      {props.text}
    </div>
  );
}

function Board() {
  const [x,setX]=useState([])
  const [y,setY]=useState([])
  const [winX,setWinX]=useState(false)
  const [winY,setWinY]=useState(false)
  const [change,setChange]=useState(true)
  const [disable,setDisable]=useState(false)

  React.useEffect(()=>{
    // check if x include 1,2,3 or 4,5,6 or 7,8,9 or 1,4,5 or 2,5,8 or 3,6,9 or 1,5,9 or 3,5,7 in its array
    if(x.length>=3){
      if((x.includes(1)&&x.includes(2)&&x.includes(3))||(x.includes(4)&&x.includes(5)&&x.includes(6))||(x.includes(7)&&x.includes(8)&&x.includes(9))||(x.includes(1)&&x.includes(4)&&x.includes(7))||(x.includes(2)&&x.includes(5)&&x.includes(8))||(x.includes(3)&&x.includes(6)&&x.includes(9))||(x.includes(1)&&x.includes(5)&&x.includes(9))||(x.includes(3)&&x.includes(5)&&x.includes(7))){
        setWinX(true)
        setWinY(false)
        setDisable(true)
      }
    }
    // check if y include 1,2,3 or 4,5,6 or 7,8,9 or 1,4,5 or 2,5,8 or 3,6,9 or 1,5,9 or 3,5,7 in its array
    if(y.length>=3){
      if((y.includes(1)&&y.includes(2)&&y.includes(3))||(y.includes(4)&&y.includes(5)&&y.includes(6))||(y.includes(7)&&y.includes(8)&&y.includes(9))||(y.includes(1)&&y.includes(4)&&y.includes(7))||(y.includes(2)&&y.includes(5)&&y.includes(8))||(y.includes(3)&&y.includes(6)&&y.includes(9))||(y.includes(1)&&y.includes(5)&&y.includes(9))||(y.includes(3)&&y.includes(5)&&y.includes(7))){
        setWinX(false)
        setWinY(true)
        setDisable(true)
      }
    }
  },[x,y])

  const handleClick=(i)=>{
    if(x.length === y.length){
        if(!x.includes(i) && !y.includes(i)){
          setChange(!change)
          setX([...x,i])
        }
      }else{
          if(!y.includes(i)&& !x.includes(i)){
      setChange(!change)
        setY([...y,i])
      }
    }
  }
  const handleReset=()=>{
    setY([])
    setX([])
    setWinX(0)
    setWinY(0)
  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{change ? "X" : "Y" }</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winX ? "X" : (winY ? "Y" : "NONE") }</span></div>
      <button onClick={handleReset} style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square text={x.includes(1)? "X" : (y.includes(1)?"O":"")} disable={disable} index={1} onClick={handleClick} />
          <Square text={x.includes(2) ? "X" :(y.includes(2)?"O":"")} disable={disable} index={2} onClick={handleClick} />
          <Square text={x.includes(3)? "X" : (y.includes(3)?"O":"")} disable={disable} index={3} onClick={handleClick} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square text={x.includes(4)? "X" : (y.includes(4)?"O":"")} disable={disable} index={4} onClick={handleClick} />
          <Square text={x.includes(5)? "X" : (y.includes(5)?"O":"")} disable={disable} index={5} onClick={handleClick} />
          <Square text={x.includes(6)? "X" : (y.includes(6)?"O":"")} disable={disable} index={6} onClick={handleClick} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square text={x.includes(7)? "X" : (y.includes(7)?"O":"")} disable={disable} index={7} onClick={handleClick} />
          <Square text={x.includes(8)? "X" : (y.includes(8)?"O":"")} disable={disable} index={8} onClick={handleClick} />
          <Square text={x.includes(9)? "X" : (y.includes(9)?"O":"")} disable={disable} index={9} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
export default App;
