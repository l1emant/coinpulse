import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CoinPulse - Track Cryptocurrency Like Never Before",
  description: "Get real-time insights, track your portfolio, and stay ahead of the market with our powerful cryptocurrency tracking platform.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}