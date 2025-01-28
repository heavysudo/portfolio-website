import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>My Blog</h1>
      <ul className='space-y-4 h-screen'>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link
              href={`/blog/${id}`}
              className='text-blue-600 hover:underline'
            >
              {title}
            </Link>
            <br />
            <small className='text-gray-500'>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
