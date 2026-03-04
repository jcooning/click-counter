// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: dark ? "#222" : "#f5f5f5",
//         color: dark ? "#fff" : "#000",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         transition: "0.3s",
//       }}
//     >
//       <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

//       <button onClick={() => setDark(!dark)}>모드변경</button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: dark ? "#222" : "#f5f5f5",
//         color: dark ? "#fff" : "#000",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         transition: "0.3s",
//       }}
//     >
//       <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

//       <button onClick={() => setDark((prev) => !prev)}>
//         {dark ? "라이트로" : "다크로"}
//       </button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const messages = [
//     "오늘도 작은 성장",
//     "기초가 결국 실력이다",
//     "꾸준함이 재능을 이긴다",
//     "한 줄이라도 치자",
//     "포기만 안 하면 된다",
//   ];

//   const [current, setCurrent] = useState("");

//   const pickMessage = () => {
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     setCurrent(messages[randomIndex]);
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//         gap: 20,
//       }}
//     >
//       <h1>랜덤 한마디</h1>

//       <p style={{ fontSize: "20px" }}>{current}</p>

//       <button onClick={pickMessage}>한 줄 받기</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   const isOver = text.length > 20;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         fontFamily: "sans-serif",
//         gap: 20,
//       }}
//     >
//       <h1>글자 수 체크</h1>

//       <input
//         value={text}
//         onChange={(e) => {
//           if (e.target.value.length <= 20) {
//             setText(e.target.value);
//           }
//         }}
//         placeholder="20자 이내로 입력"
//         style={{
//           padding: 10,
//           width: 250,
//         }}
//       />

//       <p
//         style={{
//           color: text.length >= 20 ? "red" : "black",
//           fontWeight: text.length >= 20 ? "bold" : "normal",
//         }}
//       >
//         {text.length} /20
//       </p>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [pw, setPw] = useState("");
//   const [show, setShow] = useState(false);

//   const isWeak = pw.length > 0 && pw.length < 8;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//         gap: 12,
//       }}
//     >
//       <h1> 비밀번호 입력</h1>

//       <div style={{ display: "flex", gap: 8 }}>
//         <input
//           type={show ? "text" : "password"}
//           value={pw}
//           onChange={(e) => setPw(e.target.value)}
//           placeholder="8자 이상"
//           style={{ padding: 10, width: 240 }}
//         />

//         <button onClick={() => setShow((prev) => !prev)}>
//           {show ? "숨기기" : "보기"}
//         </button>
//       </div>

//       <p style={{ color: isWeak ? "red" : "black" }}>
//         길이: {pw.lenth} {isWeak && " (8자 이상 권장)"}
//       </p>

//       <button onClick={() => setPw("")} disabled={pw.length === 0}>
//         초기화
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const isNegative = count < 0;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//         gap: 20,
//       }}
//     >
//       <h1>카운터 연습</h1>

//       {/* <h2
//         style={{
//           color: isNegative ? "red" : "black",
//         }}
//       >
//         {count}
//       </h2> */}

//       <h2
//         style={{
//           color: count < 0 ? "red" : count >= 10 ? "green" : "black",
//         }}
//       >
//         {count}
//       </h2>

//       <div style={{ display: "flex", gap: 10 }}>
//         {/* <button onClick={() => setCount((prev) => prev - 1)}>감소</button> */}
//         <button
//           onClick={() => setCount((prev) => prev - 1)}
//           disabled={count === 0}
//         >
//           감소
//         </button>
//         <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
//         <button onClick={() => setCount((prev) => 0)}>초기화</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const isNegative = count < 0;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//         gap: 20,
//       }}
//     >
//       <h1>카운터 연습</h1>

//       <h2
//         style={{
//           color: isNegative ? "red" : "black",
//         }}
//       >
//         {count}
//       </h2>

//       <div style={{ display: "flex", gap: 10 }}>
//         <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
//         <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
//         <button onClick={() => setCount((prev) => 0)}>초기화</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// 

import { useMemo, useState } from "react";

function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6,"0")
  );
}

function getTextColorForBg(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000000" : "#ffffff";
}

function pickAnswer() {
  return Math.floor(Math.random() *100) +1;
}

export default function App() {
  // 배경색 + 글자색
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  // 숫자 맞추기
  const [answer, setAnswer] = useState(() => pickAnswer());
  const [guess, setGuess] = useState("");
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState("1~100 사이 숫자를 입력해 보세요!");

  const isValidGuess = useMemo(() => {
    const n = Number(guess);
    return Number.isInteger(n) && n >= 1 && n <= 100;
  }, [guess]);
  
  const resetGame = () => {
      setAnswer(pickAnswer());
      setGuess("");
      setTries(0);
      setMessage("새 게임 시작! 1~100 사이 숫자를 입력해 보세요!");
  };

  const changeColor = () => {
  const nextBg = getRandomHexColor();
  setBgColor(nextBg);
  setTextColor(getTextColorForBg(nextBg));
};

  const checkNumber = () => {
    if (!isValidGuess) {
      setMessage(" 1~100 사이 정수만 입력해줘!");
      return;
    }

    const n = Number(guess);
    setTries((t) => t+1);

    if (n === answer) {
      setMessage("정답!");
      return;
    }
    if (n < answer) {
      setMessage("더 큰수!");
      return;
    }
      setMessage("더 작은수!");
  };

  const onEnter = (e) => {
    if (e.key === "Enter") checkNumber();
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
        fontFamily: "sans-serif",
      }}
      >
      <h1 style={{ margin:0 }}>숫자 맞추기 게임</h1>
      <h2 style={{ margin:0 }}>{message}</h2>
      <div style={{ opacity: 0.85 }}>시도횟수: {tries}</div>

      <div style={{ display: "flex", gap:10, alignItems: "center" }}>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={onEnter}
            placeholder="1~100"
            style={{
              width:140,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.2)",
            }}
            />
            <button
              onClick={checkNumber}
              disabled={!isValidGuess}
              style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.2)",
                  cursor: isValidGuess ? "pointer" : "not-allowed",
              }}
              >
                확인
              </button>
      </div>

      <div style={{ display: "flex", gap: 10}}>
        <button
          onClick={resetGame}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
          >
            다시 시작
        </button>

        <button
          onClick={changeColor}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
          >
            배경색 바꾸기
          </button>

      </div>

      <div style={{ fontSize: 12, opacity: 0.7 }}>
          (팁) Enter로도 확인 가능
      </div>
      </div>
      );
    }
