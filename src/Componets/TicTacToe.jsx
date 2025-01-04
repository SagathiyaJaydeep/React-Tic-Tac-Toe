import React, { useState } from "react";

function TicTacToe() {
  const [buttonList, setButtonList] = useState(Array(9).fill(""));
  const [CurruntPlayer, setCurruntPlayer] = useState("X");
  const [msg, setMsg] = useState("");
  const [winner, setWinner] = useState(false);
  const winChance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const dataSetHandler = (index) => {
    let buttonCopy = [...buttonList];
    if (buttonCopy[index] === "") {
      let turnCopy = CurruntPlayer;
      turnCopy = turnCopy === "X" ? "O" : "X";
      setCurruntPlayer(turnCopy);
      buttonCopy[index] = CurruntPlayer;
      setButtonList(buttonCopy);
      checkWinner(CurruntPlayer);
    }
  };

  const restartGame = () => {
    setMsg("Start New Game !!");
    if (buttonList !== "") {
      setButtonList(Array(9).fill(""));
    }
  };

  const checkWinner = (CurruntPlayer) => {
    console.log(CurruntPlayer);
  };

  return (
    <>
      <div className="mainBox">
        <div className="box">
          {buttonList.map((el, i) => (
            <button key={i} className="btn" onClick={() => dataSetHandler(i)}>
              {el}
            </button>
          ))}
        </div>
        <h3>{msg}</h3>
        <button className="restart-btn" onClick={() => restartGame()}>
          Restart
        </button>
      </div>
    </>
  );
}

export default TicTacToe;
