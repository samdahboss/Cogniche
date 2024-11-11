import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CogNiche",
  description:
    "Cogniche is a powerful e-learning platform that provides online courses, skill development, and personalized learning experiences. Designed for learners at all levels, Cogniche offers a wide range of interactive courses, virtual classrooms, and expert-led tutorials across various fields. With flexible online education options, self-paced learning, and professional development tracks, Cogniche is the ideal online learning tool for students, professionals, and lifelong learners. Join Cogniche to access quality online education, connect with a global community, and unlock your potential from anywhere, at any time.",
  icons: {
    icon: "/brain-icon.png", // Set the favicon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <link rel='icon' href='/brain-icon.png' />
        </head>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
