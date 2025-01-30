'use client'

import Image from 'next/image'
import logo from '../src/logo.jpg'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const arrowRef = useRef(null)

  function toggle() {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMouseEnter = (e) => {
    const link = e.target.getBoundingClientRect()
    const arrow = arrowRef.current
    arrow.style.left = `${link.left}px`
    console.log(link.left)
  }

  const handleClick = (e) => {
    setActiveLink(e.target)
    const link = e.target.getBoundingClientRect()
    const arrow = arrowRef.current
    arrow.style.left = `${link.left}px`
  }

  return (
    <header className="z-20 relative sticky top-0 flex justify-between bg-[#F7FEFF]/95 px-4 md:justify-around items-center h-20">
      <div
        ref={arrowRef}
        className="hidden md:flex arrow absolute -bottom-2 left-80 w-14 h-14 bg-[url('/arrow.png')] bg-contain bg-no-repeat bg-center transition-all duration-300 ease-in-out"
      ></div>
      <Link href="/" className="flex items-center gap-4">
        <Image src={logo} alt="" width={40} height={40} />
        <p className="text-xl text-blue-500 font-bold uppercase">
          Les Archers Saint Marinois
        </p>
      </Link>
      <div
        className={` absolute md:flex md:static md:h-20 md:w-max md:bg-transparent fixed left-0 top-20 w-full h-max shadow-xl md:shadow-none bg-[#F7FEFF] rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav
          id="menu"
          className="flex flex-col items-center h-full pl-20 py-8 md:mt-0 md:flex-row md:space-x-8"
        >
          <ul className="space-y-16 text-center text-lg md:flex md:items-center md:space-y-0 md:space-x-8">
            <li
              className="hover:text-blue-700 duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            >
              <Link className="border-b-4 border-transparent" href="/les-cours">
                horaires et tarifs
              </Link>
            </li>
            <li
              className="hover:text-blue-700 duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            >
              <Link className="border-b-4 border-transparent" href="/concours">
                concours
              </Link>
            </li>
            <li
              className="hover:text-blue-700 duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            >
              <Link className="border-b-4 border-transparent" href="#">
                galerie
              </Link>
            </li>
            <li
              className="hover:text-blue-700 duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onClick={handleClick}
            >
              <Link className="border-b-4 border-transparent" href="/contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-10 relative bg-sky-200 rounded"
          onClick={toggle}
        >
          <span className="sr-only">Ouvrir le menu de navigation</span>
          <div className="block w-8 h-8 relative ">
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-blue-700 transform transition duration-500 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-blue-700 transform transition duration-500 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-blue-700 transform transition duration-500 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  )
}
