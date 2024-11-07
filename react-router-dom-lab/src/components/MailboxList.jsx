// src/components/MailboxList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MailboxList.css'; // Import the CSS file

const MailboxList = ({ mailboxes }) => (
  <div>
    <h2>Mailbox List</h2>
    <div className="mailbox-container">
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
          Mailbox {mailbox._id}
        </Link>
      ))}
    </div>
  </div>
);

export default MailboxList;

