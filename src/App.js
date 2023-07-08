import { useState, useEffect } from 'react';
import { genRandomColor, getRandomQuote } from './utils';

import QuoteCard from './components/quote-card.component';

const App = () => {
  const [randomColor, setRandomColor] = useState(genRandomColor);
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    getRandomQuote(setRandomQuote);
  }, []);

  useEffect(() => {
    document.body.style.background = randomColor;
  }, [randomColor]);

  const handleClick = () => {
    setRandomColor(genRandomColor);
    getRandomQuote(setRandomQuote);
  };
  return (
    <div className='flex items-center justify-center h-screen px-2 md:px-0'>
      {Object.keys(randomQuote).length !== 0 ? (
        <QuoteCard
          content={randomQuote.content}
          author={randomQuote.author}
          handleClick={handleClick}
          randomColor={randomColor}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default App;
