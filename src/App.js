import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import {Button} from 'react-bootstrap-buttons';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
      


  return (

    
    <div id="app">
      <Router>
        <div>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <br></br>
            <br></br>
            
            <li><Link to="/player">Play the Game</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/player">
              <Player />
            </Route>
            <Route path="/startGame">
              <Board />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="container-fluid">
      <header className="h3">
        Connect 4
      </header><br/>
      <h4>Connect Four (also known as Four Up, Plot Four, Find Four, Captain's Mistress, Four in a Row, Drop Four, and Gravitrips
         in the Soviet Union) is a two-player connection board game, in which the players choose a color and then take turns dropping 
         colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest
          available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line
           of four of one's own discs. Connect Four is a solved game. The first player can always win by playing the right moves.</h4>
           <br></br>
           <h5>The game was first sold under the Connect Four trademark[3] by Milton Bradley in February 1974.</h5>
           <br></br>
           
           <h5><a href="https://www.youtube.com/watch?v=utXzIFEVPjA">How to play</a></h5>
    </div>
  );
}

class Player extends React.Component {
  constructor(props){
    super(props);
    this.state={
      player1:"",
      player2:"",
      clr1:"",
      clr2:""
    }
  }
  render(){
    return (
      <div className="container-fluid">
        <header className="h3">Welcome Players</header><br/>
        <div className="row">
          <div className="col-sm-6">
            <input className="form-control" type="text" onChange={this.read} name="player1" value={this.state.player1} placeholder="Player 1"/>
          </div>
          <div className="col-sm-6">
            <input className="form-control" type="text" onChange={this.read} name="player2" value={this.state.player2} placeholder="Player 2"/><br/>
          </div>
          <div id="clr" className="col-sm-3">
            <input onChange={this.readbtn} id="r1" type="radio" name="clr1" value="red"/>
            <label>Red</label>

            <input onChange={this.readbtn} id="y1" type="radio" name="clr1" value="yellow"/>
            <label>Yellow</label><br/>

            <input onChange={this.readbtn} id="g1" type="radio" name="clr1" value="green"/>
            <label>Green</label><br/>

            <input onChange={this.readbtn} id="b1" type="radio" name="clr1" value="blue"/>
            <label>Blue</label>
          </div>
          <div className="col-sm-3"></div>
          <div className="col-sm-3">
            <input onChange={this.readbtn} id="r2" type="radio" name="clr2" value="red"/>
            <label>Red</label><br/>

            <input onChange={this.readbtn} id="y2" type="radio" name="clr2" value="yellow"/>
            <label>Yellow</label><br/>

            <input onChange={this.readbtn} id="g2" type="radio" name="clr2" value="green"/>
            <label>Green</label><br/>

            <input onChange={this.readbtn} id="b2" type="radio" name="clr2" value="blue"/>
            <label>Blue</label>
          </div>      
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-2">
          {/* <Button id="sg" onClick={this.save}>Save</Button> */}
          <Link to="/startGame">
            <Button id="sg" onClick={this.save}>Start Game</Button>
          </Link>
          <Switch>
            <Route path="/startGame">
              <Board />
            </Route>
          </Switch>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    );
  }

  read = (ele) =>{
    this.setState({[ele.target.name]:ele.target.value})
  }

  readbtn=()=>{
    if (document.getElementById('r1').checked){
      var clr1 = document.getElementById('r1').value;
    }
    if (document.getElementById('y1').checked){
      clr1 = document.getElementById('y1').value;
    }
    if (document.getElementById('g1').checked){
      clr1 = document.getElementById('g1').value;
    }
    if (document.getElementById('b1').checked){
      clr1 = document.getElementById('b1').value;
    }

    if (document.getElementById('r2').checked){
      var clr2 = document.getElementById('r2').value;
    }
    if (document.getElementById('y2').checked){
      clr2 = document.getElementById('y2').value;
    }
    if (document.getElementById('g2').checked){
      clr2 = document.getElementById('g2').value;
    }
    if (document.getElementById('b2').checked){
      clr2 = document.getElementById('b2').value;
    }
    this.setState({clr1:clr1, clr2:clr2})
  }

  save=()=>{
    window.clr1=this.state.clr1
    window.clr2=this.state.clr2
    window.player1=this.state.player1
    window.player2=this.state.player2
  }
}

function Board() {
  return (
  <div id="board">
    
    <div id="txt"><span id="plr"></span></div><br/>
    <table id="table">
      <tbody>
        <tr>
          {/* Top most btns */}
        <td><button id="1" onClick={clickHandler} className="square"></button></td>
        <td><button id="2" onClick={clickHandler} className="square"></button></td>
        <td><button id="3" onClick={clickHandler} className="square"></button></td>
        <td><button id="4" onClick={clickHandler} className="square"></button></td>
        <td><button id="5" onClick={clickHandler} className="square"></button></td>
        <td><button id="6" onClick={clickHandler} className="square"></button></td>
        <td><button id="7" onClick={clickHandler} className="square"></button></td>
        </tr>

        <tr>
        <td><button id="8" onClick={clickHandler} className="square"></button></td>
        <td><button id="9" onClick={clickHandler} className="square"></button></td>
        <td><button id="10" onClick={clickHandler} className="square"></button></td>
        <td><button id="11" onClick={clickHandler} className="square"></button></td>
        <td><button id="12" onClick={clickHandler} className="square"></button></td>
        <td><button id="13" onClick={clickHandler} className="square"></button></td>
        <td><button id="14" onClick={clickHandler} className="square"></button></td>
        </tr>

        <tr>
        <td><button id="15" onClick={clickHandler} className="square"></button></td>
        <td><button id="16" onClick={clickHandler} className="square"></button></td>
        <td><button id="17" onClick={clickHandler} className="square"></button></td>
        <td><button id="18" onClick={clickHandler} className="square"></button></td>
        <td><button id="19" onClick={clickHandler} className="square"></button></td>
        <td><button id="20" onClick={clickHandler} className="square"></button></td>
        <td><button id="21" onClick={clickHandler} className="square"></button></td>
        </tr>

        <tr>
        <td><button id="22" onClick={clickHandler} className="square"></button></td>
        <td><button id="23" onClick={clickHandler} className="square"></button></td>
        <td><button id="24" onClick={clickHandler} className="square"></button></td>
        <td><button id="25" onClick={clickHandler} className="square"></button></td>
        <td><button id="26" onClick={clickHandler} className="square"></button></td>
        <td><button id="27" onClick={clickHandler} className="square"></button></td>
        <td><button id="28" onClick={clickHandler} className="square"></button></td>
        </tr>

        <tr>
        <td><button id="29" onClick={clickHandler} className="square"></button></td>
        <td><button id="30" onClick={clickHandler} className="square"></button></td>
        <td><button id="31" onClick={clickHandler} className="square"></button></td>
        <td><button id="32" onClick={clickHandler} className="square"></button></td>
        <td><button id="33" onClick={clickHandler} className="square"></button></td>
        <td><button id="34" onClick={clickHandler} className="square"></button></td>
        <td><button id="35" onClick={clickHandler} className="square"></button></td>
        </tr>

        <tr>
        <td><button id="36" onClick={clickHandler} className="square"></button></td>
        <td><button id="37" onClick={clickHandler} className="square"></button></td>
        <td><button id="38" onClick={clickHandler} className="square"></button></td>
        <td><button id="39" onClick={clickHandler} className="square"></button></td>
        <td><button id="40" onClick={clickHandler} className="square"></button></td>
        <td><button id="41" onClick={clickHandler} className="square"></button></td>
        <td><button id="42" onClick={clickHandler} className="square"></button></td>
        {/* Botton most btms */}
        </tr>
      </tbody>
    </table>
  </div>
  )
}

var turn=0;
var turn1=0;
var turn2=0;
var col1=0;
var col2=0;
var col3=0;
var col4=0;
var col5=0;
var col6=0;
var col7=0;
let arr=[
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ]
var e=0;
var plr=window.player1;
var clr="";
var winner=false
var win=""


function clickHandler(ele){
  turn++
  console.log(arr)
  
  if (turn%2===0){
    document.getElementById("plr").innerHTML = "Turn of Player1: "+plr
    console.log(turn)
    plr = window.player1
    clr = window.clr2
    e=1
    win=window.player2
    turn2++;
  } else {
    document.getElementById("plr").innerHTML = "Turn of Player2: "+plr
    console.log(turn)
    plr = window.player2
    clr = window.clr1
    e=2
    win=window.player1
    turn1++;
  }
  // document.getElementById("plr").innerHTML = "Turn: "+plr
  // console.log(turn)

  if(ele.target.id ==="1" || ele.target.id ==="8" || ele.target.id ==="15" || ele.target.id ==="22" || 
    ele.target.id ==="29" || ele.target.id ==="36"){
    col1++;
    console.log(col1)
    if(col1===1){
      document.getElementById("36").style.backgroundColor=clr;
      arr[5][0]=e
    }
    if(col1===2){
      document.getElementById("29").style.backgroundColor=clr;
      arr[4][0]=e      
    }
    if(col1===3){
      document.getElementById("22").style.backgroundColor=clr;
      arr[3][0]=e
    }
    if(col1===4){
      document.getElementById("15").style.backgroundColor=clr;
      arr[2][0]=e
    }
    if(col1===5){
      document.getElementById("8").style.backgroundColor=clr;
      arr[1][0]=e
    }
    if(col1===6){
      document.getElementById("1").style.backgroundColor=clr;
      arr[0][0]=e

      document.getElementById("36").disabled = true;
      document.getElementById("29").disabled = true;
      document.getElementById("22").disabled = true;
      document.getElementById("15").disabled = true;
      document.getElementById("8").disabled = true;
      document.getElementById("1").disabled = true;
    }
  }

  if(ele.target.id ==="2" || ele.target.id ==="9" || ele.target.id ==="16" || ele.target.id ==="23" || 
  ele.target.id ==="30" || ele.target.id ==="37"){
    col2++;
    console.log(col2)
    if(col2===1){
      document.getElementById("37").style.backgroundColor=clr;
      arr[5][1]=e
    }
    if(col2===2){
      document.getElementById("30").style.backgroundColor=clr;
      arr[4][1]=e      
    }
    if(col2===3){
      document.getElementById("23").style.backgroundColor=clr;
      arr[3][1]=e
    }
    if(col2===4){
      document.getElementById("16").style.backgroundColor=clr;
      arr[2][1]=e
    }
    if(col2===5){
      document.getElementById("9").style.backgroundColor=clr;
      arr[1][1]=e
    }
    if(col2===6){
      document.getElementById("2").style.backgroundColor=clr;
      arr[0][1]=e

      document.getElementById("37").disabled = true;
      document.getElementById("30").disabled = true;
      document.getElementById("23").disabled = true;
      document.getElementById("16").disabled = true;
      document.getElementById("9").disabled = true;
      document.getElementById("2").disabled = true;
    }
  }

  if(ele.target.id ==="3" || ele.target.id ==="10" || ele.target.id ==="17" || ele.target.id ==="24" || 
  ele.target.id ==="31" || ele.target.id ==="38"){
    col3++;
    console.log(col3)
    if(col3===1){
      document.getElementById("38").style.backgroundColor=clr;
      arr[5][2]=e
    }
    if(col3===2){
      document.getElementById("31").style.backgroundColor=clr;
      arr[4][2]=e      
    }
    if(col3===3){
      document.getElementById("24").style.backgroundColor=clr;
      arr[3][2]=e
    }
    if(col3===4){
      document.getElementById("17").style.backgroundColor=clr;
      arr[2][2]=e
    }
    if(col3===5){
      document.getElementById("10").style.backgroundColor=clr;
      arr[1][2]=e
    }
    if(col3===6){
      document.getElementById("3").style.backgroundColor=clr;
      arr[0][2]=e

      document.getElementById("38").disabled = true;
      document.getElementById("31").disabled = true;
      document.getElementById("24").disabled = true;
      document.getElementById("17").disabled = true;
      document.getElementById("10").disabled = true;
      document.getElementById("3").disabled = true;
    }
  }

  if(ele.target.id ==="4" || ele.target.id ==="11" || ele.target.id ==="18" || ele.target.id ==="25" || 
  ele.target.id ==="32" || ele.target.id ==="39"){
    col4++;
    console.log(col4)
    if(col4===1){
      document.getElementById("39").style.backgroundColor=clr;
      arr[5][3]=e
    }
    if(col4===2){
      document.getElementById("32").style.backgroundColor=clr;
      arr[4][3]=e      
    }
    if(col4===3){
      document.getElementById("25").style.backgroundColor=clr;
      arr[3][3]=e
    }
    if(col4===4){
      document.getElementById("18").style.backgroundColor=clr;
      arr[2][3]=e
    }
    if(col4===5){
      document.getElementById("11").style.backgroundColor=clr;
      arr[1][3]=e
    }
    if(col4===6){
      document.getElementById("4").style.backgroundColor=clr;
      arr[0][3]=e

      document.getElementById("39").disabled = true;
      document.getElementById("32").disabled = true;
      document.getElementById("25").disabled = true;
      document.getElementById("18").disabled = true;
      document.getElementById("11").disabled = true;
      document.getElementById("4").disabled = true;
    }
  }

  if(ele.target.id ==="5" || ele.target.id ==="12" || ele.target.id ==="19" || ele.target.id ==="26" || 
  ele.target.id ==="33" || ele.target.id ==="40"){
    col5++;
    console.log(col5)
    if(col5===1){
      document.getElementById("40").style.backgroundColor=clr;
      arr[5][4]=e
    }
    if(col5===2){
      document.getElementById("33").style.backgroundColor=clr;
      arr[4][4]=e      
    }
    if(col5===3){
      document.getElementById("26").style.backgroundColor=clr;
      arr[3][4]=e
    }
    if(col5===4){
      document.getElementById("19").style.backgroundColor=clr;
      arr[2][4]=e

    }
    if(col5===5){
      document.getElementById("12").style.backgroundColor=clr;
      arr[1][4]=e
    }
    if(col5===6){
      document.getElementById("5").style.backgroundColor=clr;
      arr[0][4]=e

      document.getElementById("40").disabled = true;
      document.getElementById("33").disabled = true;
      document.getElementById("26").disabled = true;
      document.getElementById("19").disabled = true;
      document.getElementById("12").disabled = true;
      document.getElementById("5").disabled = true;
    }
  }

  if(ele.target.id ==="6" || ele.target.id ==="13" || ele.target.id ==="20" || ele.target.id ==="27" || 
  ele.target.id ==="34" || ele.target.id ==="41"){
    col6++;
    console.log(col6)
    if(col6===1){
      document.getElementById("41").style.backgroundColor=clr;
      arr[5][5]=e
    }
    if(col6===2){
      document.getElementById("34").style.backgroundColor=clr;
      arr[4][5]=e      
    }
    if(col6===3){
      document.getElementById("27").style.backgroundColor=clr;
      arr[3][5]=e
    }
    if(col6===4){
      document.getElementById("20").style.backgroundColor=clr;
      arr[2][5]=e
    }
    if(col6===5){
      document.getElementById("13").style.backgroundColor=clr;
      arr[1][5]=e
    }
    if(col6===6){
      document.getElementById("6").style.backgroundColor=clr;
      arr[0][5]=e

      document.getElementById("41").disabled = true;
      document.getElementById("34").disabled = true;
      document.getElementById("27").disabled = true;
      document.getElementById("20").disabled = true;
      document.getElementById("13").disabled = true;
      document.getElementById("6").disabled = true;
    }
  }

  if(ele.target.id ==="7" || ele.target.id ==="14" || ele.target.id ==="21" || ele.target.id ==="28" || 
  ele.target.id ==="35" || ele.target.id ==="42"){
    col7++;
    console.log(col7)
    if(col7===1){
      document.getElementById("42").style.backgroundColor=clr;
      arr[5][6]=e
    }
    if(col7===2){
      document.getElementById("35").style.backgroundColor=clr;
      arr[4][6]=e      
    }
    if(col7===3){
      document.getElementById("28").style.backgroundColor=clr;
      arr[3][6]=e
    }
    if(col7===4){
      document.getElementById("21").style.backgroundColor=clr;
      arr[2][6]=e
    }
    if(col7===5){
      document.getElementById("14").style.backgroundColor=clr;
      arr[1][6]=e
    }
    if(col7===6){
      document.getElementById("7").style.backgroundColor=clr;
      arr[0][6]=e

      document.getElementById("42").disabled = true;
      document.getElementById("35").disabled = true;
      document.getElementById("28").disabled = true;
      document.getElementById("21").disabled = true;
      document.getElementById("14").disabled = true;
      document.getElementById("7").disabled = true;
    }
  }

    // Vertical Condition
    for (let r=0; r<3; r++){
      for (let c=0; c<7; c++){
        if (arr[r][c] !== 0 && arr[r][c] === arr[r+1][c] && arr[r][c] === arr[r+2][c] && arr[r][c] === arr[r+3][c]){
          winner=true;
          console.log(winner)
        }
      }
    }
  
    // Horizontal Condition
    for (let r=0; r<6; r++){
      for (let c=0; c<4; c++){
        if (arr[r][c] !== 0 && arr[r][c] === arr[r][c+1] && arr[r][c] === arr[r][c+2] && arr[r][c] === arr[r][c+3]){
          winner=true;
          console.log(winner)
        }
      }
    }
  
    // Right-up Condition
    for (let r=0; r<3; r++){
      for (let c=0; c<4; c++){
        if (arr[r][c] !== 0 &&  arr[r][c] === arr[r+2][c+2] && arr[r][c] === arr[r+3][c+3]){
          winner=true;
          console.log(winner)
        }
      }
    }
  
    // Right-down Condition
    for (let r=3; r<6; r++){
      for (let c=0; c<4; c++){
        if (arr[r][c] !== 0 && arr[r][c] === arr[r-2][c+2] && arr[r][c] === arr[r-3][c+3]){
          winner=true;
          console.log(winner)
        }
      }
    }

    if (winner===true){
      if(win===window.player2){
      document.getElementById("plr").innerHTML = "Winner: "+ "Player2 " + " " +"Total turns: " + turn2
      }
      else {
        document.getElementById("plr").innerHTML = "Winner: "+ "Player1 " + " " +"Total turns: " + turn1
      }

    }
}

export default App;
