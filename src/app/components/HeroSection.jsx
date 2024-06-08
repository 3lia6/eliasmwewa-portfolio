import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Left Column */}
        <div>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-blue-600 to-purple-800'> Hello There, I&apos;m {" "}</span>
            <TypeAnimation
              sequence={[
                'Elias Mwewa',
                800,
                'a data analyst ',
                800,
                'a software developer',
                800,
                'from Zambia',
                800,
              ]}
              wrapper="span"
              speed={250}
              repeat={Infinity}
            />
          </h1>
          <p className="text-1xl mt-4 text-balance mb-4">
            Discover my diverse projects in software development and Information Systems and Technology.
            From innovative solutions to impactful creations, I&apos;m dedicated to leveraging technology for positive change.
            Join me for more products and services! 
          </p>
          <p>NOTICE: Please note that the portfolio is still undergoing development. More features and updates will be added later.</p>
          <div className="mt-6 space-x-4">
            <a
              href="https://wa.me/260974080091"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded bg-gradient-to-r from-blue-900 to-orange-500 text-white"
            >
              Hire Me
            </a>
            <a
              href="/images/my resume.pdf"
              download
              className="px-4 py-3 rounded bg-gradient-to-r to-blue-900 from-orange-600 text-white"
            >
              Download my Resume/CV
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex justify-center items-center'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/something new.png'
              alt='hero image'
              width={300}
              height={300}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
