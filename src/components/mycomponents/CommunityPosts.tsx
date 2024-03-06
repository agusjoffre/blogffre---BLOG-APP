import { type Post } from '@/lib/types'
import PostCard from './PostCard'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'

interface Props {
  allPosts: Post[]
}

const CommunityPosts = ({ allPosts }: Props): JSX.Element => {
  return (
    <section className='flex h-full w-full flex-col gap-8'>
      <article className='border-b-[1px] border-b-muted-foreground pb-4'>
        <h3 className='text-2xl font-medium text-muted-foreground'>
          Posteos de la{' '}
          <span className='text-3xl font-bold text-foreground'>Comunidad</span>
        </h3>
      </article>
      <ScrollArea className='overflow-x-scroll whitespace-nowrap shadow-none bg-transparent'>
        <div className='flex w-max gap-8 md:flex-row shadow-none'>
          {allPosts?.map(post => {
            return (
              <Link key={post._id} href={`/posts/${post._id}`}>
                <PostCard post={post} />
              </Link>
            )
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  )
}

export default CommunityPosts
