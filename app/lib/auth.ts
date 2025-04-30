import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const authConfig = {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
};

export const GET = NextAuth(authConfig);
export const POST = NextAuth(authConfig);
