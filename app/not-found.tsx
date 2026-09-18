import Link from 'next/link'
export default function NotFound(){return <main className="grid min-h-[calc(100vh-73px)] place-items-center text-center"><div><p className="text-6xl font-bold text-brand">404</p><h1 className="mt-3 text-2xl font-bold">Page not found</h1><Link href="/" className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-white">Back home</Link></div></main>}
