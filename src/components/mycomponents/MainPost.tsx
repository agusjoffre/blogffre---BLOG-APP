/* eslint-disable react/no-danger-with-children */
import { Badge } from '@/components/ui/badge'
import { type Post } from '@/lib/types'
import { Tag } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
  lastPost: Post
  firstFiveHundred: string
}

const MainPost = ({ lastPost, firstFiveHundred }: Props): JSX.Element => {
  const src = lastPost.imageURL
  return (
    <section className='flex h-full w-full flex-col items-center'>
      <article className='flex justify-between gap-16 md:flex-row'>
        <div className='flex w-1/2 flex-col gap-4'>
          <h1 className='lora  text-7xl font-bold text-foreground'>
            {lastPost.title}
          </h1>
          <Link href={`/posts/${lastPost._id}`}>
            <Button
              variant={'ghost'}
              className='text-lg font-semibold text-foreground hover:text-[var(--accent)]'
            >
              Ver más
            </Button>
          </Link>
        </div>
        <div className='flex w-1/2 flex-col gap-2'>
          <h3 className='lora text-lg font-medium text-foreground'>
            {lastPost.subtitle}
          </h3>
          <p
            className='lora text-sm text-muted-foreground '
            dangerouslySetInnerHTML={{ __html: firstFiveHundred }}
          ></p>
          <div className='flex pt-4 md:flex-row md:items-center md:justify-between gap-8'>
            <p className='lora text-muted-foreground'>
              de {''}
              <span className='lora font-semibold text-foreground'>
                {lastPost.author}
              </span>
            </p>
            <Badge className='bg-[var(--accent)] text-[var(--accent-foreground)]'>
              {lastPost.createdAt.toLocaleDateString('es-ES')}
            </Badge>
            <div className='flex w-2/3 flex-wrap items-center gap-2'>
              <Tag />
              {lastPost.tags.map(tag => {
                return <Badge key={tag}>{tag}</Badge>
              })}
            </div>
          </div>
        </div>
      </article>
      <article className='mt-10 h-fit w-full border-[1px] border-muted-foreground'>
        <Link href={`/posts/${lastPost._id}`}>
          <Image
            alt='Post image'
            src={src}
            width={1920}
            height={1080}
            className='h-[800px] w-full cursor-pointer bg-no-repeat object-cover hover:opacity-80 hover:duration-500'
          />
        </Link>
      </article>
    </section>
  )
}

export default MainPost
