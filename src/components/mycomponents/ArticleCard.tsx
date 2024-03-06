import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { type Post } from '@/lib/types'
import { Badge } from '../ui/badge'
import { Tag } from 'lucide-react'
import Image from 'next/image'

interface Props {
  post: Post
  content: string
}

const ArticleCard = ({ post, content }: Props): JSX.Element => {
  return (
    <article className='mx-32 flex rounded-xl cursor-pointer hover:scale-105 duration-1000'>
      <Card className='lora rounded-none'>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.subtitle}</CardDescription>
        </CardHeader>
        <CardContent
          dangerouslySetInnerHTML={{ __html: content }}
          className='whitespace-pre-wrap'
        ></CardContent>
        <CardFooter>
          <div className='flex gap-16'>
            <Badge className='bg-[var(--accent)] text-[var(--accent-foreground)]'>
              {post.createdAt.toLocaleDateString('es-ES')}
            </Badge>
            <div className='flex gap-2'>
              <Tag />
              {post.tags.map(tag => {
                return (
                  <Badge key={tag} variant={'outline'}>
                    {tag}
                  </Badge>
                )
              })}
            </div>
          </div>
        </CardFooter>
      </Card>
      <Image
        src={post.imageURL}
        alt={post.title}
        width={300}
        height={300}
        className='w-1/2 max-h-full min-h-full rounded-r-xl shadow-2xl border-[1px] border-muted object-cover'
      />
    </article>
  )
}

export default ArticleCard
