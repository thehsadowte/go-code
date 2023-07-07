import AuthModal from '@/Components/Modals/AuthModal';
import Navbar from '@/Components/Navbar/Navbar';
import Image from 'next/image';
import React from 'react';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <Image
            src="/logo-main-2.png"
            alt="GoGoSpace Hero logo"
            width={500}
            height={900}
            className="rounded-full"
          />
        </div>
        <AuthModal />
      </div>
    </div>
  );
};
export default AuthPage;
