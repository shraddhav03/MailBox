import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { EmailContext } from "..";

export const Sent = () => {
  const { data } = useContext(EmailContext);

  const unreadEmails = data.filter(({ read }) => !read);
  const readEmails = data.filter(({ read }) => read);

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>My Mail Box</h1>
        <p>Unread Emails :{unreadEmails.length}</p>
        <p>Read Emails :{readEmails.length}</p>
        <ul>
          {data.map(({ id, sender, subject, message, read }) => {
            return (
              <li key={id}>
                <Link to={`/emailpage/${id}`}>{subject}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
