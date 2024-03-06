'use server'
import CommunityPosts from '@/components/mycomponents/CommunityPosts'
import Hero from '@/components/mycomponents/Hero'
import MainPost from '@/components/mycomponents/MainPost'
import { getAllPosts } from '@/lib/actions'
import {
  getFirstFiveHundredCharactersFromContent,
  getLastPosted
} from '@/lib/helpers'

const Home = async (): Promise<JSX.Element> => {
  const allPosts = await getAllPosts()
  const lastPost = await getLastPosted(allPosts)
  const firstFiveHundred = await getFirstFiveHundredCharactersFromContent(
    lastPost.content
  )
  return (
    <div className='flex h-full flex-col gap-12 pb-28 md:mx-52'>
      <Hero />
      <MainPost lastPost={lastPost} firstFiveHundred={firstFiveHundred} />
      <CommunityPosts allPosts={allPosts} />
    </div>
  )
}

export default Home
