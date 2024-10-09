"use client"
import { useSession, signOut } from 'next-auth/react';
import Header from '../components/header/header';

export default function Admin() {

    const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <Header />
      <h1 className="text-4xl font-bold">This is the admin homepage. Welcome: {session?.user.name}</h1>
      <div className="pt-[5px]">
        <div className="flex items-center justify-center bg-black rounded">
            <button
            onClick={() => signOut()}
            className="bg-accent text-white px-6 py-2 rounded"
            >
            Sign out of Discord
            </button>
        </div>
      </div>
    </div>
  );
}
