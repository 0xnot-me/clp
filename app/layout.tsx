import type { Metadata, Viewport } from "next/types";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";

const montserrat = localFont({
  src: "./fonts/montserrat-latin-variable.woff2",
  variable: "--font-montserrat",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beachfront Villa Puerto Vallarta | Chef & Staff | Casa La Playa",
    template: "%s | Casa La Playa Puerto Vallarta",
  },
  description: "Rent Casa La Playa, a private beachfront villa in downtown Puerto Vallarta. 6–8 bedrooms, chef and staff, two pools, and walkable location. Book direct.",
  metadataBase: new URL(site.url),
  openGraph: {
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Casa La Playa'
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1a1a' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#1a1a1a" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script id="livechat" strategy="lazyOnload">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19107767;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
          `}
        </Script>
        <noscript>
          <a href="https://www.livechat.com/chat-with/19107767/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </body>
    </html>
  );
}
