import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <nav className="container flex items-center justify-between m-2">
   
        <ModeToggle  />
 

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default Nav;
