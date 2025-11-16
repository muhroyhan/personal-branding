import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Royhan's Personal Branding Website",
  description:
    "Muhammad Royhan's Personal Branding Website - Software Engineer Team Lead with 6+ years experience",
  keywords: [
    "Software Engineer",
    "Team Lead",
    "React.js",
    "Node.js",
    "Flutter",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhammad Royhan" }],
  openGraph: {
    title: "Muhammad Royhan's Personal Branding Website",
    description:
      "Muhammad Royhan's Personal Branding Website - Software Engineer Team Lead",
    type: "website",
    images: ["photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Royhan's Personal Branding Website",
    description:
      "Muhammad Royhan's Personal Branding Website - Software Engineer Team Lead",
    images: ["photo.jpg"],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="inherit" radius="large" scaling="100%">
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
