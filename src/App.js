import './App.css';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('Click the Get Next Button to generate Quote')

  const copyText = () => {
    navigator.clipboard.writeText(quote);
  }

  const nextQuote = async () => {
    const apiURL = 'https://api.quotable.io/random'
    await fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
      })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">Quote of the Day</div>
        <div className="quote">" {quote} "</div>
        <div className="btns">
          <Button variant="outlined" color="primary" size="large" onClick={copyText}>Copy &nbsp; <ContentCopyIcon /></Button>
          <Button variant="contained" color="primary" size="large" onClick={nextQuote}>Get Next</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
