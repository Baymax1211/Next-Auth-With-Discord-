"use client"
import { useSession } from 'next-auth/react';
import * as React from 'react'

export default function Header() {
    const [page, setPage] = React.useState();
    const { data: session } = useSession();

    React.useEffect(() => {
        setPage(window.location.pathname);
    }, [])

    return (
        <header className='flex flex-row gap-2 px-5 shadow-md w-full text-white fixed top-0 left-0 z-50'>
        <div className="flex flex-row gap-5 text-black">
            <div className="flex flex-col items-center hover: cursor-pointer">
                <h2 onClick={() => window.location.pathname = '/'}>Home</h2>
                {page === '/' && (
                    <span className='h-[3px] rounded-full w-full bg-red-500'/>
                )}
            </div>
            {session && (
                <div className="flex flex-col items-center hover: cursor-pointer">
                    <h2 onClick={() => window.location.pathname = '/admin'}>Admin</h2>
                    {page === '/admin' && (
                        <span className='h-[3px] rounded-full w-full bg-red-500'/>
                    )}
                </div>
            )}
        </div>
    </header>
    )
}