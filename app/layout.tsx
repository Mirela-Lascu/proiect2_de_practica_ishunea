import { ClerkProvider, 
  SignInButton, 
  SignedIn, 
  SignedOut, 
  UserButton } from '@clerk/nextjs';
import type { Metadata } from "next";  //global imports

import { ModalProvider } from '@/providers/modal-provider'; //local import

import "./globals.css";

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
          
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}