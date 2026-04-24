import Footer from "@/widgets/layout/footer/footer";
import "./globals.css";
import Header from "@/widgets/layout/header/header";
import {ReactNode} from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
        <body className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
