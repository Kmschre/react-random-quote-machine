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
        <wrapper id="quote-box">
        <p id="text">
          "{quote}"
        </p>
        <p>
          - {author}
        </p>
        <button onClick={() => randomizeQuote()}>New Quote</button>
        
        </wrapper>
      </header>
    </div>
  );
}

export default App;
