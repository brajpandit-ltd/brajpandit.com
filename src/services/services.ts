import { getEPuja, getEPujas } from "./e-pujaService";
import {
  getPersonalisedPujas,
  getPersonalisedPuja,
} from "./personalisedPujaService";
import { sendBookingEmails } from "./bookingByEmailjs";
import { sendPujaBookingEmail } from "./bookingService";

export const services = {
  ePujas: async (search: string = "", isServer = true) => {
    return getEPujas(search, isServer);
  },
  ePuja: async (pujaSlug: string, isServer = true) => {
    return getEPuja(pujaSlug, isServer);
  },

  personalisedPujas: async (search: string = "", isServer = true) => {
    return getPersonalisedPujas(search, isServer);
  },
  personalisedPuja: async (pujaSlug: string, isServer = true) => {
    return getPersonalisedPuja(pujaSlug, isServer);
  },

  pujaBooking: async (body: any) => {
    try {
      await sendPujaBookingEmail(body);
      await sendBookingEmails(body);

      return {
        success: true,
        message: "Puja booking successful and emails sent.",
        data: null,
      };
    } catch (error) {
      console.log("error:", error);
      return {
        success: false,
        message: "Puja booking service is not implemented yet.",
        data: null,
      };
    }
  },

  // ePujas: (search: string = "", isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/e-pooja/?${search}`,
  //     {
  //       cache: "default",
  //     }
  //   ),
  // ePuja: (pujaSlug: string, isServer = true) => {
  //   if (!pujaSlug) return;
  //   return apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/e-pooja/${pujaSlug}`,
  //     {
  //       cache: "default",
  //     }
  //   );
  // },
  // personalisedPujas: (search: string = "", isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/personalised-pujas/${search}`,
  //     {
  //       cache: "default",
  //     }
  //   ),
  // personalisedPuja: (pujaSlug: string, isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/personalised-pujas/${pujaSlug}`,
  //     {
  //       cache: "default",
  //     }
  //   ),
  // pujaBooking: (body: any, isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/puja-booking`,
  //     {
  //       cache: "default",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     }
  //   ),
  // pandits: (isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/pandits`,
  //     {
  //       cache: "default",
  //     }
  //   ),
  // pandit: (isServer = true) =>
  //   apiHandler(
  //     `${isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL}/api/pandits?status=approved`,
  //     {
  //       cache: "default",
  //     }
  //   ),
};

export default services;
