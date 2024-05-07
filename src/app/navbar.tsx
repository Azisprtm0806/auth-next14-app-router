"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){

  const pathName = usePathname();
  const router = useRouter();

  const {data: session, status}: {data: any, status: string} = useSession();


  return (
    <nav className="flex bg-gray-800 py-5 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
          <li className={`mr-6 ${pathName === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
          </Link>
          <Link href="/about">
          <li className={`mr-6 ${pathName === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
          </Link>
          <Link href="/product">
          <li className={`mr-6 ${pathName === "/product" ? "text-blue-300" : "text-white"} cursor-pointer`}>Product</li>
          </Link>
          <Link href="/about/profile">
          <li className={`mr-6 ${pathName === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
          </Link>
        </ul>
      </div>


      <div>
        {
          status === 'authenticated' ? (
            <div className="flex">
            <h4 className="text-white mr-5">{session?.user?.fullname}</h4>
              <button onClick={() => signOut()} className="bg-white rounded-md h-7 px-4 text-sm cursor-pointer">Logout</button>
            </div>
          ) : (
            <button onClick={() => signIn()} className="bg-white rounded-md h-7 px-4 text-sm cursor-pointer">Login</button>
          )
        }
      </div>
    </nav>
  )
}