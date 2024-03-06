/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Plus, Tag, Link } from 'lucide-react'
import { useState } from 'react'
import { createPost } from '@/lib/actions'
import ButtonSubmit from './ButtonSubmit'
import ContentEditor from './ContentEditor'
import { Badge } from '../ui/badge'

const CreatePostForm = (): JSX.Element => {
  const [contentValue, setContentValue] = useState<string>('')
  const [newTag, setNewTag] = useState<string>('')
  const [newSource, setNewSource] = useState<string>('')
  const [tags, setTags] = useState<string[]>([''])
  const [sources, setSources] = useState<string[]>([''])

  function handleNewTag(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewTag(e.target.value)
  }

  function handleTagClick(): void {
    if (newTag.length > 0) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  function handleNewSource(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewSource(e.target.value)
  }

  function handleSourceClick(): void {
    if (newSource.length > 0) {
      setSources([...sources, newSource])
      setNewSource('')
    }
  }

  const createPostWithSourcesAndTags = createPost.bind(
    null,
    tags,
    sources,
    contentValue
  )
  return (
    <form
      action={createPostWithSourcesAndTags}
      className='lora flex flex-col gap-8 '
    >
      {/* upload banner image */}
      <section className='flex w-full items-center justify-center'>
        <Label className='flex h-72 w-full flex-col items-center justify-center gap-6'>
          <Input
            placeholder='Subir portada'
            type='file'
            name='image'
            className='h-full w-full cursor-pointer text-center hover:bg-secondary'
            max={1024}
            accept='image/*'
            required
          />
        </Label>
      </section>
      <div className='mx-[35rem] h-full'>
        <section className='mb-16 flex w-full flex-col gap-8'>
          {/* title */}
          <Label className='w-full border-b-[1px] border-b-muted-foreground'>
            <span className='text-2xl font-medium'>Titulo</span>
            <Input
              name='title'
              inputMode='text'
              className='h-fit w-full border-none bg-none text-xl font-bold'
              placeholder='ej. San Martin y el cruce de los Andes'
              type='text'
              minLength={4}
              maxLength={50}
              required
            />
          </Label>
          {/* subtitle */}
          <Label className='w-full border-b-[1px] border-b-muted-foreground'>
            <span className='text-base font-normal'>Subtitulo</span>
            <Input
              name='subtitle'
              inputMode='text'
              className='h-fit w-full border-none bg-none text-lg font-medium'
              placeholder='ej. Una historia de montañas y libertades'
              type='text'
              minLength={4}
              maxLength={100}
            />
          </Label>
        </section>

        {/* content editor */}
        <main>
          <ContentEditor
            contentValue={contentValue}
            setContentValue={setContentValue}
          />
        </main>

        <section className='mb-10 mt-9 flex flex-col justify-center gap-8'>
          <div className='flex w-full flex-col gap-4 '>
            {/* keywords */}
            <Label>Palabras clave</Label>
            <div className='flex items-center  gap-4 '>
              <Input
                value={newTag}
                onChange={handleNewTag}
                inputMode='text'
                className='h-fit w-2/12 
                border-x-0 border-b-[1px] border-t-0 border-b-muted-foreground bg-none text-lg font-medium'
                placeholder='ej. Andes'
                type='text'
                minLength={2}
                maxLength={10}
              />

              {/* add keywords */}
              <Button
                onClick={handleTagClick}
                type='button'
                variant={'outline'}
                size={'sm'}
                aria-description='Añadir tag'
              >
                <Plus fontFamily='noto-sans' />
              </Button>
              <div className='flex items-center gap-4'>
                <Tag />
                {tags.map(tag => {
                  if (tag === '') {
                    return null
                  }
                  return (
                    <Badge variant={'default'} key={tag}>
                      {tag}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 '>
            {/* sources */}
            <Label>Links a las fuentes</Label>
            <div className='flex items-center gap-4 '>
              <Input
                value={newSource}
                onChange={handleNewSource}
                inputMode='text'
                className='h-fit w-1/3 
                border-x-0 border-b-[1px] border-t-0 border-b-muted-foreground bg-none text-lg font-medium'
                placeholder='ej. www.wikipedia.com'
                type='text'
                minLength={5}
                maxLength={25}
              />

              {/* add sources */}
              <Button
                onClick={handleSourceClick}
                type='button'
                variant={'outline'}
                size={'sm'}
                aria-description='Añadir fuente'
              >
                <Plus fontFamily='noto-sans' />
              </Button>
              <div className='flex items-center gap-4'>
                <Link />
                {sources.map(source => {
                  if (source === '') {
                    return null
                  }
                  return (
                    <Badge variant={'secondary'} key={source}>
                      {source}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <div className='mb-24 flex justify-center'>
          <ButtonSubmit size='sm' text='Crear' variant='default' />
        </div>
      </div>
    </form>
  )
}

export default CreatePostForm
