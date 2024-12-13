import { ClerkProvider, 
  SignedIn, 
  SignedOut } from '@clerk/nextjs';

import { ModalProvider } from '@/providers/modal-provider'; //local import
import { ToasterProvider } from '@/providers/toast-provider';

import "./globals.css";
import { ThemeProvider } from '@/providers/theme-provider';

export const metadata = {
  title:'Admin Dashboard',
  description: 'Admin Dashboard',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
        <body>
          <ClerkProvider afterSignOutUrl="/">
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <SignedOut>
              </SignedOut>
              <SignedIn>
              </SignedIn>
              <ToasterProvider/>
              <ModalProvider />
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
  )
}