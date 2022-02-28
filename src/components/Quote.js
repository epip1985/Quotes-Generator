import React, { useState } from "react";
import quotes from "../quotes.json";

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

const Quote = () => {
  const [quote, setQuote] = useState(quotes[getRandom()]);

  const changeQuote = () => {
    const random = getRandom();
    setQuote(quotes[random]);
  };

  const color = colors[Math.floor(Math.random() * 6)];

  document.body.style = `background: ${color}`;

  console.log(quote);

  return (
    <div className="quoteBox" style={{ color: color }}>
      <h1>
        <i className="fa-solid fa-quote-left"></i> {}
        {quote.quote}
        <i className="fa-solid fa-quote-right"></i>
      </h1>
      <h3 className="author" style={{}}>
        {quote.author}
      </h3>

      <button onClick={changeQuote}>
        <i className="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default Quote;
