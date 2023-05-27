import React, { useState } from 'react';
import ThankYouMessage from './ThankYouMessage';

function UserParticipation({ choices, handleVote }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleChoiceChange = (event) => {
    setSelectedChoice(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedChoice) {
      handleVote(selectedChoice);
      setSelectedChoice(null);
      setHasVoted(true);
    }
  };

  return (
    <div>
        <h2>2. UserParticipation</h2>
      <h3>What is your favorite programming language?</h3>
      {hasVoted ? (
        <ThankYouMessage />
      ) : (
        <form onSubmit={handleSubmit}>
          <ul>
            {choices.map((choice) => (
              <li key={choice.id}>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={choice.id}
                    checked={selectedChoice === choice.id}
                    onChange={handleChoiceChange}
                  />
                  {choice.label} ({choice.votes})
                </label>
              </li>
            ))}
          </ul>
          <button type="submit">Submit Vote</button>
        </form>
      )}
    </div>
  );
}

export default UserParticipation;
