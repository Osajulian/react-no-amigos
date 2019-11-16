import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  //   return (
  //     <React.Fragment>
  //       <h1>Hello</h1>
  //     </React.Fragment>
  //   );

  return React.createElement(
    'div',
    {},
    React.createElement(
      'a',
      { href: 'http://www.google.com' },
      React.createElement('h1', { title: 'Hello' }, 'Hello Julian!')
    )
  );
};
ReactDOM.render(<Hello />, document.querySelector('#root'));
