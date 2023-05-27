import React, { useState } from 'react';

function AnotherUserParticipation({ choices, handleVote }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceChange = (event) => {
    setSelectedChoice(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedChoice) {
      handleVote(selectedChoice);
      setSelectedChoice(null);
    }
  };

  const handleReset = () => {
    setSelectedChoice(null);
  };

  return (
    <div>
      <h3>What is your favorite programming language?</h3>
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
        <button onClick={handleReset}>Reset Choice</button>
      </form>
    </div>
  );
}

export default AnotherUserParticipation;
