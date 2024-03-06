'use server'
import PostSchema from './db/models/PostSchema'
import { connection } from './db/connect'
import { redirect } from 'next/navigation'
import { storage } from './firebase'
import {
  type StorageReference,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage'
import { currentUser, auth } from '@clerk/nextjs'
import { type Post } from './types'
import { revalidatePath } from 'next/cache'

const { userId } = auth()

export async function createPost(
  tags: string[],
  sources: string[],
  contentValue: string,
  formData: FormData
): Promise<void> {
  const image = formData.get('image') as File

  // CHECK SI LA IMAGEN ES VALIDA
  const allowedFormats = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowedFormats.includes(image.type)) {
    console.log('Formato de imagen no permitido')
    return
  }

  // CHECK SI SIZE ES VALIDO
  const maxSize = 1048576
  if (image.size > maxSize) {
    console.log('Imagen demasiado grande. El tamaño maximo es de 1MB')
    return
  }

  // SUBE IMAGEN A FIREBASE
  const imageRef = ref(
    storage,
    `images/${image.name}{${crypto.randomUUID()}}${userId}`
  ) // agregar USERID
  await uploadBytes(imageRef, image)
  // TOMA URL DE LA IMAGEN DESDE FIREBASE
  const url = await getImageFromFirebase(imageRef)

  // elimina primer elemento del array (siempre vacio)
  tags.shift()
  sources.shift()

  const user = await currentUser()
  // creacion del post object
  const post: Post = {
    title: formData.get('title') as string,
    subtitle: formData.get('subtitle') as string,
    content: contentValue,
    imageURL: url,
    tags,
    sources,
    createdAt: new Date(),
    userId,
    author:
      user?.username != null
        ? user.username
        : user?.firstName + ' ' + user?.lastName
  }

  await connection()
  console.log('Creating Post...')

  // POST TO MONGODB
  if (PostSchema === null) {
    return
  }
  const newPost = new PostSchema(post)
  await newPost.save()

  console.log('Post created')
  revalidatePath('/create')
  revalidatePath('/posts/myposts')
  revalidatePath('/')
  redirect('/')
}

const getImageFromFirebase = async (
  imageRef: StorageReference
): Promise<string> => {
  const url = await getDownloadURL(imageRef)
  return url
}

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    await connection()
    const allPosts: Post[] = await PostSchema.find()
    return allPosts
  } catch (err) {
    const error = err as Error
    console.log(error)
    throw new Error('Error al cargar los posts', { cause: error.message })
  }
}

export const getPostsOfUser = async (): Promise<Post[]> => {
  try {
    await connection()
    const posts = await PostSchema.find({ userId })
    console.log(posts)
    return posts
  } catch (err) {
    const error = err as Error
    console.log(error)
    throw new Error('Error al cargar los posts del usuario', {
      cause: error.message
    })
  }
}
