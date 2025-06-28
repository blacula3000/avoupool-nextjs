import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'sonner'
import { ReactNode } from 'react'
import MainNav from '@/components/main-nav'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className} className="bg-gray-100 text-gray-900">
                <MainNav />
                <main className="p-4">{children}</main>
                <Toaster position="top-right" />
            </body>
        </html>
    )
}
