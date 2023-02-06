import React from 'react'
import './Header.css';

const Header = (props) => {
  let counter = props.counter;
  return (
    <div className="header">
      <div>Total Ques:-{counter}</div>
      <div className="time">Time:- 10:10</div>
    </div>
  );
};

export default Header
