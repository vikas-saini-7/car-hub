import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-a00 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='logo.svg' alt='logo' width={118} height={18} className='object-contain' />
                {/* <p className='font-bold text-base text-gray-700'>Find, book or rent a car — quickly and easily!</p> */}
                <p className='text-base text-gray-700'>
                    Carhub 2023 <br />
                    &copy; All rights reserved 
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((link) => (
                    <div key={link.title} className='footer__link'>
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map((item) => (
                            <Link key={item.title} href={item.url}>{item.title}</Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        
        <div className='flex flex-wrap justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <div className='footer__copyright-link'>
                <Link href='/' className='text-gray-500'>Terms of use</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer