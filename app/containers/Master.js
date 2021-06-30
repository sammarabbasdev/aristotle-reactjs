import React from 'react';

const Master = (props) => {
  return (
    <>
      <header>
        Header goes ehre
      </header>
      {props.children}
      <footer>
        Footer goes here
      </footer>
    </>
  );
};

export default Master;
