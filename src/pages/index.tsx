import Biography from '@/components/sections/Biography'
import Landing from '@/components/sections/Landing'

export default function Home() {
  return (
    <section
      id='top'
      className='flex-1 min-h-auto flex flex-col justify-start xl:justify-center xl:min-h-screen'
    >
      <Landing />
      <Biography />
    </section>
  )
}
