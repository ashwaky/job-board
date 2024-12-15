import Image from "next/image";
import Hero from "./Components/Hero";
import Jobs from "./Components/Jobs";
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
  signOut,
} from '@workos-inc/authkit-nextjs';
export default async function Home() {

 
  const { user } = await withAuth();

 
  const signInUrl = await getSignInUrl();

 
  const signUpUrl = await getSignUpUrl(); 

  return (
    <>
      <Hero />
      <Jobs />
    </>
  );
}
