import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <React.Fragment>
      <span>Hello</span>
    </React.Fragment>
  );
};

const World = () => {
  return <span>{/* this is a single line comment */} World</span>;
};

const HelloWorld = () => {
  return (
    <div>
      {
        // this
        // is
        // a
        // multi-line
        // comment
      }
      <Hello /> <World />!
    </div>
  );
};
ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
