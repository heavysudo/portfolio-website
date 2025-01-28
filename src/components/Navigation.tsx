import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <ul className='flex justify-center space-x-6'>
        <li>
          <Link href='/' className='hover:text-gray-300'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/blog' className='hover:text-gray-300'>
            Blog
          </Link>
        </li>
        <li>
          <Link href='/photography' className='hover:text-gray-300'>
            Photography
          </Link>
        </li>
        <li>
          <Link href='/projects' className='hover:text-gray-300'>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-gray-300'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
