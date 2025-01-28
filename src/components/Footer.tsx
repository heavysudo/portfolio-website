const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Heavysudo. All rights reserved.</p>
        <div className='mt-4'>
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
      </div>
    </footer>
  )
}

export default Footer
