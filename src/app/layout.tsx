import { Noto_Sans } from 'next/font/google'

import StoreProvider from './StoreProvider'

import type { Metadata } from 'next'
import './globals.css'

const notoSans = Noto_Sans({
    subsets: ['latin'],
    style: 'normal',
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    variable: '--font-family',
})

export const metadata: Metadata = {
    title: 'Todo App',
    description: 'Created by Stanislav Shchelokov',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${notoSans.variable} h-dvh w-full antialiased`}>
                <StoreProvider>
                    <main className="min-h-full">{children}</main>
                </StoreProvider>
            </body>
        </html>
    )
}
