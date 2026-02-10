import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pixel Loom — Agence Web Paris",
  description: "Pixel Loom est une agence créative spécialisée dans la conception et le développement d'expériences numériques haut de gamme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="3fc41ebf-6cc6-48d3-935a-dba65c5c420c"
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
