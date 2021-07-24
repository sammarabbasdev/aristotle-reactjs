import React from 'react';

const MasterNonMember = (props) => {
  return (
    <>
      <header>
        Header goes here
      </header>
      {props.children}
      <footer>
        Footer goes here
      </footer>
    </>
  );
};

export default MasterNonMember;
