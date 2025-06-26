import { ReactNode } from 'react'
import MainNav from './main-nav'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 p-4 bg-gray-50">{children}</main>
        </div>
    )
}
