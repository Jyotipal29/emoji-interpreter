import React, { useState } from "react";
import "./styles.css";

const emojiDb = {
  "🤫": "Shushing Face ",
  "🤐": " Zipper-Mouth Face",
  "😯": " Hushed Face",
  "😘": "Face Blowing a Kiss ",
  "😉": " Winking Face",
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face ",
  "😆 ": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😋": "Face Savoring Food",
  "😜": " Winking Face with Tongue ",
  "🤪 ": "Zany Face",
  "🤑 ": "Money-Mouth Face",
  "😐": "Neutral Face",
  "🤔": "Thinking Face",
  "😑": "Expressionless Face",
  "😏": "Smirking Face",
  "😒 ": "Unamused Face"
};

const emojisWeKnow = Object.keys(emojiDb);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDb[userInput];
    // setMeaning(meaning);
    if (meaning in emojiDb) {
      setMeaning(meaning);
    } else if (userInput === " ") {
      setMeaning(" enter emoji");
    } else {
      setMeaning("we dont have that emoji yet!");
    }
  }
  function emojiCliCkHandler(emoji) {
    var meaning = emojiDb[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="containerCenter">
        <header>
          <h1 className="header">Emoji Interpreter</h1>
        </header>

        <input onChange={emojiInputHandler} className="inputClass" />

        <div>
          <h1 className="meaningClass"> {meaning}</h1>
        </div>
        <div>
          <h3 className="listHeader">
            Most used Emojis <span>(Click to get the meaning)</span>
          </h3>
        </div>

        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              className="emoji"
              onClick={() => emojiCliCkHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
