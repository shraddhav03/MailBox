import { useContext } from "react";
import { useParams } from "react-router-dom";

import { EmailContext } from "..";

export const EmailPage = () => {
  const { itemId } = useParams();
  const { data } = useContext(EmailContext);

  const getEmails = (mails, itemId) => {
    console.log(itemId);
    return mails.find((mail) => mail.id === Number(itemId));
  };
  const mail = getEmails(data, itemId);
  const { id, sender, subject, message, read } = mail;

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h1>{subject}</h1>
        <p>From:{sender}</p>
        <p>Message:{message}</p>
      </div>
    </>
  );
};
