const Footer = () => {
  return (
    <footer className='text-white font-mono absolute bottom-2 ml-[50%] tranform translate-x-[-50%]'>
      <div className='flex flex-row space-x-4'>
        <div className='flex'>
          <a
            href='https://github.com/heavysudo'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-gray-300'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/christopherleesantos'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-gray-300'
          >
            LinkedIn
          </a>
          <a
            href='https://reddit.com/u/heavysudo'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-2 hover:text-gray-300'
          >
            Reddit
          </a>
        </div>
        <span>|</span>
        <p>&copy; {new Date().getFullYear()} Heavysudo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
