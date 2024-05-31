//rafc => Tab
//add import React from 'react'
//remove Export from const TicTacToe
//add export default TicTacToe at bottom
//remove text from provided div and open it up

import React from "react"
import './TicTacToe.css'
//Continue from App.js after adding Images to Assets folder HERE:
//Import images just uploaded to Assets folder as below...
//Import useState and useRef from "react"
import  circle_icon from '../Assets/circle.png'
import  cross_icon from '../Assets/cross.png'
import { useState, useRef } from "react"

let data = ["", "" , "", "", "", "", "", "", ""];

//then, give div below a classname of 'container'
//inside div, h1.title => Tab => 'Tic Tac Toe Game In (span => Tab => "React")'
//make new (div.board => Tab) below h1
//in-between the two closing div tags, (button.reset => Tab => "Reset")
//Go to Index.css for Next Steps...
//Return to HERE from TicTacToe.css (After styling Reset button)
//in div classname board => div.row1 => Tab => div.boxes => Tab
//(Alt + Shift + Down Arrow)*2 from div.boxes (for a total of 3)
//copy row1 and paste two times below row1
//rename the second row1 => row2
//rename the third row1 => row3
//Go to TicTacToe.css for Next Steps...
//Return HERE from TicTacToe.jsx where we JUST styled "board"
//below the import statements, create an array named data (let data = ["", "" , ])
//create an arrow function called toggle (for our boxes), in the hook section between const and return
//Add two new State Variables using(=) State Hooks with usf -> Tab
//Add onClick listener with toggle function to each div with box classname, and change each index(e) #
//Test in Browser with npm run start in CTRL+J terminal
//Test should start with X when you click and switch to O after, and back and forth until the board's full
//Go to TicTacToe.css for Next Steps...

const TicTacToe = () => {

  //Hooks - Special functions that do a certain job
  //You can tell a hook by its name because it starts with the word "use"
  //Gives us a way to make a reactive value and also provides us with a way to change that value whenever we want.
  //In order to use this "useState" hook, first we need to import it at the top

  //usf -> Tab, initialize useState at 0
  //[variable name, name of function we can use to change useStates initial value] (BELOW)
 let [count, setCount] = useState(0);
 let [lock, setLock] = useState(false);
 let titleRef = useRef(null);
 let box1 = useRef(null);
 let box2 = useRef(null);
 let box3 = useRef(null);
 let box4 = useRef(null);
 let box5 = useRef(null);
 let box6 = useRef(null);
 let box7 = useRef(null);
 let box8 = useRef(null);
 let box9 = useRef(null);

 let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

 //Functions
 //Toggle function
  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}'>`
      data[num] = "x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  }

//Return HERE only AFTER adding styling to .boxes img in TicTacToe.css
//Create another arrow function which will check for the winner after every move (checkWin)
//Create another arrow function that will be executed only when any player wins (win)
//Add If statements (to checkWin) that check if every row/column has a three across match and isn't empty
//Now we call our checkWin function after every onClick(in our toggle func above)
//Functionality Check Point!: Application should now allow the placement of more X or O, after someone has won the game. If the browser isn't running anymore to be able to test this, CTRL+J => npm run start

//After Functionality Check Point:
//We are going to make a reference for our title using use ref
//Go to the Hooks section and make a new variable : let titleRef = useRef(null) 
//and initialize useRef with null as its default value.
//In the title classname below, add a ref={titleRef}
//Revisit the won function below and add an if statement to check who the winner is, and then display the letter that one as the winner
//Revisit checkWin and add an index to won(data[]) where the index is the last letter placed that won the player the game (the letter that was placed last, AKA the one that !== "")
//FUNCTIONALITY CHECKPOINT: Make sure your program displays who won at the top, correctly.

//After Functionality Check Point:
//Go to TicTacToe.css for Next Steps...
//Return HERE only AFTER adding styling to .title img in TicTacToe.css
//after the won arrow function, add a new arrow function to add functionality for the Reset button in.
//name the arrow function reset
//setLock to false so that a player can once again place X and Os on the board
//reset data to equal an empty array, therefore wiping the playing board
//reset the display title to Tic Tac Toe In React (with the span that colors the word React)
//scroll to bottom of this file and add an onClick listener to the "reset" button
//add an arrow function to the brackets of the onClick listener and call the (reset function) => reset()
//FUNCTIONALITY CHECKPOINT: Make sure your program's title resets to TicTacToe In React when the "Reset" button is clicked. The Xs and Os should not yet erase at this point.

//After Functionality Check Point:
//In the Hooks section of this page, add a reference to each of the 9 boxes on the board
//let box1 =  useRef(null) <= initialize them as empty (null)
//next, below all of the box references, store them in a new array called box_array, and add all the box references to the array
//attach the box references to the divs with classname of boxes (with ref={box1}...etc.)
//then, in the reset arrow function, parse the box_array using the .map method (box_array.map((e)=>{}))
//inside of the arrow function that is nested within the box_array.map... change e.current.innerHTML = ""; (to reset the values of the boxes to an empty string)
//FUNCTIONALITY CHECKPOINT: When pressing "Reset" button, title should return to original title and box content should clear. If this is true for your app...
//Project Is Complete!

  const checkWin = () => {
    //IF Top LEFT Square = Top MIDDLE Square = Top RIGHT Square 
    //AND Top RIGHT Square (and by equality sake, all three of them) are not empty
    //Horizontal Row Wins Below
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
      won(data[2]);
    }//ELSE IF entire second row is === (strict equals) and the last square isn't empty
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
      won(data[5]);
    }//ELSE IF entire third row is === (strict equals) and the last square isn't empty
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
      won(data[8]);
    }//Vertical Column Wins Below : 
    //ELSE IF entire first column is === (strict equals) and the last square isn't empty
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
      won(data[6]);
    }//ELSE IF entire second column is === (strict equals) and the last square isn't empty
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
      won(data[7]);
    }//ELSE IF entire third column is === (strict equals) and the last square isn't empty
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
      won(data[8]);
    }//Diagonal Wins Below :
    //ELSE IF entire TOP LEFT-RIGHT DOWN Diagonal is === (strict equals) and the last square isn't empty
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
      won(data[8]);
    }//ELSE IF entire TOP RIGHT-LEFT DOWN Diagonal is === (strict equals) and the last square isn't empty
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
      won(data[6]);
    }
  }

  //Function ONLY EXECUTED upon any player WINNING
  const won = (winner) => {
    //Setting lock to true, so the data (boxes data) cannot be modified after a win
    setLock(true);
    if(winner === "x"){
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Wins!`;
    }
    else{
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Wins!`;
    }
  }

  const reset = () => {
    //Setting lock to false, so the data can be modified after pressing Reset button
    setLock(false);
    //Also reset the data variable that holds the information about where X and O have been placed on the board (AKA : wipe the board)
    data = ["", "" , "", "", "", "", "", "", ""];
    //Updating our title from Congrats Winner to:
    titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
    box_array.map((e)=>{
      e.current.innerHTML = "";
    })
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => {toggle(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e) => {toggle(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e) => {toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => {toggle(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e) => {toggle(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e) => {toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => {toggle(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e) => {toggle(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e) => {toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div> 
  )
}

export default TicTacToe