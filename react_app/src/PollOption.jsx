import React from 'react';

function PollOption({ label, count, onVote }) {
  return (
    <div className="card">
      <h2>{label}</h2>
      <p>Votes: {count}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
}

export default PollOption;
