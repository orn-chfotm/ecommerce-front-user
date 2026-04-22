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
        <body className="min-h-full flex flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}
