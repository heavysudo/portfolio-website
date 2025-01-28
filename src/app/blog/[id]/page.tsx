import { getPostData, getSortedPostsData } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = await params
  const postData = await getPostData(id)
  return (
    <article>
      <h1 className='text-3xl font-bold mb-4'>{postData.title}</h1>
      <div className='text-gray-500 mb-4'>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
