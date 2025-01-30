import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='text-white font-mono font-thin h-full w-64 absolute left-0 bg-gray-800'>
      <ul className='flex flex-col items-center space-y-6 py-6 pl-2 pr-2 w-full'>
        <li>
          <Link href='/' className='hover:text-amber-300 text-2xl'>
            HEAVYSUDO
          </Link>
        </li>
        <li className='hover:text-amber-200 hover:bg-slate-500 bg-zinc-700 w-full flex justify-center rounded-md'>
          <Link href='/blog' className='p-2'>Blog</Link>
        </li>
        <li>
          <Link href='/photography' className='hover:text-amber-200'>
            Photography
          </Link>
        </li>
        <li>
          <Link href='/projects' className='hover:text-amber-200'>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-amber-200'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
