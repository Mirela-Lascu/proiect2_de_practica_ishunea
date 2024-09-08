import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, 
         SignInButton, 
         SignedIn, 
         SignedOut, 
         UserButton } from '@clerk/nextjs'

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
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}