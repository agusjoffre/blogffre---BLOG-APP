import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { type Post } from '@/lib/types'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props): JSX.Element => {
  const src = post.imageURL
  return (
    <article className='duration-1000 hover:scale-105'>
      <Card
        className='hover:shadow-3xl max-h-[500px] min-h-full min-w-72
       max-w-72 overflow-y-hidden
       break-words shadow-2xl'
      >
        <Image
          alt={post.title}
          src={src}
          width={200}
          height={200}
          className='w-full max-h-36 object-cover'
        />

        <CardHeader className='whitespace-pre-wrap'>
          <CardTitle className='lora'>{post.title}</CardTitle>
          <CardDescription className='lora overflow-hidden'>
            {post.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className='flex w-full flex-wrap items-center gap-2'>
          {post.tags.map(tag => {
            return (
              <Badge key={tag} variant={'outline'}>
                {tag}
              </Badge>
            )
          })}
        </CardContent>

        <CardFooter className='flex items-center justify-between'>
          <p className='lora text-muted-foreground'>
            de{' '}
            <span className='lora font-semibold text-foreground text-sm'>
              {post.author}
            </span>
          </p>
          <Badge className='bg-[var(--accent)] font-semibold text-[var(--accent-foreground)]'>
            {post.createdAt.toLocaleDateString('es-ES')}
          </Badge>
        </CardFooter>
      </Card>
    </article>
  )
}

export default PostCard
