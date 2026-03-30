"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session, router])
    
    return (
        <div className='min-h-screen py-16 px-4 relative'>
            <div className='max-w-3xl mx-auto glass-card p-8 md:p-12 space-y-10'>
                <div className="text-center space-y-3">
                    <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
                        Your Dashboard
                    </h1>
                    <p className='text-slate-500 text-lg font-medium'>
                        Personalize your profile and manage payment settings
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                            <input type="text" placeholder='e.g. John Doe' className='premium-input' />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                            <input type="email" placeholder='john@example.com' className='premium-input' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Username</label>
                            <input type="text" placeholder='johndoe123' className='premium-input' />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Profile Picture URL</label>
                            <input type="text" placeholder='https://image.com/photo.jpg' className='premium-input' />
                        </div>
                    </div>

                    <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 space-y-6">
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            <span className="p-2 bg-purple-100 text-purple-700 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                            </span>
                            Razorpay Configuration
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Key ID</label>
                                <input type="text" placeholder='rzp_test_...' className='premium-input' />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Key Secret</label>
                                <input type="password" placeholder='••••••••••••' className='premium-input' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button className="premium-button w-full text-lg py-5">
                        Save and Update Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
