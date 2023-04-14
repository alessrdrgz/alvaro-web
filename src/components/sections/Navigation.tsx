import { Icons } from '@/icons/Icons'
import MenuIcon from '@/icons/Menu'
import Image from 'next/image'
import Link from 'next/link'

const NAVIGATION_LINKS = [
  {
    title: 'Inicio',
    href: '#top'
  },
  {
    title: 'Biografía',
    href: '#biography'
  },
  {
    title: 'Contacto',
    href: '#contact'
  }
]

const SOCIAL_NETWORKS_LINKS = [
  {
    component: Icons.instagram,
    title: 'instagram',
    icon: '',
    href: 'https://instagram.com/alvarovazquezdj'
  },
  {
    component: Icons.youtube,
    title: 'youtube',
    icon: '',
    href: 'https://www.youtube.com/@alvarovazquezdj5009'
  }
]

export default function Navigation() {
  return (
    <aside className='flex flex:row items-center justify-between xl:justify-center text-primary px-4 xl:pb-20 xl:sticky xl:top-0 xl:flex-col xl:min-h-screen w-full'>
      <Link
        href='/#top'
        className='w-full h-full xl:h-auto py-6 hidden xl:block'
      >
        <Image src='/logo.webp' alt='Logo' width={1200} height={675} />
      </Link>

      <input type='checkbox' id='menu' hidden className='peer select-none' />
      <label
        htmlFor='menu'
        className='bg-zinc-800 w-8 h-8 p-2  border-zinc-500 flex items-center justify-center rounded-full border fixed right-4 bottom-4 xl:relative z-50 xl:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block cursor-pointer hover:scale-125 transition hover:border-white'
      >
        <MenuIcon />
      </label>

      <nav
        id='navbar'
        className='min-h-screen last fixed top-0 left-0 pointer-events-none opacity-0 peer-checked:opacity-100 peer-checked:pointer-events-auto right-0 z-40 flex py-12 px-8 bg-black/30 backdrop-blur-lg xl:bg-transparent text-center xl:opacity-100 xl:pointer-events-auto xl:min-h-0 xl:relative xl:px-0 justify-center flex-col xl:backdrop-blur-0 xl:mt-1 transition-opacity xl:transition-all'
      >
        <ul
          className='flex flex-col gap-y-8 mb-20'
          onClick={() => {
            console.log('mi pito es grande')
          }}
        >
          {NAVIGATION_LINKS.map(({ title, href }, i) => {
            return (
              <li key={i}>
                <Link
                  href={href}
                  className='relative py-3 leading-tight font-extrabold text-xl transition hover:text-white xl:text-2xl'
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='flex flex-row items-center justify-center gap-4 py-2'>
          {SOCIAL_NETWORKS_LINKS.map(({ component: Icon, href, title }, i) => {
            return (
              <a
                key={i}
                className='text-white hover:scale-125 transition-all hover:text-primary'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span aria-label={title}>
                  <Icon />
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
