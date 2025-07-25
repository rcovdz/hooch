import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/features/navigation";
import { HighlightsBar } from "@/shared/components/layout";

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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <body>
        <main className="xxl:max-w-screen-xxl xs:flex-row relative mx-auto flex max-w-screen-md flex-col-reverse justify-around xl:max-w-screen-xl">
          <section className="xs:px-4 xxl:px-8 px-2">
            <Navbar />
          </section>
          <section className="border-border xs:py-4 xxl:pt-8 flex-1 px-2 lg:min-w-[37.5rem]">
            {children}
          </section>
          <section className="ml-4 hidden flex-1 py-5 md:ml-8 lg:flex">
            <HighlightsBar />
          </section>
        </main>
      </body>
    </html>
  );
}
