import type { Metadata } from "next";
import "./globals.css";
import { Navbar, HighlightsBar } from "@/components/layout";

export const metadata: Metadata = {
  title: "hoO.cH",
  description: "Official Hoo.ch Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="xxl:max-w-screen-xxl mx-auto flex max-w-screen-md justify-around lg:max-w-screen-lg xl:max-w-screen-xl">
          <section className="xxl:p-8 h-dvh px-2 sm:px-4">
            <Navbar />
          </section>
          <section className="border-border h-dvh flex-1 px-2 lg:min-w-[37.5rem]">
            {children}
          </section>
          <section className="ml-4 hidden h-dvh flex-1 lg:flex xl:ml-8">
            <HighlightsBar />
          </section>
        </main>
      </body>
    </html>
  );
}
