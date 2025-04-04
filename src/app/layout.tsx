import './globals.css'
import '../common.scss';
import { Space_Grotesk } from 'next/font/google'
import { Toaster } from 'sonner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Rigved Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A portfolio website of Frontend Developer Rigved Shrivastava" />
        <meta name="keywords" content="Rigved Shrivastava, Rigved, Frontend Developer, Frontend, Frontend Development, Full Stack Developer, MERN Stack Developer" />
        <meta property="og:title" content="Rigved portfolio" />
        <meta property="og:description" content="A portfolio website of Frontend Developer Rigved Shrivastava" />
        <link rel="icon" href="/assets/RS_logo.png" />
        {/* <meta property="og:image" content="image_url_here" /> */}
        {/* <link rel="canonical" href="https://www.example.com/your-page"> */}
      </head>

      <body className={SpaceGrotesk.className}>
        {children}
        <Footer />
        <Toaster richColors toastOptions={{
          style: {
            padding: '10px',
          }
        }} />
      </body>
    </html>
  )
}
