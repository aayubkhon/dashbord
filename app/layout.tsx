import type { Metadata } from "next";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "HanaLoop - Carbon Dashboard",
  description: "Monitor greenhouse gas emissions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}