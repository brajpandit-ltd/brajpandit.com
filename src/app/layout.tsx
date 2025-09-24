import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { RootProvider } from "@/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braj Pandit Ji",
  description:
    "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
  keywords: [
    "Braj Pandit Ji",
    "Pandit Ji Booking",
    "Hindu Ceremonies",
    "Online Pooja Booking",
    "Vedic Pujas",
    "Mathura Pandit Ji",
    "Vrindavan Pandit Ji",
    "Religious Services",
    "Puja Services",
  ],
  openGraph: {
    title: "Braj Pandit Ji",
    description:
      "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Braj Pandit Ji - Your Trusted Platform for Sacred Hindu Ceremonies",
      },
    ],
    siteName: "Braj Pandit Ji",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braj Pandit Ji",
    description:
      "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable}`}>
        <RootProvider>
          <>
            <Header />
            <main>
              {children}

               <ToastContainer
  position="top-center"
  autoClose={8000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  className="font-sans bg-red-500"
/>



            </main>
            <Footer />
          </>
        </RootProvider>
      </body>
    </html>
  );
}
