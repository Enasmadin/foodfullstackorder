import React from 'react'
import Link from '../Link'
import { Pages, Routes } from '@/constants/enums';

const Navbar = () => {
    const links = [
    {
      id: crypto.randomUUID(),
      title: "Menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "About",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "Contact",
      href: Routes.CONTACT,
        },
       {
      id: crypto.randomUUID(),
      title: "login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
      <nav className='flex flex-1 justify-end '>
          <ul className=' lg-fixed px-10 py-20  bg-background lg:bg-transparent lg:flex lg:space-x-10'> 
              {links.map((link) => (<li key={link.id}> <Link href={link.href}> {link.title }</Link></li>))}
          </ul>
     </nav>
  )
}

export default Navbar