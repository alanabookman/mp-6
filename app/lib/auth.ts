import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authConfig = {
    providers: [
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
};


export const GET = NextAuth(authConfig);
export const POST = NextAuth(authConfig);
