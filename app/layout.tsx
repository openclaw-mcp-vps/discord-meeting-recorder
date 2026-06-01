import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Meeting Recorder — Auto-record voice calls with transcripts",
  description: "Automatically records Discord voice channels and generates searchable transcripts for community managers and gaming clan leaders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a8fcbb4-f3e9-47ec-b1cb-c01d3cdca9ca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
