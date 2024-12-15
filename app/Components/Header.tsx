import { getSignInUrl,withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await withAuth();
  return (
    <header>
      <div className=" flex items-center justify-between mx-auto ">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
          {!user && (
          <Link className="bg-gray-200" href={"/login"}>
            Login
          </Link>
          )}
          <Link className="bg-blue-600 text-white" href={"/new-listing"}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
