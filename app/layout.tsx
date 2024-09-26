import { ClerkProvider, 
  SignInButton, 
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
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SignedOut>
            </SignedOut>
            <SignedIn>
              
            </SignedIn>
            <ToasterProvider/>
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}