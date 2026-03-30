"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

export const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router])

    return (
        <nav className='bg-slate-900 text-white p-4 h-16 flex justify-between items-center shadow-md border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95'>
            <Link href="/" className='text-xl font-black tracking-tight cursor-pointer hover:scale-[1.02] transition-transform active:scale-95'>
                GetMeA<span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Chai</span> ☕
            </Link>

            <div className='hidden md:flex gap-8'>
                <ul className='flex gap-8 font-bold text-slate-400'>
                    <li className='cursor-pointer hover:text-white transition-colors'><Link href="/">Home</Link></li>
                    <li className='cursor-pointer hover:text-white transition-colors'><Link href="/about">About</Link></li>
                    <li className='cursor-pointer hover:text-white transition-colors'><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                {session && <div className='relative group'>
                    <button className='bg-linear-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all shadow-lg active:scale-95 border border-slate-600/50   '>
                        {session.user.name}
                    </button>
                    <div className='absolute top-full right-0 w-48 bg-slate-800 text-white rounded-lg shadow-lg py-2 mt-1 hidden group-hover:block z-9999'>
                        <Link href="/dashboard" className='block px-4 py-2 hover:bg-slate-700'>Dashboard</Link>
                        <Link href="/profile" className='block px-4 py-2 hover:bg-slate-700'>Profile</Link>
                        <button onClick={() => signOut()} className='block w-full text-left px-4 py-2 hover:bg-slate-700'>Logout</button>
                    </div>
                </div>}
                {!session && <Link href="/login" className='bg-linear-to-r from-slate-700 to-slate-800 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all shadow-lg active:scale-95 border border-slate-600/50'>Login</Link>}
            </div>
        </nav>
    )
}
