import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = { title: 'SolveAI — Your Problem. AI Solution.', description: 'Clear, accurate, step-by-step solutions for any problem.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Navbar />{children}</body></html> }
