'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-3'>
                <li>UI/UX Web Development</li>
                <li>Fullstack Development</li>
                <li>Systems Analysis, Design, Implementation and Administration</li>
                <li>Database administration</li>
                <li>Networking With Cisco Packet Tracer</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>University of Lusaka, Lusaka Zambia</li>
                <li>African Christian University</li>
                <li>Twin Palm Secondary School</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>BSc. Information Systems & Technology</li>
                <li>Biblical Scholarly Theology</li>
                <li>Highschool Certificate</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Consultant Software Developer - Zambart House</li>
                <li>Software Developer - Recursive Tech solutions</li>
                <li>Volunteer - Family Legacy</li>
            </ul>
        )
    },
    {
        title: 'Technologies',
        id: 'technologies',
        content: (
            <ul className='list-disc pl-2'>
                <li>Flutter/ FlutterFlow</li>
                <li>Next JS</li>
                <li>Bootstrap</li>
                <li>Tailwind Css, Css</li>
                <li>Html, and XML</li>
                <li>JavaScript</li>
                <li>Java - Knowledgeable</li>
                <li>C# - Knowledgeable</li>
                <li>PHP With SQL/MySQL</li>
                <li>Firebase platform</li>
                <li>Networking With Cisco Packet Tracer</li>
                <li>Virtualization With Virtual Box</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/elias.jpg" width={500} height={800} alt="elias"/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-semibold mt-6 mb-3'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Hello there! I&apos;m Elias Mwewa, a 24-year-old Information Systems 
                        and Technology Specialist from Lusaka, Zambia. With a 
                        Bachelor&apos;s degree from the University of Lusaka, I excel
                        in full-stack development, IT consultancy, technical 
                        support, and project management. I&apos;ve led software 
                        solutions for mental health screening at Zambart and 
                        co-founded Recursive Tech Solutions. Skilled in SQL, 
                        Javascript, PHP, C#, Bootstrap, and React, I&apos;m deeply 
                        interested in cybersecurity and data analytics, always eager for 
                        growth opportunities in the field.
                    </p>
                    <p className='text-base lg:text-lg mt-3'>
                        Current Networth - Cash poor. Hire me, I need more money.
                    </p>
                    <div className='flex flex-row justify-start mt-6'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}> 
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}> 
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}> 
                            Certifications
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}> 
                            Experience
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('technologies')} active={tab === 'technologies'}> 
                            Technologies
                        </TabButton>
                    </div>
                    <div className='mt-4'>
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
