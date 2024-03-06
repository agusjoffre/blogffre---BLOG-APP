import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

const AboutPage = (): JSX.Element => {
  return (
    <main className='mx-96 flex flex-col items-center gap-20 mb-40'>
      <div className='flex flex-col gap-4 py-14'>
        <h1 className='text-6xl font-bold'>Sobre mi / About me</h1>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-8'>
          <Avatar>
            <AvatarImage src='/avatar_cv.png' />
            <AvatarFallback>Agustin Lopez Joffre</AvatarFallback>
          </Avatar>
          <p className='text-2xl font-bold'>
            Agustin Lopez Joffre - Fullstack web developer
          </p>
        </div>
        <p className='text-xl'>
          🚀 Hi there! I&rsquo;m Agustin, a passionate self-taught web developer
          on a journey that kicked off in January of 2023. I&rsquo;ve delved
          deep into technologies like{' '}
          <span className='font-bold'>
            JavaScript, React, Next.js, Node.js, and TypeScript
          </span>
          , specializing in the <span className='font-bold'>MERN</span> stack.
        </p>
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-semibold'>🛠️ My skills include:</p>
          <ul className='flex flex-col text-xl'>
            <li>JavaScript (ES6+)</li>
            <li>React.js and Next.js</li>
            <li>Svelte</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>MongoDB and Express.js</li>
            <li>MERN stack</li>
          </ul>
        </div>
        <p className='text-xl'>
          📚 While my work experience is limited, my{' '}
          <span className='font-bold'>self-taught</span> approach has empowered
          me to acquire <span className='font-bold'>robust skills</span> and
          tackle challenges creatively. I&rsquo;m eager to{' '}
          <span className='font-bold'>keep learning </span>
          and applying my knowledge in professional settings.
        </p>
        <p className='text-xl'>
          💡 I&rsquo;m seeking opportunities to{' '}
          <span className='font-bold'>contribute and grow</span> as a web
          developer. My{' '}
          <span className='font-bold'>
            proactive attitude, problem-solving skills, and collaborative
            approach
          </span>{' '}
          make me an enthusiastic and dedicated candidate.
        </p>
        <p className='text-xl'>
          🔗{' '}
          <Link href='https://github.com/agusjoffre' target='_blank'>
            <Button
              variant={'link'}
              className='p-0 text-xl font-bold text-[var(--accent)]'
            >
              Let&rsquo;s connect
            </Button>
          </Link>{' '}
          and explore how I can bring value to your team or project! I&rsquo;m
          excited about the possibility of continued growth and contribution to
          the world of web development.
        </p>
      </div>
      <div className='flex'>
        <Link href='https://github.com/agusjoffre' target='_blank'>
          <Button
            variant={'link'}
            className='p-0 text-2xl font-bold text-[var(--accent)] hover:text-destructive'
          >
            <span className='flex items-center gap-8 font-semibold'>
              My repositories <Github className='h-full w-full' />
            </span>
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default AboutPage
