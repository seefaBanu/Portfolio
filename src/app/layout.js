import "./globals.css";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seefa Banu",
  description: "Seefa Banu Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
