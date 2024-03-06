const Hero = (): JSX.Element => {
  return (
    <main className='flex h-full w-full flex-col items-center pt-8'>
      <section className='flex w-full flex-col items-center gap-6'>
        <h1 className='noto-sans text-8xl font-semibold'>Blogffre</h1>
        <article className='w-full bg-foreground px-16 py-2 text-primary-foreground'>
          <p className='lora text-center text-xl'>Un blog para el estudiante</p>
        </article>
      </section>
    </main>
  )
}

export default Hero
