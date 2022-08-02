import ReactDOM from "react-dom";
import React from "react";

// GIF 共有サイト　GIPHY から持ってきた GIF ID
const gifIds = [
  "10dU7AN7xsi1I4",
  "tBxyh2hbwMiqc",
  "ICOgUNjpvO0PC",
  "33OrjzUFwkwEg",
  "MCfhrrNN1goH6",
  "rwCX06Y5XpbLG"
];

// 上記配列の要素をランダムに返す
export default function getGifId() {
  const max = gifIds.length;
  const index = Math.floor(Math.random() * Math.floor(max));
  return gifIds[index];
}

function Gif({ id }) {
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return <img src={src} alt="" />;
}

function App() {
  const [id, setId] = React.useState(gifIds[0]);

  const handleClick = () => {
    setId(getGifId());
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>play</button>
      </p>
      <Gif id={id} />
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
