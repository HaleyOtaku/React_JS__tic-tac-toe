//rafc => Tab
//add import React from 'react'
//remove Export from const TicTacToe
//add export default TicTacToe at bottom
//remove text from provided div and open it up

import React from "react"
import './TicTacToe.css'
//Continue from App.js after adding Images to Assets folder HERE:
//Import images just uploaded to Assets folder as below...
import  circle_icon from '../Assets/circle.png'
import  cross_icon from '../Assets/cross.png'
//then, give div below a classname of 'container'
//inside div, h1.title => Tab => 'Tic Tac Toe Game In (span => Tab => "React")'
//make new (div.board => Tab) below h1
//in-between the two closing div tags, (button.reset => Tab => "Reset")
//Go to Index.css for Next Steps...

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">

      </div>
      <button className="reset">Reset</button>
    </div> 
  )
}

export default TicTacToe