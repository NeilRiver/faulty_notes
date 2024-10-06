import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сайт Егора",
  description: "На нексте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
