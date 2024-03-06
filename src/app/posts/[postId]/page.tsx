import { Badge } from '@/components/ui/badge'
import { getOnePost } from '@/lib/helpers'
import { type Post } from '@/lib/types'
import Image from 'next/image'

interface Props {
  params: {
    postId: string
  }
}

const Article = async ({ params: { postId } }: Props): Promise<JSX.Element> => {
  const post: Post = await getOnePost(postId)
  const src = post?.imageURL
  return (
    <main className='flex h-full w-full flex-col items-center gap-28 pb-28'>
      <div className='h-80 w-full'>
        <Image
          alt={post.title}
          src={src}
          width={1920}
          height={1080}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='mx-96 flex flex-col gap-16'>
        <section className='flex flex-col border-b-[1px] border-b-muted-foreground pb-8'>
          <h1 className='lora whitespace-pre-line text-4xl font-semibold'>
            {post.title}
          </h1>
          <article className='flex pt-8 md:flex-row md:items-center md:justify-between'>
            <h2 className='lora whitespace-pre-line text-xl'>
              {post.subtitle}
            </h2>
            <p className='lora whitespace-pre-line text-end text-xl font-bold'>
              de {post.author}
            </p>
          </article>
          <p className='lora whitespace-pre-line pt-2 text-end'>
            {post.createdAt.toLocaleDateString('es-ES')}
          </p>
        </section>
        <section className='flex flex-col gap-12'>
          <article
            className='lora whitespace-pre-line text-lg'
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
          <section className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-4'>
              {post.sources.map(source => {
                return (
                  <Badge
                    className='lora w-fit whitespace-pre-line'
                    key={source}
                    variant={'destructive'}
                  >
                    {source}
                  </Badge>
                )
              })}
            </div>
            <div className='flex flex-wrap gap-4'>
              {post.tags.map(tag => {
                return (
                  <Badge
                    className='lora w-fit whitespace-pre-line'
                    key={tag}
                    variant={'secondary'}
                  >
                    {tag}
                  </Badge>
                )
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default Article
