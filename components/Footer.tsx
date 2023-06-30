import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col fleex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='fleex flex-col justify-start items-start gap-6'>
          <Image src="/logo.png" alt="logo" width={118} height={18} className='object-contain' />
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link 
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'>
                    {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 Book Hub. All rights reserved.</p>
        <div className='footer__copyrights-link'>
          <Link href={"/"} className='text-gray-500'>
            Privcy Policy
          </Link>
          <Link href={"/"} className='text-gray-500'>
            Terms of Use
          </Link>
          <Link href={"/"} className='text-gray-500'>
            Privcy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer