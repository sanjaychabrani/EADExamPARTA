import React, { useState } from 'react';

function PollDisplay() {
  const [choices, setChoices] = useState([
    { id: 1, label: 'JavaScript', votes: 0 },
    { id: 2, label: 'Python', votes: 0 },
    { id: 3, label: 'Java', votes: 0 },
    { id: 4, label: 'C#', votes: 0 },
  ]);

  

  return (
    
    <div>
        <h2>1. PollDisplay</h2>
      <h3>What is your favorite programming language?</h3>
      
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            <label>
              <input
                
                value={choice.label}
                
              />
              
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollDisplay;
