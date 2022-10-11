import React, {useEffect, useState} from 'react';
import './App.scss';


let quotesDBUrl = "https://raw.githubusercontent.com/benhoneywill/stoic-quotes/master/data/quotes.json"


function App() {
  const [quote, setQuote] = useState("Day by day, what you do is who you become.")
  const [author, setAuthor] = useState('Heraclitus')
  const [quotesArray, setQuotesArray] = useState
  (null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }
  
  useEffect(()=> {
    fetchQuotes(quotesDBUrl)
  })

  const randomizeQuote = () => {
    let vaultSize = quotesArray.length;
    let randomIndex = Math.floor(Math.random() * vaultSize);
    let randomQuoteInfo = quotesArray[randomIndex];

     setQuote(randomQuoteInfo.text);
     setAuthor(randomQuoteInfo.author);

}


  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
        <p id="text">
          "{quote}"
        </p>
        <p id="author">
          - {author}
        </p>
        <button id="new-quote" onClick={() => randomizeQuote()}>New Quote</button>
          <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} target="_blank">Tweet</a>
        </div>
      </header>
    </div>
  );
}

export default App;
