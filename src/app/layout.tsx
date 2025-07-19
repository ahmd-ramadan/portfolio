import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-rubik"
});

export const metadata: Metadata = {
  title: "Ahmed Ramadan | Software Engineer",
  description: "Resourceful and passionate Computer Science graduate and aspiring Software Engineer specializing in full-stack development, with expertise in both front-end and back-end systems. Skilled at designing user-friendly websites, building efficient databases, and ensuring seamless integration between interfaces and server-side logic. I focus on intuitive user experiences, data-driven insights, and delivering high-quality software solutions tailored to client needs. I am passionate about competitive programming and problem-solving, with a proven track record of tackling complex challenges. Continuously learning and staying updated with industry trends and best practices, I strive to deliver innovative and efficient solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
