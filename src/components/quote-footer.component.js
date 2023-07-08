const QuoteFooter = ({ handleClick }) => (
  <div className='flex justify-end mt-4'>
    <button
      className='quote-btn bg-gray-400 px-3 py-2 text-white text-md tracking-wide'
      onClick={handleClick}
    >
      New Quote
    </button>
  </div>
);

export default QuoteFooter;
