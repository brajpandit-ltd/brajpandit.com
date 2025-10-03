import { ApiResponse } from "@/helper/apiResponse";
import { NextRequest } from "next/server";
import { sendEmail } from "@/helper/email";
import { sendSMS, sendWhatsApp } from "@/helper/messaging";
export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    // Send email
    await sendEmail({
      to: body.email,
      subject: "Puja Booking Confirmation",
      text: `Your puja is booked. Details: ${JSON.stringify(body)}`,
    });

    // Send SMS (if phone provided)
    if (body.phone) {
      await sendSMS({
        to: body.phone,
        message: "Your puja booking is confirmed!",
      });

      await sendWhatsApp({
        to: body.phone,
        message: "Your puja booking is confirmed on WhatsApp!",
      });
    }

    return ApiResponse(true, "Booking successful", body, 200);
  } catch (error) {
    console.error(error);
    return ApiResponse(false, "Failed to book puja", null, 500);
  }
}
