import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <Image
          src="/logo-green-2.png"
          alt="GoCode"
          width="130"
          height="200"
          className="mt-[80px] hover:scale-110 transition duration-300 ease-in-out"
        />
      </Link>
      <div className="flex items-center">
        <button className="bg-dark-green-s text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-olive hover:bg-white hover:border-2 hover:border-olive hover:scale-110 border-transparent transition duration-300 ease-in-out ">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
