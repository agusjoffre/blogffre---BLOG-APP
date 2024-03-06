'use server'
import ArticleCard from '@/components/mycomponents/ArticleCard'
import { getFirstFiveHundredCharactersFromContent } from '@/lib/helpers'
import { getPostsOfUser } from '@/lib/actions'
import { type Post } from '@/lib/types'
import Link from 'next/link'
const MyPostsPage = async (): Promise<JSX.Element> => {
  const posts: Post[] = await getPostsOfUser()
  return (
    <main className='flex h-full w-full flex-col items-center gap-12 py-14'>
      <h1 className='text-5xl font-bold'>Mis articulos</h1>
      {posts.length === 0 && <p>No hay articulos</p>}
      <section className='flex h-full w-full flex-col items-center gap-12'>
        {posts?.map(async post => {
          const contentSliced = await getFirstFiveHundredCharactersFromContent(
            post.content
          )
          return (
            <Link href={`/posts/${post._id}`} key={post._id}>
              <ArticleCard post={post} content={contentSliced} />
            </Link>
          )
        })}
      </section>
    </main>
  )
}

export default MyPostsPage
