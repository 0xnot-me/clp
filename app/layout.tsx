import type { Metadata, Viewport } from "next/types";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Casa La Playa Puerto Vallarta Mexico Vacation Home Rental",
  description: "A superb study in elegant simplicity set on the beach in a tropical paradise. Enjoy near-perfect weather and breathtaking sunsets everyday.",
  metadataBase: new URL('https://casalaplaya.com'), // Replace with your actual domain
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
  themeColor: '#1a1a1a',
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
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
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
