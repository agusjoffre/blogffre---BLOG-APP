'use server'
import { type Post } from './types'

export async function getLastPosted(allPosts: Post[]): Promise<Post> {
  const lastPosted = allPosts.reduce((prev, curr) => {
    return curr.createdAt > prev.createdAt ? curr : prev
  })
  return lastPosted
}

export async function getFirstFiveHundredCharactersFromContent(
  content: string
): Promise<string> {
  return content.slice(0, 500)
}


