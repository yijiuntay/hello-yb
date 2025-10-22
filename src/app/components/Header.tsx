// app/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 border-b-4 border-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Wrap the h1 with Link to navigate to the homepage ("/") */}
        <Link href="/">
          <h1 className="text-xl md:text-2xl text-yellow-300 cursor-pointer" style={{ textShadow: '2px 2px 0px #000' }}>
            Hello YB
          </h1>
        </Link>
        <nav>
          <a href="/constituencies" className="text-white hover:text-yellow-300 transition-colors">
            Constituencies
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;