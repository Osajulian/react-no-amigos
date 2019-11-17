import React from 'react';
import ReactDOM from 'react-dom';

const MyThing = () => {
  // return (
  //   <div className="book">
  //     <div className="title">The title</div>
  //     <div className="author">The Author</div>
  //     <ul className="stats">
  //       <li classname="rating">5 Stars</li>
  //       <li classname="isbn">12-345678-910</li>
  //     </ul>
  //   </div>
  // );

  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement('div', { className: 'title' }, 'The Title'),
    React.createElement('div', { className: 'author' }, 'The Author'),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement('li', { className: 'rating' }, '5 Stars'),
      React.createElement('li', { className: 'isbn' }, '12-345678-910')
    )
  );
};

ReactDOM.render(<MyThing />, document.querySelector('#root'));
