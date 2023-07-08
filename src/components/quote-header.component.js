const QuoteHeader = ({ content, author }) => (
  <>
    <p className='quote-text font-bold text-lg'>
      <span className='text-lg'>“</span>
      {content} <span className='text-lg'>”</span>
    </p>
    <p className='quote-text text-right'>- {author}</p>
  </>
);

export default QuoteHeader;
