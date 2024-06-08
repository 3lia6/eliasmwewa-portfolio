import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
                <div className='overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <div className="flex justify-center w-full">
                        <Link href={gitUrl} className='h-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center w-14 mr-4'>
                            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white' />
                        </Link>
                        <Link href={previewUrl} className='h-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center w-14'>
                            <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-xl font-semi-bold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
