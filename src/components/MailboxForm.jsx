// src/components/MailboxForm.jsx
import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
  const [boxSize, setBoxSize] = useState('');
  const [boxholder, setBoxholder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxSize, boxholder });
    setBoxSize('');
    setBoxholder('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Box Size:</label>
        <input
          type="text"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Boxholder:</label>
        <input
          type="text"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;
