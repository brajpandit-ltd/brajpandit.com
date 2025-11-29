// src/services/bookingService.ts
"use server";

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILBOX_KEY!,
});

export async function sendPujaBookingEmail(bookingDetails: any) {
  const sentFrom = new Sender("support@brajpandit.com", "Brajpandit Support");

  // Recipients
  const userRecipient = new Recipient(
    bookingDetails.email,
    bookingDetails.name
  );
  const adminRecipient = new Recipient(
    process.env.ADMIN_EMAIL!,
    "Brajpandit Admin"
  );

  try {
    // ------------------ USER EMAIL ------------------
    const userEmailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo([userRecipient])
      .setReplyTo(sentFrom)
      .setSubject("Puja Booking Confirmation - Brajpandit!")
      .setTemplateId(process.env.TEMPLATE_USER_ID!)
      .setPersonalization([
        { email: bookingDetails.email, data: bookingDetails },
      ]);

    // ------------------ ADMIN EMAIL -----------------
    const adminEmailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo([adminRecipient])
      .setReplyTo(sentFrom)
      .setSubject("New Puja Booking Received - Brajpandit")
      .setTemplateId(process.env.TEMPLATE_ADMIN_ID!)
      .setPersonalization([
        { email: process.env.ADMIN_EMAIL!, data: bookingDetails },
      ]);

    // Send both emails concurrently
    await Promise.all([
      mailerSend.email.send(userEmailParams),
      mailerSend.email.send(adminEmailParams),
    ]);

    return { success: true, message: "Booking emails sent successfully" };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send booking emails");
  }
}

// "use server";
// //src/services/bookingService.ts
// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
// import { toast } from "react-toastify";

// const mailerSend = new MailerSend({
//   apiKey: process.env.MAILBOX_KEY!,
// });

// export async function sendPujaBookingEmail(bookingDetails: any) {
//   const sentFrom = new Sender("support@brajpandit.com", "Brajpandit Support");

//   const recipients = [new Recipient(bookingDetails.email, bookingDetails.name)];

//   const personalization = [
//     {
//       email: bookingDetails.email,
//       data: {
//         puja: {
//           0: {
//             day: bookingDetails.day,
//             name: bookingDetails.name,
//             price: bookingDetails.price,
//             Package: bookingDetails.package,
//           },
//           day: bookingDetails.day,
//         },
//         booking: {
//           name: bookingDetails.name,
//           phone: bookingDetails.phone,
//           total: bookingDetails.price,
//           address: bookingDetails.address,
//           subtotal: bookingDetails.price,
//           order_number: bookingDetails.orderNumber || "N/A",
//           booking_method: "Online",
//           tracking_number: bookingDetails.trackingNumber || "N/A",
//           booking_method_fee: bookingDetails.bookingMethodFee || 0,
//         },
//       },
//     },
//   ];

//   try {
//     const emailParams = new EmailParams()
//       .setFrom(sentFrom)
//       .setTo(recipients)
//       .setReplyTo(sentFrom)
//       .setSubject("Puja Booking Confirmation - Brajpandit!")
//       .setTemplateId(process.env.TEMPLATE_ID!)
//       .setPersonalization(personalization);

//     await mailerSend.email.send(emailParams);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     toast.error(
//       "Failed to send booking confirmation email. Please try again later Or contact support."
//     );
//     throw new Error("Failed to send email");
//   }
// }
