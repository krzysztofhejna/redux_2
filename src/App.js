import React, { Component } from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentsListContainer />
    </div>
  );
}

export default App;
