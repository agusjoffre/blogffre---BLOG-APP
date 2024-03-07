'use server'
import { connection } from '../lib/db/connect'
import PostSchema from '../lib/db/models/PostSchema'
import { type Post } from '../lib/types'

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

export const getOnePost = async (id: string): Promise<Post> => {
  await connection()
  const post = await PostSchema.findById(id)
  return post
}
