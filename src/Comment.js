import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>+1</button>
    <button onClick={() => thumbDownComment(id)}>-1</button>
  </li>
);

export default Comment;
