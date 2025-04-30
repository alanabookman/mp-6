"use client";

import "./globals.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
        <main className="main">
          <h1 className="title">Welcome to CS391 OAuth</h1>
          <button
              onClick={() => signIn("github")}
              className="button"
          >
            Connect with GitHub
          </button>
        </main>
    );
  }

  return (
      <main className="main">
        <h1 className="welcome">Hello, {session.user?.name || "User"}!</h1>
        {session.user?.image && (
            <img
                src={session.user.image}
                alt="Profile Picture"
                className="profile-image"
            />
        )}
        <p className="user-email">{session.user?.email}</p>
        <button
            onClick={() => signOut()}
            className="button signout-button"
        >
          Sign out
        </button>
      </main>
  );
}
