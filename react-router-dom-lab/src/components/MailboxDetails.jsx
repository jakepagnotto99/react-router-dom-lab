// src/components/MailboxDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) return <div>Mailbox not found</div>;

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box ID: {selectedBox._id}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
    </div>
  );
};

export default MailboxDetails;