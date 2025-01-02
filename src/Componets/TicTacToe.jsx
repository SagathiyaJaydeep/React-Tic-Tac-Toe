import React, { useState } from "react";

function TicTacToe() {
  const [buttonList, setButtonList] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const dataSetHandler = (index) => {
    let buttonCopy = [...buttonList];
    if (buttonCopy[index] === "") {
      let turnCopy = turn;
      turnCopy = turnCopy === "X" ? "O" : "X";
      setTurn(turnCopy);
      buttonCopy[index] = turn;
      setButtonList(buttonCopy);
    }
  };

  return (
    <>
      <div className="mainBox">
        <div className="box">
          {buttonList.map((el, i) => (
            <button key={i} onClick={() => dataSetHandler(i)}>
              {el}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
