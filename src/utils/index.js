export const genRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const getRandomQuote = (callback) => {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
};
