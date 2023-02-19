import Link from 'next/link';
import React, {useState} from 'react'
// import { AiOutLineMenu, AiOutLineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div style={{ backgroundColor : `${color}`}} className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
        <div className='max-w-1240px m-auto flex justify-between items-center p-4 text-white'>
            <Link href="/">
                <h1 style={{ color : `${textColor}`}} className="text-4xl text-bold">Eye</h1>
            </Link>
            <ul style={{ color : `${textColor}`}} className='hidden sm:flex'>
                <li className="p-4">
                    <Link href="/home">Home</Link>
                </li>
                <li className="p-4">
                    <Link href="/register">Register</Link>
                </li>
                <li className="p-4">
                    <Link href="/login">login</Link>
                </li>
                <li className="p-4">
                    <Link href="/blog">blog</Link>
                </li>
                <li className="p-4">
                    <Link href="/#">Logout</Link>
                </li>
            </ul>
            {/* mobile Button */}
            <div onClick={ handleNav } className="block sm:hidden z-10">
                { nav ? <h1 style={{ color : `${textColor}`}} className="text-5xl">C</h1> : <h1 style={{ color : `${textColor}`}} className="text-5xl">O</h1> }
            </div>
            {/* mobile Menu */}
            <div className={ nav ? 'sm:hidden absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' } >
                <ul>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/#">Home</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/#">Gallery</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/blog">blog</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-500">
                        <Link href="/#">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;