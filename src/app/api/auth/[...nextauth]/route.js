

import NextAuth, { NextAuthOptions }  from 'next-auth';
import Discord from 'next-auth/providers/discord';

const authOptions = {
    providers: [
        Discord({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET,
          authorization: {
            params: {
              scope: 'identify email',
            },
          },
        }),
      ],
      pages: {
        signIn: '/'
      },
      callbacks: {
        async jwt({ token, account, profile }) {
          if (account && token) {
            token.id = profile.id
          }
          return token;
        },
        async session({ session, token, user }) {
          if (token.id) {
            session.user = {
                ...session.user,
                id: token.id
            };
          }
          return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) {
                return url;
              }
              return baseUrl;        
        }
    }
}

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);