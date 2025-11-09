// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // This imports your CSS
import Navbar from './components/Navbar';

// Site metadata for SEO, OpenGraph and social previews.
// NOTE: replace `https://bone-cadets.example` with your production URL.
export const metadata: Metadata = {
  title: 'Bone Cadets - Professional Dog Walking in San Francisco',
  description: 'Professional dog walking and group play in San Francisco',
  metadataBase: new URL('https://bone-cadets.example'),
  openGraph: {
    title: 'Bone Cadets - Professional Dog Walking in San Francisco',
    description: 'Professional dog walking and group play in San Francisco',
    url: 'https://bone-cadets.example',
    siteName: 'Bone Cadets',
    images: ['/favicon.ico'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bone Cadets',
    description: 'Professional dog walking and group play in San Francisco',
    images: ['/favicon.ico'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <Navbar />
        {/* This {children} prop will be replaced by your page.tsx content */}
        <main>{children}</main>

        {/* Footer (site-wide) */}
        <footer>
          <p>&copy; 2024 Bone Cadets - San Francisco Dog Walking</p>
          <p className="footer-note">
            Professional dog walking services since 2015 | License & Insurance in progress
          </p>
        </footer>

        {/* Structured data (JSON-LD) for Organization and WebSite. Update URLs and contact details. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bone Cadets",
              url: "https://bone-cadets.example",
              logo: "https://bone-cadets.example/favicon.ico",
              sameAs: [],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://bone-cadets.example",
              name: "Bone Cadets",
              description: "Professional dog walking and group play in San Francisco",
            }),
          }}
        />
      </body>
    </html>
  );
}