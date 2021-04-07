import {wordList} from './wordList'
import { useState, useEffect } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  useEffect(() => {
    handleButton();
  }, []);

  const handleButton = () => {
    let index = Math.floor(Math.random() * (wordList.length));
    setWord(wordList[index].WORD);
    setMeaning(wordList[index].MEANING);
  }

  return (
    <div className="App">
        <div className="app-container">
          <div className="title">
            <h1 id="title-text">GRE Prepper</h1>
          </div>
          <div className="main-container">
            <h2 id="word">{word}</h2>
            <p id="meaning">{meaning}</p>
          </div>

          <div className="lookup-container">
            <ul className="lookup-list">
              <li>
                <a href={`https://mnemonicdictionary.com/?word=${word}`} 
                  id="mnemonic-dictionary" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Mnemonic
                </a>
              </li>
              <li>
                <a href={`https://www.merriam-webster.com/dictionary/${word}`} 
                  id="merriam-webster" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Merriam
                </a>
              </li>
              <li>
                <a href={`https://www.google.com/search?q=${word}+meaning`} 
                  id="google" target="_blank" 
                  rel="noopener noreferrer">
                  Google
                </a>
              </li>
            </ul>
          </div>

          <div className="button-container">
            <button id="button" onClick={handleButton}><i id="arrow" className="bi bi-arrow-right-short"></i></button>
          </div>

          <div className="footer-div">
            <p>
              &copy; 
              <a 
              href="https://github.com/ArnavGuptaaa"
              target="_blank" 
              rel="noopener noreferrer">
                Nav
              </a>, 2021</p>
          </div>
        </div>
      </div>
        
  );
}

export default App;
