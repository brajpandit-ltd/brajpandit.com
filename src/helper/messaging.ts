// import axios from "axios";

// const whatsappApiUrl = `https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID}/messages`;
// const token = process.env.NEXT_PUBLIC_WHATSAPP_TOKEN;

// /**
//  * Send WhatsApp message using Meta Cloud API
//  */
// export const sendWhatsAppMessage = async (to: string, message: string) => {
//   try {
//     const response = await axios.post(
//       whatsappApiUrl,
//       {
//         messaging_product: "whatsapp",
//         to,
//         type: "text",
//         text: { body: message },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("✅ WhatsApp message sent:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("❌ WhatsApp message failed:", error.response?.data || error);
//   }
// };



import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendSMS({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });
    console.log(`SMS sent to ${to}: ${message}`);
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
}

export async function sendWhatsApp({
  to,
  message,
}: {
  to: string;
  message: string;
}) {
  try {
    await client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER!}`,
      to: `whatsapp:${to}`,
    });
    console.log(`WhatsApp sent to ${to}: ${message}`);
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
  }
}
