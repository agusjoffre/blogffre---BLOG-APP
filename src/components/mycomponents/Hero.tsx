interface Props {}

const Hero = (props: Props): JSX.Element => {
  return (
    <main className='flex h-full w-full flex-col items-center pt-8'>
      <section className='flex flex-col items-center gap-6 w-full'>
        <h1 className='noto-sans text-8xl font-semibold'>Blogffre</h1>
        <article className='bg-foreground text-primary-foreground px-16 py-2 w-full'>
          <p className='lora text-xl text-center'>Un blog para el estudiante</p>
        </article>
      </section>
    </main>
  )
}

export default Hero
