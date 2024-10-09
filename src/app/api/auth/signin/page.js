"use client"

const { signIn } = require('next-auth/react');

export default function SignInPage() {
    return (
      <div className="flex items-center justify-center bg-black rounded">
        <button
          onClick={() => signIn('discord', { callbackUrl: '/' })}
          className="bg-accent text-white px-6 py-2 rounded"
        >
          Sign in with Discord
        </button>
      </div>
    );
  }
  