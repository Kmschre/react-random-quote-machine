import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from "./colorsArray.js";
import QUOTES_DB_ARRAY from "./quotesDBArray";


// let quotesDBUrl = "https://raw.githubusercontent.com/benhoneywill/stoic-quotes/master/data/quotes.json"



function App() {
  const [quote, setQuote] = useState("Day by day, what you do is who you become.")
  const [author, setAuthor] = useState('Heraclitus')
  const [quotesArray, setQuotesArray] = useState (null)
  const [accentColor, setAccentColor] = useState ('#ffe4e1')


 /* const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }
  */

  const fetchQuotes = () => {
    setQuotesArray(QUOTES_DB_ARRAY.quotes)
  }
  
  useEffect(()=> {
    fetchQuotes()
  })

  const randomizeQuote = () => {
    let vaultSize = quotesArray.length;
    let randomIndex = Math.floor(Math.random() * vaultSize);
    let randomQuoteInfo = quotesArray[randomIndex];
    let randomColor = Math.floor(Math.random() * COLORS_ARRAY.length);
    
     setAccentColor(COLORS_ARRAY[randomColor]);
     setQuote(randomQuoteInfo.text);
     setAuthor(randomQuoteInfo.author);

}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor, color:accentColor}}>
        <div id="quote-box">
        <p id="text" style={{color:accentColor}}>
          {quote}
        </p>
        <p id="author" style={{color:accentColor}}>
          - {author}
        </p>
          <div id="inputs">
            <button id="new-quote" onClick={() => randomizeQuote()} style={{backgroundColor:accentColor}}>New Quote</button>
            <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} target="_blank" rel="noreferrer">
            <i id="tweet-icon" className="fa-brands fa-twitter fa-xl" style={{color:accentColor}}></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
