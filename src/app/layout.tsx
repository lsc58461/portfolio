import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JeongYun Portfolio",
  description: "이정윤의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
