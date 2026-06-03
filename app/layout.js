// app/layout.js
import "./globals.css";

export const metadata = {
  title: "KLC | Best Tech Courses in Gujranwala - Frontend, Backend, MERN, AI",
  description: "First complete tech ecosystem in Gujranwala offering Frontend, Backend, MERN Stack, Full Stack Development with AI workflows and prompt engineering. Enroll now!",
  keywords: "tech courses gujranwala, frontend development gujranwala, backend development gujranwala, mern stack gujranwala, full stack development gujranwala, ai workflows gujranwala, programming languages gujranwala",
  authors: [{ name: "KLC" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "KLC - Tech Courses in Gujranwala",
    description: "First complete tech ecosystem in Gujranwala with AI workflows",
    type: "website",
    locale: "en_PK",
    url: "https://klc-gujranwala.com",
    siteName: "KLC Learning Center"
  },
  alternates: {
    canonical: "https://klc-gujranwala.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Inter'] bg-white text-white select-none ">
        {children}
      </body>
    </html>
  );
}