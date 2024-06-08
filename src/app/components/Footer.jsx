import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-purple-400 py-8">
      {/* Top Row */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side with logo */}
        <div className="flex items-center text-white">
          <Image src='/images/something new.png' alt="Company Logo" width={100} height={100} />
          <h1 className="font-cursive text-xl ml-4">Elias Mwewa</h1>
        </div>
        {/* Right side with links */}
        <div className="flex flex-col md:flex-row md:justify-center mt-4 md:mt-0">
          <div className="md:mr-8 mb-4 md:mb-0 justify-center">
            <h2 className="text-lg font-semibold text-white mb-2">My Associates</h2>
            <ul className="list-none">
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Zambart</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Recursive Tech Sol</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">FKCM Fisheries</a></li>
            </ul>
          </div>
          <div className="md:mr-8 mb-4 md:mb-0 justify-center">
            <h2 className="text-lg font-semibold text-white mb-2">Associated Products</h2>
            <ul className="list-none">
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Zenith Mental Health</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">FKCM Fisheries</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Jesuit Ai</a></li>
            </ul>
          </div>
          <div className='justify-center'>
            <h2 className="text-lg font-semibold text-white mb-2">MY Services</h2>
            <ul className="list-none">
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">UI/UX Design</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">App Development</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Web Development</a></li>
              <li className="text-left mb-2"><a href="#" className="underline-none hover:text-white">Project Management</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Line to separate rows */}
      <hr className="border-gray-700 my-8" />
      {/* Bottom Row */}
      <div className="container mx-auto flex flex-col text-white md:flex-row items-center justify-between">
        {/* Left side with copyright */}
        <p className="mb-4 md:mb-0">&copy; All Rights Reserved Elias Mwewa, Recursive Tech Solutions</p>
        {/* Right side with terms and conditions and privacy policy */}
        <div>
          <p className="mb-4 md:mb-0 justify-between">
            <a href="#" className='mr-6 underline-none text-white hover:text-purple-500'>Terms and Conditions</a>
            <a href="#" className='underline-none text-white hover:text-purple-500'>Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
