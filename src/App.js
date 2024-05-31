//Following this tutorial => https://youtu.be/lYtPscvwgP4?si=uslCXKQJDGpo9I5B

//Keyboard Shortcuts:
//M on tabs means "Modified" since last commit
// CTRL + J = Show or Hide Terminal
// For Intellisense to auto import, must have page to import open in VSC tabs
//To run ReactApp in Browser : CTRL + J => npm run dev => Ctrl + Click on Port:3000 link
//To run anything in Terminal while App running: Ctrl + J => + => use Powershell
//Alt + Click = Multi-cursor mode
//Alt + Shift + Down Arrow = Duplicate Current Line to Below this Line
//Emmet Abbreviations and dot notation USABLE!
//CTRL + Enter =  Newline
//rfc => Tab creates a React Functional Component
//usf => Tab creates a new State Variable using the State Hook
//npm run start (in terminal) - starts browser in this version of React

//Customize App.js: 
//Remove logo import statement at top
//Remove Header tag and contents
//Remove class and classnames from div

//Change Browser Tab Name:
//Renamed Title of Project in public -> index.html -> <title>React App</title> => changed to "TicTacToe"

//Creating the File Structure:
//in src => new folder => "Components"
//in Components folder => new folder => "Assets"
//in Components folder => new folder => "TicTacToe"
//in TicTacToe folder => new file => "TicTacToe.jsx"
    //setting up TicTacToe.jsx notes in TicTacToe.jsx file
//in TicTacToe folder => new file => "TicTacToe.css"
    //setting up TicTacToe.css notes in TicTacToe.css file
//Add TicTacToe to this (App.js) in the provided <div> </div> below (If tab still open, will auto-import)
//Download Assets zipfile from Youtube Video Description => Open in File Explorer => Extract All => Dive in to end of file path => Ctrl + C needed Images => Navigate to tictactoe folder on Computer => src => Components => Assets => Ctrl + V to paste images in Assets folder
//Go Back to TicTacToe.jsx file for Next Steps...


import './App.css';
import TicTacToe from './Components/TicTacToe/TicTacToe';

function App() {
  return (
    <div>
     <TicTacToe/>

    </div>
  );
}

export default App;

