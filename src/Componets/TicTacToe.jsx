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
    if (buttonCopy[index] === "" && !winner) {
      buttonCopy[index] = CurruntPlayer;
      console.log(buttonCopy);
      setButtonList(buttonCopy);
      setCurruntPlayer(CurruntPlayer === "X" ? "O" : "X");
      if (checkWinner(CurruntPlayer, buttonCopy)) {
        setWinner(true);
        setMsg(`${CurruntPlayer} Is Winner !!`);
      } else {
        if (checkDraw(buttonCopy)) {
          setMsg("Match Draw !");
        }
      }
    }
  };

  const restartGame = () => {
    setMsg("Start New Game !!");
    setButtonList(Array(9).fill(""));
    setCurruntPlayer("X");
    setWinner(false);
  };

  const checkWinner = (CurruntPlayer, buttonList) => {
    for (let i = 0; i < winChance.length; i++) {
      let [a, b, c] = winChance[i];
      if (
        buttonList[a] === CurruntPlayer &&
        buttonList[b] === CurruntPlayer &&
        buttonList[c] === CurruntPlayer
      ) {
        return true;
      }
    }
    return false;
  };

  const checkDraw = (buttonList) => {
    return buttonList.every((button) => button !== "");
  };
  return (
    <>
      <div className="mainBox">
        <h1>TIC TAC TOE</h1>
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
