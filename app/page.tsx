import Image from "next/image";
import Hero from "./Components/Hero";
import Jobs from "./Components/Jobs";
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from '@workos-inc/authkit-nextjs';


export default async function Home() {

  // Retrieves the user from the session or returns `null` if no user is signed in
  const { user } = await withAuth();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();


  return (
    <>
      
      <Hero />
      <Jobs />
    </>
  );
}
