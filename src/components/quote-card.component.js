import QuoteHeader from './quote-header.component';
import QuoteFooter from './quote-footer.component';
import { useEffect } from 'react';

const QuoteCard = ({ content, author, handleClick, randomColor }) => {
  useEffect(() => {
    document.querySelector('.quote-btn').style.background = randomColor;
    document.querySelectorAll('.quote-text')[0].style.color = randomColor;
    document.querySelectorAll('.quote-text')[1].style.color = randomColor;
  }, [randomColor]);
  return (
    <div className='quote-box bg-white rounded border py-4 px-8 md:w-1/4'>
      <QuoteHeader content={content} author={author} />
      <QuoteFooter handleClick={handleClick} />
    </div>
  );
};

export default QuoteCard;
