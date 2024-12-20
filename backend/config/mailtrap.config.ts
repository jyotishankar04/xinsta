import { _config } from "./envConfig";
import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = "cb6a49f410d7456a29d7fd0116e3f8a2";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "xinsta@devsuvam.xyz",
  name: "Xinsta",
};

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

const sendEmail = async ({
  to,
  subject,
  text,
  html,
  category = "Xinsta temp",
}: {
  to: string | string[];
  subject: string;
  text?: string;
  html: string;
  category?: string;
}) => {
  let recipients: string[] = [];
  if (typeof to === "string") {
    recipients = [to];
  } else {
    recipients = to;
  }
  console.log("Sending email to:", recipients);
  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipients,
      subject,
      text,
      html,
      category: category || "Xinsta temp",
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
