import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";
import { SidebarProvider } from "@/components/SidebarProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AquaVigil",
  description: "Advanced water monitoring and flood tracking system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${satoshi.variable} antialiased scrollbar-hide`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="3fc41ebf-6cc6-48d3-935a-dba65c5c420c"
        />
        <SidebarProvider>
          <ScrollProgress />
          {children}
        </SidebarProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
